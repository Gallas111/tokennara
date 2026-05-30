import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { CATEGORIES } from "@/lib/categories";

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

        <article className="prose-tokennara">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
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

        <div className="mt-12 pt-7 border-t border-[var(--border)]">
          <div className="text-[11px] mono uppercase tracking-[0.2em] text-[var(--secondary)] font-semibold mb-3">독자 반응</div>
          <h3 className="text-[18px] font-bold mb-5 tracking-tight">이 코인 어떻게 보세요?</h3>
          <div className="space-y-3">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <div className="flex items-center gap-2 mb-1.5 text-[12px]">
                <div className="w-5 h-5 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--primary)]">K</div>
                <span className="font-semibold text-[var(--text)]">kimp_hunter</span>
                <span className="text-[var(--muted)] num">· 3시간 전</span>
              </div>
              <p className="text-[13.5px] text-[var(--muted-strong)] leading-[1.6]">김프 1.8%면 평소 대비 낮은 편. 자금 유입 정체 신호?</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <div className="flex items-center gap-2 mb-1.5 text-[12px]">
                <div className="w-5 h-5 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--secondary)]">O</div>
                <span className="font-semibold text-[var(--text)]">onchain_seoul</span>
                <span className="text-[var(--muted)] num">· 5시간 전</span>
              </div>
              <p className="text-[13.5px] text-[var(--muted-strong)] leading-[1.6]">Whale Alert 보니까 거래소 입금 +1,200 BTC 떴음. 단기 매도 압력 주의</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
