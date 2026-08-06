import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "이용약관",
  description:
    "토큰나라는 데이터를 정리해 보여주는 정보 사이트입니다. 투자 자문이나 매매 권유가 아니며, 판단과 책임은 이용자에게 있습니다.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-[760px] mx-auto px-6 pt-16 pb-20">
        <Link
          href="/"
          className="text-[12.5px] text-[var(--muted)] hover:text-[var(--text)] mb-12 inline-flex items-center gap-1.5"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          토큰나라
        </Link>

        <div className="cat-label text-[var(--accent)] mb-6">TERMS</div>
        <h1 className="display text-[40px] md:text-[56px] mb-6">이용약관</h1>
        <p className="text-[13px] text-[var(--muted)] mb-10">시행일: 2026년 8월 6일</p>

        <div className="prose-mag">
          <h2>1. 이 사이트가 하는 일</h2>
          <p>
            토큰나라(tokennara.com)는 거래량·온체인·김치 프리미엄·프로젝트 자료를 모아 정리해
            보여주는 정보 사이트입니다. 회원가입이나 결제 없이 누구나 읽을 수 있습니다.
          </p>

          <h2>2. 투자 자문이 아닙니다</h2>
          <p>
            토큰나라의 모든 글과 도구는 <strong>정보 제공을 목적으로 합니다. 투자 자문이나 매매
            권유가 아닙니다.</strong> 특정 종목의 매수·매도 시점, 목표가, 손절가를 제시하지 않으며,
            수익을 약속하지 않습니다.
          </p>
          <p>
            가상자산은 가격 변동 폭이 크고 원금을 잃을 수 있습니다. 투자 판단과 그 결과에 대한
            책임은 전적으로 이용자 본인에게 있습니다.
          </p>

          <h2>3. 정보의 정확성</h2>
          <p>
            공개된 자료와 공식 출처를 확인해 작성하지만, 시세·온체인 데이터·프로젝트 발표는 수시로
            바뀝니다. 글에 적힌 수치는 <strong>작성 시점의 값</strong>이며, 중요한 판단을 하시기 전에는
            거래소나 프로젝트의 공식 채널에서 직접 확인하시기 바랍니다.
          </p>
          <p>
            사실과 다른 내용을 발견하시면 아래 이메일로 알려 주십시오. 확인 후 정정합니다.
          </p>

          <h2>4. 도구 이용</h2>
          <p>
            김치 프리미엄 계산기 등 사이트에서 제공하는 도구는 참고용입니다. 외부 거래소 API의
            지연이나 중단으로 실제 시세와 차이가 날 수 있으며, 실제 주문은 이용자가 거래소에서
            직접 확인한 값으로 하셔야 합니다.
          </p>

          <h2>5. 외부 링크와 외부 서비스</h2>
          <p>
            텔레그램 채널·봇, X, 유튜브 등 외부 서비스로 이동하는 링크를 포함합니다. 외부 서비스의
            내용과 운영은 해당 서비스의 약관을 따르며 토큰나라가 보증하지 않습니다.
          </p>

          <h2>6. 저작권</h2>
          <p>
            토큰나라가 작성한 글과 이미지의 저작권은 토큰나라에 있습니다. 출처와 원문 링크를 밝히는
            인용은 자유롭게 하셔도 됩니다. 다만 전문을 그대로 옮기거나 상업적으로 재배포하는 것은
            사전 동의 없이 하실 수 없습니다.
          </p>
          <p>
            인용한 외부 자료(거래소 공시, 프로젝트 문서, 보도 등)의 권리는 각 원저작자에게 있습니다.
          </p>

          <h2>7. 서비스 중단</h2>
          <p>
            점검·장애·외부 API 중단 등으로 사이트나 도구의 제공이 예고 없이 중단될 수 있습니다.
          </p>

          <h2>8. 개인정보</h2>
          <p>
            수집하는 정보와 그 처리 방식은 <Link href="/privacy">개인정보 처리방침</Link>에
            정리해 두었습니다.
          </p>

          <h2>9. 약관 변경</h2>
          <p>
            본 약관은 필요에 따라 변경될 수 있으며, 변경 시 이 페이지에 시행일과 함께 공지합니다.
          </p>

          <h2>10. 문의</h2>
          <ul>
            <li>
              이메일: <a href="mailto:btccharr@gmail.com">btccharr@gmail.com</a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
