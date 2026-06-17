import { ImageResponse } from "next/og"
import { OgContainer, OgLogo, OgAccentLine, OG_WIDTH, OG_HEIGHT } from "@/lib/og-image"

export const alt = "CtroEnv — Type-Safe Environment Variables for TypeScript"
export const size = { width: OG_WIDTH, height: OG_HEIGHT }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <OgContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <OgLogo size={80} />
        <div
          style={{
            fontSize: "48px",
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
            fontSize: "22px",
            fontWeight: 400,
            color: "#94a3b8",
            marginTop: "12px",
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          Type-Safe Environment Variables for TypeScript
        </div>
        <div
          style={{
            marginTop: "32px",
            display: "flex",
            gap: "14px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              background: "#2563eb",
              padding: "6px 20px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            Zero Dependencies
          </span>
          <span
            style={{
              background: "#2563eb",
              padding: "6px 20px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            Runtime Safe
          </span>
        </div>
        <OgAccentLine />
      </div>
    </OgContainer>,
    { ...size },
  )
}
