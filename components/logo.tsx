import { type SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<SVGSVGElement> {
  size?: number;
}

export function Logo({
  size = 32,
  className,
  ...props
}: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="CtroEnv"
      {...props}
    >
      <defs>
        <linearGradient
          id="ctro-gradient"
          x1="8"
          y1="6"
          x2="40"
          y2="42"
        >
          <stop
            offset="0%"
            stopColor="var(--primary)"
          />

          <stop
            offset="100%"
            stopColor="var(--accent)"
          />
        </linearGradient>

        <filter
          id="glow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Background shell */}
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="14"
        fill="url(#ctro-gradient)"
      />

      {/* Environment layers */}
      <rect
        x="13"
        y="14"
        width="22"
        height="4"
        rx="2"
        fill="white"
        opacity="0.95"
      />

      <rect
        x="13"
        y="22"
        width="16"
        height="4"
        rx="2"
        fill="white"
        opacity="0.82"
      />

      <rect
        x="13"
        y="30"
        width="11"
        height="4"
        rx="2"
        fill="white"
        opacity="0.68"
      />

      {/* Active environment */}
      <circle
        cx="34"
        cy="32"
        r="3"
        fill="var(--accent)"
      />

      <circle
        cx="34"
        cy="32"
        r="6"
        fill="var(--accent)"
        opacity="0.25"
        filter="url(#glow)"
      />
    </svg>
  );
}

export function LogoMark({
  size = 16,
  ...props
}: LogoProps) {
  return <Logo size={size} {...props} />;
}