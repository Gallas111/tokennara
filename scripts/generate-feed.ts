import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://www.tokennara.com";
const postsDir = path.join(process.cwd(), "content", "posts");

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  noindex: boolean;
}

function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
  const results: Post[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data } = matter(raw);
    results.push({
      slug: data.slug ?? file.replace(/\.mdx$/, ""),
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      category: data.category ?? "",
      noindex: data.noindex === true,
    });
  }

  return results
    .filter((p) => !p.noindex)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const posts = getAllPosts();

const items = posts
  .slice(0, 50)
  .map((post) => {
    const link = `${SITE_URL}/blog/${post.slug}`;
    return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${post.description}]]></description>
      <category>${post.category}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>토큰나라 — 알트코인 데이터 정리합니다</title>
    <link>${SITE_URL}</link>
    <description>거래량·온체인·김치 프리미엄·프로젝트 펀더멘털을 매일 정리하는 알트코인 데이터 매거진. 본 매체는 정보 제공 목적이며 매매 권유가 아닙니다.</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

fs.writeFileSync(path.join(process.cwd(), "public", "feed.xml"), xml);
console.log(`feed.xml generated (${Math.min(posts.length, 50)} items)`);
