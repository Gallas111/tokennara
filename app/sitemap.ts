import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { CATEGORY_LIST } from "@/lib/categories";

export const dynamic = "force-static";

const BASE = "https://www.tokennara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date().toISOString();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const categoryUrls: MetadataRoute.Sitemap = CATEGORY_LIST.map((c) => ({
    url: `${BASE}/category/${c.key}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  const postUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticUrls, ...categoryUrls, ...postUrls];
}
