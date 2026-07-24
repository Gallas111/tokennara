import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import KimpCalculator from "@/components/KimpCalculator";
import { getAllPosts } from "@/lib/posts";
import { CATEGORIES, CATEGORY_LIST } from "@/lib/categories";

export default function Home() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6 pt-14 pb-12 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary-soft)]">
                <span className="text-[11px] font-semibold tracking-wide text-[var(--secondary)]">
                  추천 아닌 기록 · 거래량·온체인·김프를 매일 정리
                </span>
              </div>
              <h1 className="text-[44px] md:text-[56px] leading-[1.05] font-extrabold mb-5 tracking-tight">
                알트코인을<br />
                <span className="brand-gradient">데이터로</span> 읽습니다
              </h1>
              <p className="text-[15px] md:text-base text-[var(--muted-strong)] leading-[1.7] mb-7 max-w-[480px]">
                매일 거래량·온체인·김치 프리미엄·프로젝트 펀더멘털을 모아 <strong className="text-[var(--text)] font-semibold">사실 그대로</strong> 정리합니다. 추천이 아닌 기록입니다.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="https://t.me/tokennara_kr"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--primary)] text-black font-bold text-[14px] hover:bg-[var(--primary-strong)] transition-all shadow-lg shadow-[var(--primary)]/15"
                >
                  텔레그램 데일리 받기
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--border-strong)] text-[var(--muted-strong)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors text-[14px] font-medium"
                >
                  운영자 소개
                </Link>
              </div>

              {/* 통계 strip */}
              <div className="mt-9 grid grid-cols-3 gap-5 pt-6 border-t border-[var(--border)]">
                <div>
                  <div className="text-[32px] leading-none stat-num text-[var(--primary)]">{posts.length}</div>
                  <div className="text-[11px] text-[var(--muted)] mt-2.5 tracking-wide">분석 글 발행</div>
                </div>
                <div>
                  <div className="text-[32px] leading-none stat-num text-white">{CATEGORY_LIST.length}</div>
                  <div className="text-[11px] text-[var(--muted)] mt-2.5 tracking-wide">데이터 시리즈</div>
                </div>
                <div>
                  <div className="leading-none flex items-baseline gap-1.5">
                    <span className="text-[20px] font-bold text-[var(--accent)] tracking-tight">매일</span>
                    <span className="text-[28px] stat-num text-[var(--accent)]">8</span>
                    <span className="text-[16px] mono font-bold text-[var(--accent)]/70">AM</span>
                  </div>
                  <div className="text-[11px] text-[var(--muted)] mt-2.5 tracking-wide">데이터 푸시</div>
                </div>
              </div>
            </div>

            {/* 실시간 김프 계산기 */}
            <KimpCalculator />
          </div>
        </section>

        {/* 카테고리 시리즈 */}
        <section className="border-b border-[var(--border)] bg-[var(--surface)]/40">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex items-end justify-between mb-7">
              <div>
                <div className="text-[11px] mono uppercase tracking-[0.2em] text-[var(--muted)] mb-2">SERIES</div>
                <h2 className="text-[26px] font-bold tracking-tight">4개 시리즈, <span className="text-[var(--muted)]">매일 매주 반복</span></h2>
              </div>
              <div className="text-[12px] text-[var(--muted)] hidden md:block">
                같은 시간 같은 자리에서 데이터를 추적합니다
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {CATEGORY_LIST.map((cat, idx) => (
                <Link
                  key={cat.key}
                  href={`/category/${cat.key}`}
                  className="card-glow group block p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--surface-2)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`cat-badge ${cat.className}`}>{cat.prefix}</span>
                    <span className="text-[10px] text-[var(--muted)] mono opacity-50">0{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-[15px] mb-1.5 text-[var(--text)]">{cat.label}</h3>
                  <p className="text-[12.5px] text-[var(--muted)] leading-[1.6]">{cat.desc}</p>
                  <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted)]">
                    <span>매일·매주</span>
                    <span className="text-[var(--primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">시리즈 보기 →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 피처드 + 최근글 */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          {featured && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] mono uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">TODAY · 최신</span>
                <span className="h-px flex-1 bg-gradient-to-r from-[var(--primary)]/40 to-transparent"></span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="card-glow block rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] via-[var(--bg)] to-[var(--bg)] p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-5 text-[12px]">
                  <span className={`cat-badge ${CATEGORIES[featured.category].className}`}>
                    {CATEGORIES[featured.category].prefix}
                  </span>
                  <span className="text-[var(--muted)] mono tabular">{featured.date}</span>
                  <span className="text-[var(--muted)] num">· {featured.readingMinutes}분 읽기</span>
                </div>
                <h2 className="text-[26px] md:text-[34px] font-extrabold leading-[1.2] mb-4 tracking-tight">{featured.title}</h2>
                <p className="text-[15px] text-[var(--muted-strong)] leading-[1.7] mb-5 max-w-[680px]">{featured.description}</p>
                <span className="inline-flex items-center gap-2 text-[var(--primary)] text-[14px] font-semibold">
                  전체 데이터 읽기
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </span>
              </Link>
            </div>
          )}

          <div className="flex items-center gap-2 mb-5">
            <span className="text-[11px] mono uppercase tracking-[0.2em] text-[var(--secondary)] font-semibold">최근 글</span>
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--secondary)]/40 to-transparent"></span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
