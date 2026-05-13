import Link from "next/link";
import { CATEGORY_LIST } from "@/lib/categories";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* 텔레그램 깔때기 박스 */}
        <div className="rounded-3xl border border-[var(--primary)]/25 bg-gradient-to-br from-[var(--primary-soft)] via-[var(--surface)] to-[var(--bg)] p-8 mb-12 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[var(--primary)]/8 rounded-full blur-3xl"></div>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="text-[11px] mono uppercase tracking-[0.2em] text-[var(--primary)] font-semibold mb-2">매일 오전 8시</div>
              <h3 className="text-[22px] font-bold tracking-tight mb-1.5">텔레그램으로 데이터 받기</h3>
              <p className="text-[13.5px] text-[var(--muted)]">알트 변동률·고래 입출금·청산 알람. 무료, 광고 없음.</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Link
                href="https://t.me/tokennara_kr"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--primary)] text-black font-bold text-[13px] hover:bg-[var(--primary-strong)] transition-colors shadow-lg shadow-[var(--primary)]/20"
              >
                채널 가입 <span className="mono tabular opacity-70">3.2k+</span>
              </Link>
              <Link
                href="https://t.me/tokennara_bot"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border-strong)] text-[var(--muted-strong)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors text-[13px] font-medium"
              >
                고래·청산 봇
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-[13px]">
          <div>
            <div className="text-[10px] mono uppercase tracking-[0.2em] text-[var(--primary)] font-semibold mb-3">TOKENNARA</div>
            <ul className="space-y-2 text-[var(--muted)]">
              <li><Link href="/about" className="hover:text-[var(--primary)]">소개</Link></li>
              <li><Link href="/privacy" className="hover:text-[var(--primary)]">개인정보</Link></li>
              <li><Link href="/terms" className="hover:text-[var(--primary)]">이용약관</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] mono uppercase tracking-[0.2em] text-[var(--secondary)] font-semibold mb-3">시리즈</div>
            <ul className="space-y-2 text-[var(--muted)]">
              {CATEGORY_LIST.map((c) => (
                <li key={c.key}>
                  <Link href={`/category/${c.key}`} className="hover:text-[var(--primary)]">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] mono uppercase tracking-[0.2em] text-[var(--accent)] font-semibold mb-3">채널</div>
            <ul className="space-y-2 text-[var(--muted)]">
              <li><Link href="https://t.me/tokennara_kr" className="hover:text-[var(--primary)]">텔레그램 채널</Link></li>
              <li><Link href="https://t.me/tokennara_bot" className="hover:text-[var(--primary)]">고래·청산 봇</Link></li>
              <li><Link href="https://x.com/tokennara_kr" className="hover:text-[var(--primary)]">X (트위터)</Link></li>
              <li><Link href="https://youtube.com/@tokennara" className="hover:text-[var(--primary)]">유튜브</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] mono uppercase tracking-[0.2em] warn font-semibold mb-3">법적 고지</div>
            <p className="text-[11.5px] text-[var(--muted)] leading-[1.65]">
              본 사이트는 정보 제공 목적이며 가상자산 매수·매도 권유가 아닙니다. 투자 결정과 책임은 본인에게 있습니다.
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11.5px] text-[var(--muted)]">
          <div>© 2026 토큰나라 · 알트코인 데이터를 정리합니다</div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md border border-[var(--warn)]/40 text-[var(--warn)] mono text-[10px] tracking-wider">NOT FINANCIAL ADVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
