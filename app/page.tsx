import Link from "next/link"
import { Logo } from "@/components/logo"
import { HomeCodeBlock } from "@/components/home-code-block"
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Puzzle,
  Terminal,
  Package,
  Star,
  Download,
} from "lucide-react"
import { packages } from "@/lib/navigation"

const features = [
  {
    icon: ShieldCheck,
    title: "Zero Runtime Dependencies",
    description: "Core and shared packages are dependency-free. Small bundle, big confidence.",
  },
  {
    icon: Zap,
    title: "Full TypeScript Inference",
    description: "Infer precise types from your schema. No more stringly-typed process.env access.",
  },
  {
    icon: Terminal,
    title: "Beautiful CLI & Errors",
    description: "Rich error messages with suggestions. A CLI that validates, generates, and documents.",
  },
  {
    icon: Puzzle,
    title: "Framework Adapters",
    description: "Plug into Node.js, Vite, and Next.js. One schema works everywhere.",
  },
]

const stats = [
  { icon: Package, value: "6", label: "Packages" },
  { icon: Star, value: "Zero Deps", label: "Core runtime" },
  { icon: Download, value: "MIT", label: "License" },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10 h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm mb-8">
            <span className="relative flex size-2">
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
              <span className="relative rounded-full size-2 bg-green-500" />
            </span>
            <span className="text-muted-foreground">v1.0.1 — Latest release</span>
          </div>

          <Logo size={56} className="mb-6" />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Type-Safe{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
              Environment Variables
            </span>{" "}
            for TypeScript
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Define, validate, and infer types for environment variables with zero runtime dependencies.
            Beautiful error messages, framework adapters, and CLI tooling.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/docs/getting-started"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/docs/core/define-env"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-medium hover:bg-accent transition-colors"
            >
              API Reference
            </Link>
          </div>

          {/* Install snippet */}
          <div className="mt-8 flex items-center gap-3 rounded-lg border border-border/50 bg-muted/20 px-5 py-3 text-sm font-mono">
            <span className="text-muted-foreground/50">npm install</span>
            <span className="text-primary">@ctroenv/core</span>
            <Link
              href="/docs/getting-started"
              className="ml-2 text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
            >
              more install options →
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-border/50 bg-card/50 py-4"
            >
              <stat.icon className="size-5 text-primary/70" />
              <span className="text-lg font-bold">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-sm hover:shadow-primary/5"
            >
              <feature.icon className="mb-4 size-8 text-primary transition-transform group-hover:scale-110" />
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Example */}
        <div className="mt-24">
          <h2 className="mb-8 text-center text-2xl font-bold">Quick Example</h2>
          <HomeCodeBlock />
        </div>

        {/* Packages */}
        <div className="mt-24">
          <h2 className="mb-8 text-center text-2xl font-bold">All Packages</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <a
                key={pkg.name}
                href={pkg.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border/50 bg-card p-5 hover:border-primary/40 hover:shadow-sm hover:shadow-primary/5 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Package className="size-4 text-primary/70" />
                  <code className="text-sm font-medium">{pkg.name}</code>
                </div>
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1 group-hover:text-foreground transition-colors">
                    <svg className="size-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </span>
                  <span className="flex items-center gap-1 group-hover:text-foreground transition-colors">
                    <svg className="size-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 7.334v8h6.666v1.332H12v-1.332h12V7.334H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667H6.666v5.331zm4 0v1.336H8.001V8.667h2.665v5.332zm7.331 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-1.332V8.667h6.663v5.331z" />
                    </svg>
                    npm
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">
            Install @ctroenv/core and define your first schema in minutes.
          </p>
          <Link
            href="/docs/getting-started"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Read the docs
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
