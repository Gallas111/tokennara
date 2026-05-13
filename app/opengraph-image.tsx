import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "토큰나라 — 알트코인 데이터 정리합니다";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0d12",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "linear-gradient(135deg, #2dd87c 0%, #00d9ff 50%, #a259ff 100%)",
              color: "#0a0d12",
              fontSize: 44,
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            토
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>토큰나라</div>
            <div style={{ fontSize: 16, color: "#7a8290", letterSpacing: 2, marginTop: 4 }}>ALT · DATA · DAILY</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: -2,
              maxWidth: 980,
              backgroundImage: "linear-gradient(90deg, #2dd87c, #00d9ff, #a259ff)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            알트코인 데이터,
            <br />
            매일 정리합니다
          </div>
          <div style={{ fontSize: 22, color: "#a8b0bc", lineHeight: 1.45, maxWidth: 920 }}>
            거래량 · 온체인 · 김치 프리미엄 · 프로젝트 펀더멘털. 매매 권유 아닌 정보 제공 매체.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16, color: "#7a8290" }}>
          <div style={{ display: "flex", gap: 12 }}>
            <span style={{ padding: "6px 12px", borderRadius: 6, background: "rgba(45,216,124,0.12)", color: "#2dd87c" }}>알트픽</span>
            <span style={{ padding: "6px 12px", borderRadius: 6, background: "rgba(0,217,255,0.12)", color: "#00d9ff" }}>온체인</span>
            <span style={{ padding: "6px 12px", borderRadius: 6, background: "rgba(162,89,255,0.12)", color: "#a259ff" }}>딥다이브</span>
            <span style={{ padding: "6px 12px", borderRadius: 6, background: "rgba(255,210,63,0.12)", color: "#ffd23f" }}>김프</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", color: "#ff476e", fontSize: 14, letterSpacing: 2 }}>NOT FINANCIAL ADVICE</div>
        </div>
      </div>
    ),
    size,
  );
}
