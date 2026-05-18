import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0d12",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "토큰나라 — 알트코인 데이터 정리합니다",
    template: "%s | 토큰나라",
  },
  description:
    "알트코인 거래량·온체인·김치 프리미엄·프로젝트 분석을 매일 정리합니다. 매매 권유가 아닌 정보 제공 매체.",
  metadataBase: new URL("https://www.tokennara.com"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.tokennara.com",
    siteName: "토큰나라",
    title: "토큰나라 — 알트코인 데이터 정리합니다",
    description: "거래량·온체인·김치 프리미엄·프로젝트 펀더멘털. 매매 권유가 아닌 정보 제공 매체.",
  },
  twitter: {
    card: "summary_large_image",
    title: "토큰나라 — 알트코인 데이터 정리합니다",
    description: "거래량·온체인·김치 프리미엄·프로젝트 펀더멘털. 매매 권유가 아닌 정보 제공 매체.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.tokennara.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard Variable — 본문 한글 (fallback) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        {/* SUIT Variable — 모던 한국 SaaS 톤 (UI·헤더·라벨) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/variable/woff2/SUIT-Variable.css"
        />
        {/* Wanted Sans Variable — 디스플레이·헤드라인 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfontvariable/variable/WantedSansVariable.css"
        />
        {/* JetBrains Mono + Inter + Newsreader (편집국 serif) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800;900&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EH74HFTEBQ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EH74HFTEBQ');
          `}
        </Script>
      </body>
    </html>
  );
}
