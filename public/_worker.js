/**
 * CF Pages Advanced Mode worker (_worker.js가 있으면 functions/ 디렉토리는 무시됨)
 * 1) apex(tokennara.com) → www 301 리다이렉트
 * 2) /api/kimp — 업비트 시세 프록시 (엣지 10초 캐시)
 *    배경(실측): 업비트 quotation API는 CORS는 허용하지만 브라우저 Origin 요청을
 *    origin 단위로 강하게 제한(약 1req/10s·429 페널티). 서버측(무 Origin) 호출 + 캐시로 우회.
 * 3) 그 외 전부 정적 에셋
 */

const KIMP_MARKETS = [
  "KRW-BTC",
  "KRW-ETH",
  "KRW-XRP",
  "KRW-SOL",
  "KRW-DOGE",
  "KRW-ADA",
  "KRW-TRX",
  "KRW-AVAX",
  "KRW-LINK",
  "KRW-DOT",
  "KRW-USDT",
].join(",");

const KIMP_UPSTREAM = `https://api.upbit.com/v1/ticker?markets=${KIMP_MARKETS}`;
const KIMP_CACHE_SECONDS = 10;

function kimpError(message, status) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

async function handleKimp(ctx) {
  const cache = caches.default;
  const cacheKey = new Request("https://tokennara-kimp-cache.internal/upbit-ticker");

  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  let upstream;
  try {
    upstream = await fetch(KIMP_UPSTREAM, { headers: { Accept: "application/json" } });
  } catch (e) {
    return kimpError("upstream fetch failed", 502);
  }
  if (!upstream.ok) {
    return kimpError(`upstream status ${upstream.status}`, 502);
  }

  const body = await upstream.text();
  const res = new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": `public, max-age=${KIMP_CACHE_SECONDS}`,
      "Access-Control-Allow-Origin": "*",
    },
  });

  ctx.waitUntil(cache.put(cacheKey, res.clone()));
  return res;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.hostname === "tokennara.com") {
      url.hostname = "www.tokennara.com";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/api/kimp" && request.method === "GET") {
      return handleKimp(ctx);
    }
    return env.ASSETS.fetch(request);
  },
};
