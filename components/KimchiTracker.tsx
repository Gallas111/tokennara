const KIMP_DATA = [
  { sym: "BTC", upbit: "135,820,000", binance: "98,420", kimp: 1.82, vol: "1,247" },
  { sym: "ETH", upbit: "4,815,000",   binance: "3,485",  kimp: 2.14, vol: "384" },
  { sym: "SOL", upbit: "298,000",     binance: "215.6",  kimp: 2.41, vol: "221" },
  { sym: "XRP", upbit: "3,210",       binance: "2.31",   kimp: 1.45, vol: "168" },
  { sym: "DOGE",upbit: "535",         binance: "0.385",  kimp: 1.92, vol: "89" },
];

export default function KimchiTracker() {
  return (
    <div className="rounded-3xl border border-[var(--accent)]/25 bg-gradient-to-br from-[var(--accent-soft)] via-[var(--surface)] to-[var(--bg)] p-6 shadow-2xl shadow-black/30">
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] mono uppercase tracking-[0.15em] text-[var(--accent)] font-semibold">KIMP TRACKER</span>
            <span className="chip text-[var(--accent)] border-[var(--accent)]/30 bg-[var(--accent)]/8">
              <span className="pulse-dot" style={{ background: 'var(--accent)', boxShadow: '0 0 6px rgba(255,210,63,0.7)' }}></span>
              LIVE
            </span>
          </div>
          <h3 className="text-[20px] font-bold tracking-tight">김치 프리미엄</h3>
          <p className="text-[11.5px] text-[var(--muted)] mt-1">업비트 ↔ 바이낸스 · 60초 자동 갱신</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] mono uppercase text-[var(--muted)] tracking-[0.15em] mb-1">AVG</div>
          <div className="leading-none flex items-baseline justify-end gap-0.5 text-[var(--accent)]">
            <span className="text-[20px] stat-num">+</span>
            <span className="text-[36px] stat-num">1.82</span>
            <span className="text-[20px] stat-num opacity-80">%</span>
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="grid grid-cols-12 gap-2 px-3 pb-1.5 text-[10px] mono uppercase tracking-wider text-[var(--muted)]">
          <div className="col-span-2">SYM</div>
          <div className="col-span-3">UPBIT</div>
          <div className="col-span-3">BINANCE</div>
          <div className="col-span-2 text-right">김프</div>
          <div className="col-span-2 text-right">VOL</div>
        </div>
        {KIMP_DATA.map((row) => (
          <div
            key={row.sym}
            className="grid grid-cols-12 items-center gap-2 py-2.5 px-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors"
          >
            <div className="col-span-2 font-bold text-[13px]">{row.sym}</div>
            <div className="col-span-3 price-num text-[12.5px] text-[var(--muted-strong)]">
              <span className="text-[var(--muted)] mr-0.5">₩</span>{row.upbit}
            </div>
            <div className="col-span-3 price-num text-[12.5px] text-[var(--muted)]">
              <span className="opacity-70 mr-0.5">$</span>{row.binance}
            </div>
            <div className="col-span-2 price-num text-[14px] font-bold warn text-right">+{row.kimp}%</div>
            <div className="col-span-2 price-num text-[12px] text-[var(--muted)] text-right">
              <span className="opacity-70 mr-0.5">₩</span>{row.vol}<span className="text-[10px] ml-0.5 opacity-70">억</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px]">
        <span className="text-[var(--muted)] flex items-center gap-1.5">
          <span className="pulse-dot"></span>
          <span className="num">14초 전 업데이트</span>
        </span>
        <a href="/tools/kimp" className="text-[var(--accent)] font-semibold hover:underline">
          전체 코인 →
        </a>
      </div>
    </div>
  );
}
