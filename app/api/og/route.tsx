import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          {/* Portfolio label */}
          <div
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#737373",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Portfolio
          </div>


          <div
            style={{
              fontSize: "80px",
              fontWeight: 900,
              color: "#0a0a0a",
              marginBottom: "16px",
              letterSpacing: "-0.03em",
            }}
          >
            Manoj Kr. Munda
          </div>

          <div
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#525252",
              marginBottom: "48px",
            }}
          >
            Frontend Engineer
          </div>
          <div
            style={{
              width: "200px",
              height: "2px",
              background: "#0a0a0a",
              marginBottom: "48px",
            }}
          />

          {/* Description */}
          <div
            style={{
              fontSize: "20px",
              color: "#737373",
              textAlign: "center",
              maxWidth: "600px",
              lineHeight: 1.5,
            }}
          >
            Building modern web applications with React, Next.js, and TypeScript
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
