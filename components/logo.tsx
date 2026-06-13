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
        <linearGradient id="logo-g" x1="2" y1="2" x2="30" y2="30">
          <stop stopColor="#14b8a6" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#logo-g)" />
      <path
        d="M10 10v12h8M10 16h6"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      <circle cx="16" cy="16" r="14" fill="#14b8a6" />
      <path
        d="M10 10v12h8M10 16h6"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
