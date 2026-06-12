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
        <linearGradient id="logo-gradient" x1="16" y1="2" x2="16" y2="30">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path
        d="M16 2L4 9v6c0 7.5 5.1 14.5 12 16 6.9-1.5 12-8.5 12-16V9L16 2z"
        fill="url(#logo-gradient)"
      />
      <path
        d="M12 17l3 3 6-7"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LogoMark({ size = 32, className, ...props }: LogoProps) {
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
        d="M16 2L4 9v6c0 7.5 5.1 14.5 12 16 6.9-1.5 12-8.5 12-16V9L16 2z"
        fill="#4F46E5"
      />
      <path
        d="M12 17l3 3 6-7"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
