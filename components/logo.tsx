import { type SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<SVGSVGElement> {
  size?: number
}

export function Logo({ size = 32, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="CtroEnv"
      {...props}
    >
      <defs>
        <linearGradient id="logo-g" x1="16" y1="2" x2="16" y2="30">
          <stop stopColor="#14b8a6" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path
        d="M16 2l10 5.773v11.547c0 4.041-2.236 7.724-5.774 9.51L16 30l-4.226-2.17C8.236 27.044 6 23.361 6 19.32V7.773L16 2z"
        fill="url(#logo-g)"
      />
      <path
        d="M12.5 16a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
        fill="white"
        opacity="0.2"
      />
      <path
        d="M14 13.5l2.5 2.5-2.5 2.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.7"
      />
      <circle cx="16" cy="16" r="1" fill="white" />
    </svg>
  )
}

export function LogoMark({ size = 16, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="CtroEnv"
      {...props}
    >
      <path
        d="M16 2l10 5.773v11.547c0 4.041-2.236 7.724-5.774 9.51L16 30l-4.226-2.17C8.236 27.044 6 23.361 6 19.32V7.773L16 2z"
        fill="#14b8a6"
      />
      <circle cx="16" cy="16" r="3" fill="white" />
    </svg>
  )
}
