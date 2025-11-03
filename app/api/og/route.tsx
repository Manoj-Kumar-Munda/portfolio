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
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        {/* Left section - Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "80px 80px",
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          }}
        >
          {/* Top content */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Portfolio badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#0f172a",
                color: "#ffffff",
                padding: "8px 20px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#10b981",
                }}
              />
              MY PORTFOLIO
            </div>

            {/* Name */}
            <div
              style={{
                display: "flex",
                fontSize: "64px",
                fontWeight: 900,
                color: "#0f172a",
                lineHeight: 1.1,
                marginBottom: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              Manoj Kr. Munda
            </div>

            {/* Role */}
            <div
              style={{
                display: "flex",
                fontSize: "32px",
                fontWeight: 600,
                color: "#475569",
                marginBottom: "24px",
              }}
            >
              Frontend Engineer
            </div>

            {/* Description */}
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                color: "#64748b",
                lineHeight: 1.6,
                maxWidth: "500px",
              }}
            >
              Crafting exceptional digital experiences with modern web
              technologies
            </div>
          </div>

          {/* Bottom stats */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "60px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#0f172a",
                }}
              >
                1+
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "14px",
                  color: "#64748b",
                  fontWeight: 500,
                }}
              >
                Years of Experience
              </div>
            </div>
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
