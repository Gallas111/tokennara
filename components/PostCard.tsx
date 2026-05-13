import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  const cat = CATEGORIES[post.category];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-glow group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:bg-[var(--surface-2)]"
    >
      <div className="flex items-center gap-2.5 mb-3 text-[12px]">
        <span className={`cat-badge ${cat.className}`}>{cat.prefix}</span>
        <span className="text-[var(--muted)] mono tabular">{post.date}</span>
        <span className="text-[var(--muted)] num">· {post.readingMinutes}분</span>
      </div>
      <h2 className="text-[16px] font-bold mb-2.5 leading-snug tracking-tight text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
        {post.title}
      </h2>
      <p className="text-[13px] text-[var(--muted)] leading-[1.65] line-clamp-2">{post.description}</p>
      <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11.5px] text-[var(--muted)]">
        <span>{post.author}</span>
        <span className="text-[var(--primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">읽기 →</span>
      </div>
    </Link>
  );
}
