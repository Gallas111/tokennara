import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { extractH2s, slugifyHeading } from "@/lib/toc";
import { CATEGORIES } from "@/lib/categories";

// ReactMarkdown h2 children에서 순수 텍스트만 추출 (TOC 앵커 id 계산용)
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) {
    return textOf((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
    ...(post.noindex && {
      robots: { index: false, follow: true },
    }),
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();
  const cat = CATEGORIES[post.category];
  const toc = extractH2s(post.content);
  const related = getRelatedPosts(slug);

  return (
    <>
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="text-[12px] text-[var(--muted)] hover:text-[var(--primary)] mb-6 inline-block font-medium">
          ← 토큰나라 홈
        </Link>

        <header className="mb-10 pb-7 border-b border-[var(--border)]">
          <div className="flex items-center gap-2.5 mb-4 text-[12px]">
            <span className={`cat-badge ${cat.className}`}>{cat.prefix}</span>
            <span className="text-[var(--muted)] mono tabular">{post.date}</span>
            <span className="text-[var(--muted)] num">· {post.readingMinutes}분 읽기</span>
          </div>
          <h1 className="text-[32px] md:text-[42px] font-extrabold leading-[1.18] tracking-tight mb-5">{post.title}</h1>
          <p className="text-[16px] text-[var(--muted-strong)] leading-[1.7]">{post.description}</p>
          <div className="mt-6 flex items-center gap-3 text-[12px] text-[var(--muted)]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center font-black text-black text-[13px]">
              {post.author.charAt(0)}
            </div>
            <div>
              <span className="text-[var(--text)] font-semibold">{post.author}</span>
              <span className="text-[var(--muted)]"> · 데이터 정리하는 사람</span>
            </div>
          </div>
        </header>

        {toc.length >= 3 && (
          <nav className="mb-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6" aria-label="목차">
            <div className="text-[11px] mono uppercase tracking-[0.2em] text-[var(--primary)] font-semibold mb-3">목차 · On This Page</div>
            <ol className="space-y-2 list-none m-0 p-0">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-[14px] text-[var(--muted-strong)] hover:text-[var(--primary)] transition-colors">
                    <span className="mono tabular text-[var(--muted)] mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <article className="prose-tokennara">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => {
                const id = slugifyHeading(textOf(children));
                return <h2 id={id || undefined}>{children}</h2>;
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        <div className="mt-12 rounded-3xl border border-[var(--primary)]/25 bg-gradient-to-br from-[var(--primary-soft)] via-[var(--surface)] to-[var(--bg)] p-7 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center gap-2 text-[11px] mono uppercase tracking-[0.2em] text-[var(--primary)] font-semibold mb-3">
              <span className="pulse-dot"></span> 매일 8AM 데이터 푸시
            </div>
            <h3 className="text-[20px] font-bold mb-2 tracking-tight">이 글이 도움 됐다면, 텔레그램으로</h3>
            <p className="text-[13.5px] text-[var(--muted)] mb-5 leading-[1.65]">
              알트 변동률·고래 입출금·청산 데이터를 한 줄 코멘트와 함께. 무료, 광고 없음, 언제든 해지.
            </p>
            <Link
              href="https://t.me/tokennara_kr"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--primary)] text-black font-bold text-[13px] hover:bg-[var(--primary-strong)] transition-colors shadow-lg shadow-[var(--primary)]/20"
            >
              텔레그램 채널 가입
              <span className="mono tabular opacity-70">3.2k+</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 disclaimer">
          <strong>⚠ 정보 제공 목적의 데이터 정리</strong> — 본 콘텐츠는 가상자산 매수·매도 권유가 아닙니다. 가격은 변동성이 매우 높으며 원금 손실이 발생할 수 있습니다. 투자 결정과 손익은 본인 책임입니다. 필자는 자본시장법·가상자산이용자보호법상 투자자문업·유사투자자문업 등록 사업자가 아닙니다.
        </div>

        {related.length > 0 && (
          <div className="mt-12 pt-7 border-t border-[var(--border)]">
            <div className="text-[11px] mono uppercase tracking-[0.2em] text-[var(--secondary)] font-semibold mb-3">다음 데이터</div>
            <h3 className="text-[18px] font-bold mb-5 tracking-tight">함께 보면 좋은 글</h3>
            <div className="space-y-3">
              {related.map((r) => {
                const rcat = CATEGORIES[r.category];
                return (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 hover:border-[var(--primary)]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5 text-[12px]">
                      <span className={`cat-badge ${rcat.className}`}>{rcat.prefix}</span>
                      <span className="text-[var(--muted)] mono tabular">{r.date}</span>
                      <span className="text-[var(--muted)] num">· {r.readingMinutes}분 읽기</span>
                    </div>
                    <p className="text-[14.5px] font-semibold text-[var(--text)] leading-[1.5]">{r.title}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
