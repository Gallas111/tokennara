"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * 김치프리미엄 실시간 계산기
 * - 업비트 quotation API(무키·공개) + 바이낸스 공개 ticker + open.er-api 환율
 * - 전부 클라이언트 fetch (정적 사이트). 소스별 실패 시 해당 칼럼만 "—" 처리.
 * - 김프% = 업비트 원화가 ÷ (바이낸스 달러가 × USD/KRW 환율) − 1
 * - 테더 김프 = 업비트 KRW-USDT ÷ USD/KRW 환율 − 1
 */

const COINS = [
  { sym: "BTC", name: "비트코인" },
  { sym: "ETH", name: "이더리움" },
  { sym: "XRP", name: "리플" },
  { sym: "SOL", name: "솔라나" },
  { sym: "DOGE", name: "도지코인" },
  { sym: "ADA", name: "에이다" },
  { sym: "TRX", name: "트론" },
  { sym: "AVAX", name: "아발란체" },
  { sym: "LINK", name: "체인링크" },
  { sym: "DOT", name: "폴카닷" },
] as const;

const UPBIT_URL =
  "https://api.upbit.com/v1/ticker?markets=" +
  COINS.map((c) => `KRW-${c.sym}`).join(",") +
  ",KRW-USDT";

const BINANCE_URL =
  "https://api.binance.com/api/v3/ticker/price?symbols=" +
  encodeURIComponent(JSON.stringify(COINS.map((c) => `${c.sym}USDT`)));

const FX_URL = "https://open.er-api.com/v6/latest/USD";

const REFRESH_MS = 30_000;

type PriceMap = Record<string, number>;

function fmtKrw(v: number | undefined): string {
  if (v === undefined || !isFinite(v)) return "—";
  if (v >= 1000) return Math.round(v).toLocaleString("ko-KR");
  if (v >= 100) return v.toLocaleString("ko-KR", { maximumFractionDigits: 1 });
  return v.toLocaleString("ko-KR", { maximumFractionDigits: 2 });
}

function fmtUsd(v: number | undefined): string {
  if (v === undefined || !isFinite(v)) return "—";
  if (v >= 1000) return v.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (v >= 1) return v.toLocaleString("en-US", { maximumFractionDigits: 3 });
  return v.toLocaleString("en-US", { maximumFractionDigits: 4 });
}

function KimpCell({ kimp }: { kimp: number | null }) {
  if (kimp === null || !isFinite(kimp)) {
    return <span className="text-[var(--muted)]">—</span>;
  }
  const pct = kimp * 100;
  const isReverse = pct < 0;
  return (
    <span
      className="price-num font-bold"
      style={{ color: isReverse ? "#4da6ff" : "var(--warn)" }}
    >
      {isReverse ? "" : "+"}
      {pct.toFixed(2)}%
      {isReverse && (
        <span
          className="ml-1 align-middle inline-block px-1 py-px rounded text-[9px] font-semibold leading-tight"
          style={{ background: "rgba(77,166,255,0.12)", border: "1px solid rgba(77,166,255,0.35)", color: "#4da6ff" }}
        >
          역프
        </span>
      )}
    </span>
  );
}

export default function KimpCalculator() {
  const [upbit, setUpbit] = useState<PriceMap | null>(null);
  const [binance, setBinance] = useState<PriceMap | null>(null);
  const [fx, setFx] = useState<number | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const failed: string[] = [];

    const [upRes, bnRes, fxRes] = await Promise.allSettled([
      fetch(UPBIT_URL).then((r) => {
        if (!r.ok) throw new Error(`upbit ${r.status}`);
        return r.json();
      }),
      fetch(BINANCE_URL).then((r) => {
        if (!r.ok) throw new Error(`binance ${r.status}`);
        return r.json();
      }),
      fetch(FX_URL).then((r) => {
        if (!r.ok) throw new Error(`fx ${r.status}`);
        return r.json();
      }),
    ]);

    if (upRes.status === "fulfilled" && Array.isArray(upRes.value)) {
      try {
        const map: PriceMap = {};
        for (const t of upRes.value) {
          const sym = String(t.market).replace("KRW-", "");
          const p = Number(t.trade_price);
          if (isFinite(p)) map[sym] = p;
        }
        setUpbit(map);
      } catch {
        failed.push("업비트");
      }
    } else {
      failed.push("업비트");
    }

    if (bnRes.status === "fulfilled" && Array.isArray(bnRes.value)) {
      try {
        const map: PriceMap = {};
        for (const t of bnRes.value) {
          const sym = String(t.symbol).replace("USDT", "");
          const p = Number(t.price);
          if (isFinite(p)) map[sym] = p;
        }
        setBinance(map);
      } catch {
        failed.push("바이낸스");
      }
    } else {
      failed.push("바이낸스");
    }

    if (fxRes.status === "fulfilled") {
      const rate = Number(fxRes.value?.rates?.KRW);
      if (isFinite(rate) && rate > 0) setFx(rate);
      else failed.push("환율");
    } else {
      failed.push("환율");
    }

    setErrors(failed);
    setUpdatedAt(
      new Date().toLocaleTimeString("ko-KR", { hour12: false })
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
    timerRef.current = setInterval(load, REFRESH_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [load]);

  const kimpOf = (sym: string): number | null => {
    const krw = upbit?.[sym];
    const usd = binance?.[sym];
    if (krw === undefined || usd === undefined || !fx) return null;
    const global = usd * fx;
    if (global <= 0) return null;
    return krw / global - 1;
  };

  const kimps = COINS.map((c) => kimpOf(c.sym)).filter(
    (k): k is number => k !== null
  );
  const avgKimp = kimps.length > 0 ? kimps.reduce((a, b) => a + b, 0) / kimps.length : null;

  const usdtKrw = upbit?.["USDT"];
  const tetherKimp =
    usdtKrw !== undefined && fx ? usdtKrw / fx - 1 : null;

  return (
    <div className="rounded-3xl border border-[var(--accent)]/25 bg-gradient-to-br from-[var(--accent-soft)] via-[var(--surface)] to-[var(--bg)] p-4 sm:p-6 shadow-2xl shadow-black/30">
      {/* 헤더 */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] mono uppercase tracking-[0.15em] text-[var(--accent)] font-semibold">
              KIMP CALCULATOR
            </span>
            <span className="chip text-[var(--accent)] border-[var(--accent)]/30 bg-[var(--accent)]/8">
              <span
                className="pulse-dot"
                style={{ background: "var(--accent)", boxShadow: "0 0 6px rgba(255,210,63,0.7)" }}
              ></span>
              LIVE
            </span>
          </div>
          <p className="text-[11.5px] text-[var(--muted)]">
            업비트 ↔ 바이낸스 · <span className="num">30</span>초 자동 갱신
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-[10px] mono uppercase text-[var(--muted)] tracking-[0.15em] mb-1">
            평균 김프
          </div>
          {avgKimp !== null ? (
            <div
              className="leading-none stat-num text-[26px] sm:text-[32px]"
              style={{ color: avgKimp < 0 ? "#4da6ff" : "var(--warn)" }}
            >
              {avgKimp < 0 ? "" : "+"}
              {(avgKimp * 100).toFixed(2)}%
            </div>
          ) : (
            <div className="leading-none stat-num text-[26px] sm:text-[32px] text-[var(--muted)]">—</div>
          )}
        </div>
      </div>

      {/* 소스 실패 안내 */}
      {errors.length > 0 && (
        <div className="mb-3 px-3 py-2 rounded-lg border border-[var(--warn)]/30 bg-[var(--warn)]/8 text-[11.5px] text-[var(--warn)]">
          {errors.join("·")} 데이터를 불러오지 못했습니다. 해당 값은 —로 표시됩니다. 잠시 후 자동 재시도합니다.
        </div>
      )}

      {/* 테이블 */}
      <div className="space-y-1.5">
        <div className="grid grid-cols-12 gap-1.5 sm:gap-2 px-2 sm:px-3 pb-1.5 text-[9.5px] sm:text-[10px] mono uppercase tracking-wider text-[var(--muted)]">
          <div className="col-span-2">코인</div>
          <div className="col-span-4 text-right">업비트 ₩</div>
          <div className="col-span-3 text-right">바이낸스 $</div>
          <div className="col-span-3 text-right">김프</div>
        </div>
        {COINS.map((c) => (
          <div
            key={c.sym}
            className="grid grid-cols-12 items-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors"
          >
            <div className="col-span-2">
              <div className="font-bold text-[12px] sm:text-[13px] leading-tight">{c.sym}</div>
              <div className="text-[9px] text-[var(--muted)] leading-tight hidden sm:block">{c.name}</div>
            </div>
            <div className="col-span-4 price-num text-[11px] sm:text-[12.5px] text-[var(--muted-strong)] text-right">
              {fmtKrw(upbit?.[c.sym])}
            </div>
            <div className="col-span-3 price-num text-[11px] sm:text-[12.5px] text-[var(--muted)] text-right">
              {fmtUsd(binance?.[c.sym])}
            </div>
            <div className="col-span-3 text-right text-[11.5px] sm:text-[13px]">
              <KimpCell kimp={kimpOf(c.sym)} />
            </div>
          </div>
        ))}
      </div>

      {/* 테더 김프 */}
      <div className="mt-3 grid grid-cols-12 items-center gap-1.5 sm:gap-2 py-3 px-2 sm:px-3 rounded-xl border border-[var(--secondary)]/30 bg-[var(--secondary-soft)]">
        <div className="col-span-5 sm:col-span-4">
          <div className="font-bold text-[12px] sm:text-[13px] leading-tight text-[var(--secondary)]">테더 김프</div>
          <div className="text-[9.5px] text-[var(--muted)] leading-tight mt-0.5">KRW-USDT ÷ 환율</div>
        </div>
        <div className="col-span-4 sm:col-span-5 price-num text-[11px] sm:text-[12.5px] text-[var(--muted-strong)] text-right">
          {usdtKrw !== undefined ? (
            <>
              <span className="text-[var(--muted)] mr-0.5">₩</span>
              {fmtKrw(usdtKrw)}
            </>
          ) : (
            "—"
          )}
        </div>
        <div className="col-span-3 text-right text-[11.5px] sm:text-[13px]">
          <KimpCell kimp={tetherKimp} />
        </div>
      </div>

      {/* 푸터: 환율·갱신시각·수동 새로고침 */}
      <div className="mt-4 pt-3 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2 text-[11px]">
        <span className="text-[var(--muted)]">
          적용 환율{" "}
          <span className="price-num text-[var(--muted-strong)]">
            {fx ? `$1 = ₩${fx.toLocaleString("ko-KR", { maximumFractionDigits: 1 })}` : "—"}
          </span>
          {updatedAt && (
            <span className="ml-2 num">
              {updatedAt} 갱신
            </span>
          )}
        </span>
        <button
          type="button"
          onClick={load}
          disabled={loading}
          className="px-3 py-1.5 rounded-lg border border-[var(--border-strong)] text-[var(--muted-strong)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-[11px] font-semibold disabled:opacity-50"
        >
          {loading ? "갱신 중…" : "↻ 새로고침"}
        </button>
      </div>
    </div>
  );
}
