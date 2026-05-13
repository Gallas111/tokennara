# 토큰나라 (tokennara)

알트코인 분석·데이터 매거진. coinday(종합 시세·뉴스)와 분리된 sub-niche.

- **URL**: https://www.tokennara.com
- **카테고리**: 알트픽 / 온체인 / 프로젝트딥다이브 / 김프트래커
- **호스팅**: Cloudflare Pages (auto-deploy from `main`)
- **스택**: Next.js 16 + MDX + Tailwind 4 + static export

## 개발

```bash
npm install
npm run dev    # http://localhost:3030
npm run build  # → out/
```

> ⚠️ 한글 경로(`OneDrive\바탕 화면\사이트\`)에서 Next.js Turbopack dev는 동작하지만 안정성을 위해 빌드는 `C:\Users\owner\tokennara-build/` 같은 영문 경로에서 권장.

## 배포

`main` 브랜치에 push → GitHub Actions가 자동으로 빌드 + wrangler로 CF Pages 배포.

## 콘텐츠 작성 규칙

- MDX 본문에 중괄호 `{}` 금지 (빌드 에러)
- self-closing 태그(`<br/>`) 금지
- frontmatter 카테고리: `altpick` / `onchain` / `deepdive` / `kimp`
- 단정형(`100배 갈`, `매수 추천`) 금지 — 인용형(`[분석 "..."]`)으로
- 모든 글 하단 면책 조항 필수
