export type TocItem = { id: string; text: string };

// 한글·영문·숫자만 남기는 헤딩 슬러그 (TOC 앵커와 ReactMarkdown h2 id가 동일해야 함)
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^가-힣a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// 마크다운 본문에서 h2(##)만 추출 — 코드블록 내부는 무시
export function extractH2s(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  let inCode = false;
  for (const line of markdown.split("\n")) {
    if (line.trim().startsWith("```")) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    const m = line.match(/^##\s+(.+)$/);
    if (m) {
      const text = m[1].replace(/[*_`#]/g, "").trim();
      const id = slugifyHeading(text);
      if (text && id) items.push({ id, text });
    }
  }
  return items;
}
