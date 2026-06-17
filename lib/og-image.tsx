import type { ReactNode, CSSProperties } from "react"

export const OG_WIDTH = 1200
export const OG_HEIGHT = 630

const bgStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  color: "#f8fafc",
  fontFamily: "system-ui, sans-serif",
  position: "relative",
  overflow: "hidden",
}

function DotGrid() {
  const dots: ReactNode[] = []
  const spacing = 36
  for (let x = 0; x < OG_WIDTH; x += spacing) {
    for (let y = 0; y < OG_HEIGHT; y += spacing) {
      dots.push(
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={1}
          fill="#ffffff"
          opacity="0.04"
        />,
      )
    }
  }
  return (
    <svg
      width={OG_WIDTH}
      height={OG_HEIGHT}
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      {dots}
    </svg>
  )
}

export function OgContainer({ children }: { children: ReactNode }) {
  return (
    <div style={bgStyle}>
      <DotGrid />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export function OgLogo({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      style={{ marginBottom: "24px" }}
    >
      <defs>
        <linearGradient id="og-logo-grad" x1="8" y1="6" x2="40" y2="42">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="40" height="40" rx="14" fill="url(#og-logo-grad)" />
      <rect x="12" y="14" width="24" height="4" rx="2" fill="#ffffff" fillOpacity="0.95" />
      <rect x="12" y="22" width="18" height="4" rx="2" fill="#ffffff" fillOpacity="0.82" />
      <rect x="12" y="30" width="12" height="4" rx="2" fill="#ffffff" fillOpacity="0.65" />
      <circle cx="34" cy="32" r="3" fill="#22C55E" />
    </svg>
  )
}

export function OgSmallLogo({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "40px",
      }}
    >
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="og-logo-grad-sm" x1="8" y1="6" x2="40" y2="42">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="40" height="40" rx="14" fill="url(#og-logo-grad-sm)" />
        <rect x="12" y="14" width="24" height="4" rx="2" fill="#ffffff" fillOpacity="0.95" />
        <rect x="12" y="22" width="18" height="4" rx="2" fill="#ffffff" fillOpacity="0.82" />
        <rect x="12" y="30" width="12" height="4" rx="2" fill="#ffffff" fillOpacity="0.65" />
        <circle cx="34" cy="32" r="3" fill="#22C55E" />
      </svg>
      <span
        style={{
          fontSize: "20px",
          fontWeight: 500,
          color: "#94a3b8",
          letterSpacing: "0.02em",
        }}
      >
        CtroEnv · {label}
      </span>
    </div>
  )
}

export function OgAccentLine() {
  return (
    <div
      style={{
        width: "120px",
        height: "3px",
        borderRadius: "2px",
        background: "#3B82F6",
        marginTop: "40px",
      }}
    />
  )
}

export function OgTagPill({ children }: { children: string }) {
  return (
    <span
      style={{
        background: "rgba(59, 130, 246, 0.2)",
        border: "1px solid rgba(59, 130, 246, 0.4)",
        padding: "4px 14px",
        borderRadius: "999px",
        fontSize: "14px",
        fontWeight: 500,
        color: "#93c5fd",
      }}
    >
      {children}
    </span>
  )
}
