import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #2dd87c 0%, #00d9ff 50%, #a259ff 100%)",
          color: "#0a0d12",
          fontSize: 22,
          fontWeight: 900,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
        }}
      >
        토
      </div>
    ),
    size,
  );
}
