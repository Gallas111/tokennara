import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";
import { CATEGORIES, CATEGORY_LIST, type CategoryKey } from "@/lib/categories";

export function generateStaticParams() {
  return CATEGORY_LIST.map((c) => ({ key: c.key }));
}

export async function generateMetadata({ params }: { params: Promise<{ key: string }> }): Promise<Metadata> {
  const { key } = await params;
  const cat = CATEGORIES[key as CategoryKey];
  if (!cat) return {};
  return {
    title: `${cat.label} 시리즈 전체 글 목록`,
    description: `${cat.desc}. 토큰나라 ${cat.label} 시리즈의 전체 글 목록입니다. 매매 권유가 아닌 정보 제공 콘텐츠.`,
    alternates: { canonical: `/category/${key}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  const cat = CATEGORIES[key as CategoryKey];
  if (!cat) return notFound();
  const posts = getPostsByCategory(key as CategoryKey).filter((p) => !p.noindex);

  return (
    <>
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
        <nav className="text-[12px] text-[var(--muted)] mb-8">
          <Link href="/" className="hover:text-[var(--primary)]">홈</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span className="text-[var(--muted-strong)]">{cat.label}</span>
        </nav>

        <div className="mb-10">
          <span className={`cat-badge ${cat.className} mb-4 inline-block`}>{cat.prefix}</span>
          <h1 className="text-[32px] md:text-[42px] font-extrabold tracking-tight mb-3">{cat.label} 시리즈</h1>
          <p className="text-[14.5px] text-[var(--muted-strong)] max-w-[560px] leading-[1.7]">{cat.desc}</p>
          {cat.key === "kimp" && (
            <Link
              href="/tools/kimp-calculator"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--accent)]/40 bg-[var(--accent-soft)] text-[var(--accent)] text-[13px] font-bold hover:border-[var(--accent)] transition-colors"
            >
              김치프리미엄 실시간 계산기 열기 →
            </Link>
          )}
        </div>

        <div className="text-[12px] text-[var(--muted)] mb-5">
          전체 <span className="num text-[var(--muted-strong)]">{posts.length}</span>편 · 최신순
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="py-20 text-center text-[var(--muted)] text-[14px]">아직 발행된 글이 없습니다.</div>
        )}
      </main>
      <Footer />
    </>
  );
}
