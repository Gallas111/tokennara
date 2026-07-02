import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KimpCalculator from "@/components/KimpCalculator";

const SITE_URL = "https://www.tokennara.com";
const PAGE_URL = `${SITE_URL}/tools/kimp-calculator`;
const TITLE = "김치프리미엄 실시간 계산기 — 코인별 김프 확인";
const DESCRIPTION =
  "김치프리미엄(김프)을 실시간으로 계산합니다. BTC·ETH·XRP·SOL 등 10개 코인의 업비트·바이낸스 가격과 환율을 30초마다 자동 갱신해 김프%와 테더 김프를 보여줍니다. 김프 계산 공식·역김프 의미·주의점까지 정리. 매매 권유 아님.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tools/kimp-calculator" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const FAQS = [
  {
    q: "김치프리미엄은 왜 생기나요?",
    a: "한국 원화 마켓은 외국환거래법상 자본통제로 해외 시장과 자유로운 차익거래가 어렵습니다. 그래서 국내 수요가 몰리면 가격차가 바로 지워지지 않고 프리미엄(김프)으로 남습니다. 국내 매수세·환율·스테이블코인 수급이 김프를 움직이는 대표 변수입니다.",
  },
  {
    q: "김프가 마이너스(역김프)면 어떤 의미인가요?",
    a: "역김프는 국내 거래소 가격이 해외보다 싼 상태입니다. 보통 국내 매수 심리 위축, 원화 스테이블코인 수요 부족, 고환율이 겹칠 때 나타납니다. 역김프 자체는 매수 신호가 아니라 국내 시장 심리를 읽는 지표로 보는 것이 안전합니다.",
  },
  {
    q: "이 계산기의 김프 수치가 다른 사이트와 조금 다른데 왜 그런가요?",
    a: "사이트마다 기준 거래소(업비트·빗썸 등)와 적용 환율(하나은행 고시·실시간 시장환율 등), 갱신 주기가 다르기 때문입니다. 이 계산기는 업비트 현재가, 바이낸스 USDT 마켓 현재가, open.er-api.com 제공 USD/KRW 환율을 사용하며 30초마다 갱신합니다. 환율 소스는 시간 단위로 갱신되므로 실시간 시장환율과 소폭 차이가 날 수 있습니다.",
  },
  {
    q: "테더 김프와 코인 김프는 뭐가 다른가요?",
    a: "코인 김프는 같은 코인의 국내가와 해외가를 비교하고, 테더 김프는 업비트 KRW-USDT 가격을 환율과 직접 비교합니다. 테더는 1달러 페그 자산이라 김프가 곧 '원화로 달러 유동성을 사는 값'이 됩니다. 그래서 국내 자금 유입·이탈 심리를 가장 직관적으로 보여주는 지표로 쓰입니다.",
  },
  {
    q: "김프 차익거래(재정거래)를 하면 되나요?",
    a: "권장하지 않습니다. 개인의 해외송금은 외국환거래법상 한도·신고 의무가 있고, 가상자산을 이용한 무등록 외환 송금은 형사처벌 대상이 될 수 있습니다. 여기에 송금 수수료·시차·가격 변동까지 감안하면 표시된 김프가 그대로 수익이 되지 않습니다. 이 계산기는 시장 심리 파악용 정보 제공 도구입니다.",
  },
];

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "김치프리미엄 실시간 계산기",
  url: PAGE_URL,
  description: DESCRIPTION,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  inLanguage: "ko",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  publisher: { "@type": "Organization", name: "토큰나라", url: SITE_URL },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "김치프리미엄 실시간 계산기", item: PAGE_URL },
  ],
};

const RELATED_POSTS = [
  {
    href: "/blog/kimp-calculation-guide-2026-06-25",
    label: "김프 계산법 — 김치프리미엄 공식과 직접 계산",
    desc: "이 계산기가 쓰는 공식을 단계별 예시로 분해한 가이드",
  },
  {
    href: "/blog/reverse-kimp-guide-2026-07-02",
    label: "역김프 뜻과 원리 — 역프리미엄 왜 생기나",
    desc: "마이너스 김프가 나오는 구조적 이유 4가지",
  },
  {
    href: "/blog/kimp-history-2026-06-30",
    label: "김치프리미엄 역사 — 역대 최고 54% 기록",
    desc: "2017~2026년 김프가 움직여 온 궤적 정리",
  },
  {
    href: "/blog/usdt-tether-premium-kimp-2026-07-01",
    label: "테더 USDT 김프 — 스테이블코인 프리미엄 보는법",
    desc: "테더 김프로 국내 매수 심리를 읽는 방법",
  },
  {
    href: "/blog/kimp-arbitrage-2026-06-27",
    label: "김치프리미엄 차익거래가 어려운 이유",
    desc: "외국환거래법·수수료·시차 — 규제와 현실 정리",
  },
];

export default function KimpCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-10 w-full">
        <nav className="text-[12px] text-[var(--muted)] mb-6">
          <Link href="/" className="hover:text-[var(--primary)]">홈</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span className="text-[var(--muted-strong)]">김프 계산기</span>
        </nav>

        <div className="mb-8">
          <div className="cat-badge cat-kimp mb-4 inline-block">[김프트래커]</div>
          <h1 className="text-[30px] sm:text-[40px] leading-[1.15] font-extrabold tracking-tight mb-3">
            김치프리미엄 실시간 계산기
          </h1>
          <p className="text-[14px] text-[var(--muted-strong)] leading-[1.7] max-w-[620px]">
            업비트 원화 가격과 바이낸스 달러 가격, USD/KRW 환율을 실시간으로 받아
            코인별 김프%를 계산합니다. <span className="num">30</span>초마다 자동 갱신되며,
            마이너스는 <span style={{ color: "#4da6ff" }} className="font-semibold">역김프(역프)</span>로 표시합니다.
          </p>
        </div>

        {/* 계산기 본체 */}
        <KimpCalculator />

        <div className="disclaimer mt-6">
          <strong>면책 고지</strong> — 본 계산기는 정보 제공 목적이며 가상자산 매수·매도 권유가 아닙니다.
          시세·환율은 API 사정에 따라 지연되거나 일시적으로 표시되지 않을 수 있습니다.
          김프를 이용한 차익거래(재정거래)를 권장하지 않으며, 개인의 해외송금은 외국환거래법상
          한도·신고 규제 대상입니다. 투자 판단과 책임은 본인에게 있습니다.
        </div>

        {/* 가이드 */}
        <article className="prose-tokennara mt-14">
          <h2>김치프리미엄(김프)이란</h2>
          <p>
            김치프리미엄은 <strong>같은 코인이 한국 원화 마켓에서 해외 시장보다 얼마나 비싸게(또는 싸게)
            거래되는지</strong>를 백분율로 나타낸 값입니다. 예를 들어 비트코인이 업비트에서 1억 4,500만 원,
            바이낸스에서 10만 5,000달러에 거래되고 환율이 1,380원이라면, 해외가를 원화로 환산한
            1억 4,490만 원과 국내가를 비교해 약 +0.07%의 김프가 나옵니다. 한국 시장은 외국환거래법상
            자본통제 때문에 해외와의 차익거래가 자유롭지 않아, 국내 수요가 몰리면 이 가격차가
            바로 지워지지 않고 프리미엄으로 남습니다. 그래서 김프는 단순한 가격차가 아니라
            <strong>국내 개인 투자자의 매수 열기를 보여주는 심리 지표</strong>로 읽힙니다.
          </p>

          <h2>김프 계산 공식</h2>
          <p>이 계산기가 쓰는 공식은 다음 한 줄입니다.</p>
          <blockquote>
            김프(%) = ( 국내 원화가격 ÷ ( 해외 달러가격 × USD/KRW 환율 ) − 1 ) × 100
          </blockquote>
          <p>
            분모인 &lsquo;해외 달러가격 × 환율&rsquo;은 해외 가격을 원화로 환산한 값입니다.
            국내가가 환산가보다 크면 양수(김프), 작으면 음수(역김프)가 됩니다.
            같은 시각이라도 <strong>어느 환율을 쓰느냐에 따라 김프 숫자가 달라지기 때문에</strong>,
            김프 사이트마다 수치가 조금씩 다른 것이 정상입니다. 이 계산기는 무료 공개
            환율 API(open.er-api.com)의 USD/KRW 값을 사용하며, 계산기 하단에 적용 환율을
            그대로 표시해 검증할 수 있게 했습니다. 공식을 예시 숫자로 직접 따라가 보고 싶다면{" "}
            <Link href="/blog/kimp-calculation-guide-2026-06-25">김프 계산법 가이드</Link>에서
            3단계로 분해해 두었습니다.
          </p>

          <h2>역김프(마이너스 김프)의 의미</h2>
          <p>
            김프가 음수면 국내가 해외보다 싼 <strong>역김프(역프)</strong> 상태입니다.
            보통 국내 매수 심리 위축, 원화 스테이블코인 수요 부족, 고환율이 겹칠 때 나타납니다.
            특히 환율이 급등하면 분모(해외가 원화환산)가 커져 김프가 기계적으로 눌리는 효과가
            있어서, 역김프가 곧 &lsquo;한국만 폭락&rsquo;을 뜻하지는 않습니다. 반대로 역김프라고 해서
            &lsquo;싸니까 사야 한다&rsquo;는 신호도 아닙니다. 역김프가 생기는 구조적 원인은{" "}
            <Link href="/blog/reverse-kimp-guide-2026-07-02">역김프 원리 정리 글</Link>에서,
            과거 김프가 +54%까지 치솟았던 흐름은{" "}
            <Link href="/blog/kimp-history-2026-06-30">김치프리미엄 역사</Link>에서 확인할 수 있습니다.
          </p>

          <h2>테더 김프를 따로 보여주는 이유</h2>
          <p>
            표 아래의 <strong>테더 김프</strong>는 업비트 KRW-USDT 가격을 USD/KRW 환율과 직접 비교한
            값입니다. 테더는 1달러에 고정(페그)된 스테이블코인이라, 테더 김프는 곧
            &lsquo;원화로 달러 유동성을 사는 데 붙는 웃돈&rsquo;입니다. 코인 김프보다 잡음이 적어
            국내 자금의 유입·이탈 심리를 가장 직관적으로 보여주는 지표로 쓰입니다.
            테더 김프가 코인 김프보다 낮게 유지되면 신규 자금 유입이 약하다는 해석이 일반적입니다.
            자세한 해석 방법은 <Link href="/blog/usdt-tether-premium-kimp-2026-07-01">테더 김프 보는법</Link>에
            정리했습니다.
          </p>

          <h2>데이터 출처와 한계</h2>
          <ul>
            <li><strong>국내가</strong> — 업비트 공개 시세 API의 원화 마켓 현재가</li>
            <li><strong>해외가</strong> — 바이낸스 공개 API의 USDT 마켓 현재가(USDT≈1달러로 간주)</li>
            <li><strong>환율</strong> — open.er-api.com의 USD/KRW (시간 단위 갱신)</li>
          </ul>
          <p>
            세 소스 모두 브라우저에서 직접 호출하므로 서버를 거치지 않습니다. 다만 해외가는 USDT 마켓
            기준이라 USDT 페그가 흔들리는 구간에서는 오차가 커질 수 있고, 환율 소스가 시간 단위로
            갱신되기 때문에 원/달러가 급변하는 날에는 실시간 시장환율과 차이가 날 수 있습니다.
            API가 일시적으로 응답하지 않으면 해당 칼럼만 &lsquo;—&rsquo;로 표시되고 30초 후 자동 재시도합니다.
          </p>

          <h2>주의점 — 김프는 수익 기회가 아니라 심리 지표</h2>
          <p>
            김프가 크게 벌어지면 &lsquo;해외에서 사서 국내에서 팔면 되지 않나&rsquo;라는 생각이 들 수
            있지만, 개인의 해외송금은 외국환거래법상 한도와 신고 의무가 있고 가상자산을 이용한
            무등록 외환 송금은 형사처벌 사례까지 있습니다. 송금 수수료·전송 시차·체결 슬리피지를
            감안하면 표시된 김프가 그대로 수익이 되지도 않습니다. 왜 어려운지는{" "}
            <Link href="/blog/kimp-arbitrage-2026-06-27">김프 차익거래의 현실</Link>에서 규제와 비용
            중심으로 정리했습니다. 이 페이지는 시장 심리를 읽는 정보 제공 도구이며,
            어떤 매매도 권유하지 않습니다.
          </p>
        </article>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="text-[22px] font-bold tracking-tight mb-6">자주 묻는 질문</h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4"
              >
                <summary className="cursor-pointer font-semibold text-[14px] text-[var(--text)] list-none flex items-center justify-between gap-3">
                  {f.q}
                  <span className="text-[var(--muted)] group-open:rotate-45 transition-transform text-[16px] shrink-0">+</span>
                </summary>
                <p className="mt-3 text-[13.5px] text-[var(--muted-strong)] leading-[1.75]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 관련 글 허브 */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[11px] mono uppercase tracking-[0.2em] text-[var(--accent)] font-semibold">
              김프 더 깊게 읽기
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--accent)]/40 to-transparent"></span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {RELATED_POSTS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="card-glow block p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]"
              >
                <div className="font-bold text-[13.5px] mb-1.5 text-[var(--text)] leading-snug">{p.label}</div>
                <div className="text-[12px] text-[var(--muted)] leading-[1.6]">{p.desc}</div>
              </Link>
            ))}
            <Link
              href="/category/kimp"
              className="card-glow flex items-center justify-center p-4 rounded-xl border border-dashed border-[var(--border-strong)] text-[13px] font-semibold text-[var(--muted-strong)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50"
            >
              김프트래커 시리즈 전체 보기 →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
