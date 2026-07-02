/**
 * CF Pages Function: 업비트 시세 프록시 (/api/kimp)
 *
 * 배경(실측): 업비트 quotation API는 CORS 자체는 허용(Access-Control-Allow-Origin: *)하지만
 * 브라우저 Origin 헤더가 붙은 요청을 origin 단위로 강하게 제한(약 1req/10s, 429 페널티)한다.
 * → 브라우저 직접 호출 대신 이 프록시가 서버측(무 Origin)으로 호출하고 엣지에 10초 캐시.
 *   방문자가 많아도 업비트에는 콜로당 최대 ~6req/min만 나간다.
 *
 * 마켓 목록은 서버측 고정(사용자 입력 없음 → 오남용 방지).
 */

const MARKETS = [
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

const UPSTREAM = `https://api.upbit.com/v1/ticker?markets=${MARKETS}`;
const CACHE_KEY = new Request("https://tokennara-kimp-cache.internal/upbit-ticker");
const CACHE_SECONDS = 10;

export async function onRequestGet(context) {
  const cache = caches.default;

  const cached = await cache.match(CACHE_KEY);
  if (cached) {
    return cached;
  }

  let upstream;
  try {
    upstream = await fetch(UPSTREAM, {
      headers: { Accept: "application/json" },
    });
  } catch (e) {
    return jsonError("upstream fetch failed", 502);
  }

  if (!upstream.ok) {
    return jsonError(`upstream status ${upstream.status}`, 502);
  }

  const body = await upstream.text();

  const res = new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": `public, max-age=${CACHE_SECONDS}`,
      "Access-Control-Allow-Origin": "*",
    },
  });

  context.waitUntil(cache.put(CACHE_KEY, res.clone()));
  return res;
}

function jsonError(message, status) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
