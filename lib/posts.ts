import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { CategoryKey } from "./categories";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: CategoryKey;
  author: string;
  readingMinutes: number;
  content: string;
  noindex?: boolean;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

let cache: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (cache) return cache;
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const fullPath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx$/, "");
    const stats = readingTime(content);
    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "2026-05-11",
      category: (data.category || "altpick") as CategoryKey,
      author: data.author || "토큰나라",
      readingMinutes: Math.max(1, Math.round(stats.minutes)),
      content,
      noindex: data.noindex === true,
    };
  });

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  cache = posts;
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) || null;
}

export function getPostsByCategory(category: CategoryKey): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}
