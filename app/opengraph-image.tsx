import { ImageResponse } from "next/og"

export const alt = "CtroEnv — Type-Safe Environment Variables for TypeScript"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          CtroEnv
        </div>
        <div
          style={{
            fontSize: "28px",
            fontWeight: 400,
            color: "#94a3b8",
            marginTop: "16px",
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          Type-Safe Environment Variables for TypeScript
        </div>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              background: "#2563eb",
              padding: "8px 20px",
              borderRadius: "999px",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            Zero Dependencies
          </span>
          <span
            style={{
              background: "#2563eb",
              padding: "8px 20px",
              borderRadius: "999px",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            Runtime Safe
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
