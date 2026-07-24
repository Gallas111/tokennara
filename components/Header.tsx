import Link from "next/link";
import { CATEGORY_LIST } from "@/lib/categories";

export default function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--primary)] via-[#00d9ff] to-[var(--secondary)] flex items-center justify-center font-black text-black text-base shadow-lg shadow-[var(--primary)]/20">
            토
          </div>
          <div className="leading-tight">
            <div className="text-[17px] font-bold tracking-tight">토큰나라</div>
            <div className="text-[10px] text-[var(--muted)] mono tracking-wider mt-0.5">ALT · DATA · DAILY</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-[13px]">
          {CATEGORY_LIST.map((cat) => (
            <Link
              key={cat.key}
              href={`/category/${cat.key}`}
              className="px-3 py-1.5 rounded-lg text-[var(--muted-strong)] hover:text-[var(--text)] hover:bg-[var(--surface)] transition-all font-medium"
            >
              {cat.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://t.me/tokennara_kr"
          className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--primary)] text-black text-[12px] font-bold hover:bg-[var(--primary-strong)] transition-colors shadow-md shadow-[var(--primary)]/20"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
          </svg>
          텔레그램
        </Link>
      </div>
    </header>
  );
}
