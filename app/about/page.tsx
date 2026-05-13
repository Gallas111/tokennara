import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-[760px] mx-auto px-6 pt-16 pb-20">
        <Link href="/" className="text-[12.5px] text-[var(--muted)] hover:text-[var(--text)] mb-12 inline-flex items-center gap-1.5">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          토큰나라
        </Link>

        <div className="cat-label text-[var(--accent)] mb-6">ABOUT</div>
        <h1 className="display text-[40px] md:text-[56px] mb-10">
          저는 전문 트레이더가<br />아닙니다.<br />
          <span className="text-[var(--muted)]">데이터 정리하는 사람입니다.</span>
        </h1>

        <div className="prose-mag">
          <p>
            저는 코인을 추천하지 않습니다. 매수·매도 신호도 보내지 않습니다. 대신 매일 거래량·온체인·김치 프리미엄·프로젝트 펀더멘털을 모아 사실 그대로 정리합니다. 판단은 여러분이 합니다.
          </p>

          <h2>왜 만들었습니까</h2>
          <p>
            한국 코인 콘텐츠는 둘 중 하나입니다. 너무 어려운 영문 리서치 리포트, 아니면 &ldquo;100배 갈 코인&rdquo; 같은 클릭베이트. 그 사이가 비어 있어요. 트레이더가 아닌 사람도 데이터로 시장을 읽을 수 있어야 한다고 생각합니다.
          </p>

          <h2>어떻게 정리합니까</h2>
          <ul>
            <li><strong>거래량</strong> — CoinMarketCap, CoinGecko, 거래소 직접 API</li>
            <li><strong>온체인</strong> — Etherscan, Solscan, Arkham, Whale Alert</li>
            <li><strong>김치 프리미엄</strong> — 업비트·빗썸 vs 바이낸스·바이비트 실시간 비교</li>
            <li><strong>펀더멘털</strong> — 공식 docs, GitHub commit, 토크노믹스, 파트너십 발표</li>
          </ul>

          <h2>안 하는 것</h2>
          <ul>
            <li>&ldquo;이 코인 사세요&rdquo; — 안 합니다</li>
            <li>&ldquo;100배 갈 코인&rdquo; 같은 단정 — 안 합니다</li>
            <li>유료 시그널·리딩방 운영 — 안 합니다</li>
            <li>본인 보유 코인 띄우기 — 보유 시 본문에 명시합니다</li>
          </ul>

          <h2>법적 위치</h2>
          <p>
            저는 자본시장법·가상자산이용자보호법상 투자자문업·유사투자자문업 등록 사업자가 <strong>아닙니다</strong>. 본 매체의 모든 콘텐츠는 정보 제공 목적이며 매매 권유가 아닙니다. 투자 결정과 손익은 본인 책임입니다.
          </p>

          <h2>구독</h2>
          <p>
            매일 오전 8시 텔레그램 채널(<code>@tokennara_kr</code>)로 데이터를 푸시합니다. 무료, 광고 없음. 고래·청산 알람은 별도 봇 채널(<code>@tokennara_bot</code>).
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
