import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "개인정보 처리방침",
  description:
    "토큰나라가 어떤 정보를 수집하고 무엇을 수집하지 않는지 정리했습니다. 회원가입이 없고, 자체 방문 통계는 쿠키를 사용하지 않습니다.",
};

export default function PrivacyPage() {
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

        <div className="cat-label text-[var(--accent)] mb-6">PRIVACY</div>
        <h1 className="display text-[40px] md:text-[56px] mb-6">개인정보 처리방침</h1>
        <p className="text-[13px] text-[var(--muted)] mb-10">시행일: 2026년 8월 6일</p>

        <div className="prose-mag">
          <p>
            토큰나라(tokennara.com)는 회원가입·로그인 기능이 없고, 이름·이메일·전화번호를 입력받는
            양식도 두지 않습니다. 아래에 적은 것이 이 사이트가 수집하는 전부입니다.
          </p>

          <h2>1. 수집하지 않는 것</h2>
          <ul>
            <li>이름, 이메일 주소, 전화번호, 주소</li>
            <li>결제 정보 및 계좌·지갑 주소</li>
            <li>거래소 API 키 등 자산에 접근할 수 있는 정보</li>
          </ul>
          <p>
            토큰나라는 어떤 경우에도 위 정보를 요구하지 않습니다. 토큰나라를 사칭해 이런 정보를
            요구하는 연락을 받으셨다면 응하지 마시기 바랍니다.
          </p>

          <h2>2. 수집하는 것</h2>
          <p>어느 글이 얼마나 읽히는지 파악하기 위한 접속 기록만 수집합니다.</p>
          <ul>
            <li>방문 일시, 조회한 페이지 주소</li>
            <li>유입 경로(검색엔진·외부 링크 등)</li>
            <li>기기 종류(데스크톱·모바일·태블릿), 운영체제, 브라우저, 접속 국가</li>
            <li>페이지에서 스크롤한 위치, 머문 시간, 외부 링크 클릭</li>
          </ul>

          <h2>3. Google Analytics 4</h2>
          <p>
            방문자 통계 분석을 위해 Google LLC가 제공하는 Google Analytics 4(측정 ID:
            G-EH74HFTEBQ)를 사용합니다. GA4는 쿠키 및 유사 기술로 페이지 조회수, 세션 시간, 대략적인
            위치 등을 수집하며, 수집·처리 방식은{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google 개인정보처리방침
            </a>
            을 따릅니다.
          </p>
          <p>
            GA4 수집을 원하지 않으시면{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google 애널리틱스 차단 브라우저 부가기능
            </a>
            을 설치하시면 됩니다.
          </p>

          <h2>4. 자체 방문 통계 — 쿠키를 사용하지 않습니다</h2>
          <p>
            어느 글이 실제로 읽히는지 확인하기 위해 자체 방문 통계를 함께 운영합니다. 페이지 조회,
            스크롤 위치, 머문 시간, 외부 링크 클릭을 기록하며 <strong>쿠키를 사용하지 않습니다</strong>.
            방문을 구분하는 값은 브라우저 탭에만 저장되어 탭을 닫으면 사라집니다.
          </p>
          <p>
            IP 주소와 브라우저 정보 원문은 저장하지 않습니다. 서버에서 기기 종류·운영체제·브라우저·국가로
            바꾼 뒤 원문은 버립니다. 따라서 이 통계만으로는 개인을 식별할 수 없습니다. 저장 위치는
            Cloudflare이며 제3자에게 제공하거나 판매하지 않습니다.
          </p>

          <h2>5. 쿠키</h2>
          <p>
            쿠키를 사용하는 것은 위 3항의 Google Analytics 4뿐입니다. 브라우저 설정에서 쿠키를 차단하거나
            삭제하실 수 있으며, 차단하셔도 토큰나라의 글을 읽는 데에는 아무런 제한이 없습니다.
          </p>

          <h2>6. 보유 기간과 파기</h2>
          <ul>
            <li>Google Analytics 4 — Google이 정한 보관 정책에 따릅니다(기본 14개월).</li>
            <li>자체 방문 통계 — 통계 목적을 넘어 보관하지 않으며, 필요가 없어지면 삭제합니다.</li>
          </ul>

          <h2>7. 제3자 제공</h2>
          <p>
            수집한 정보를 제3자에게 제공하거나 판매하지 않습니다. 다만 위에 적은 Google Analytics 4는
            Google이 운영하는 서비스이므로 해당 데이터는 Google이 함께 처리합니다.
          </p>

          <h2>8. 외부 링크</h2>
          <p>
            토큰나라는 텔레그램·X·유튜브 등 외부 서비스로 이동하는 링크를 포함합니다. 링크를 눌러
            이동한 뒤의 개인정보 처리는 해당 서비스의 방침을 따르며 토큰나라가 관여하지 않습니다.
          </p>

          <h2>9. 이용자의 권리</h2>
          <p>
            수집된 정보의 열람·삭제를 원하시면 아래 이메일로 요청해 주십시오. 다만 이 사이트는 개인을
            식별할 수 있는 정보를 저장하지 않기 때문에, 특정 개인의 기록만 골라내는 것은 기술적으로
            불가능할 수 있습니다. 그 경우 사유를 회신해 드립니다.
          </p>

          <h2>10. 개인정보 보호 책임자</h2>
          <ul>
            <li>사이트명: 토큰나라(tokennara.com)</li>
            <li>
              이메일: <a href="mailto:btccharr@gmail.com">btccharr@gmail.com</a>
            </li>
          </ul>

          <h2>11. 변경</h2>
          <p>
            본 방침은 관련 법령이나 사이트 정책이 바뀌면 수정될 수 있으며, 변경 시 이 페이지에
            시행일과 함께 공지합니다.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
