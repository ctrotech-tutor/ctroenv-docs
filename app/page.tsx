import Link from "next/link"
import { Logo } from "@/components/logo"
import { HomeCodeBlock } from "@/components/home-code-block"
import { ArrowRight, ShieldCheck, Zap, Puzzle, Terminal } from "lucide-react"

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

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <Logo size={48} className="mb-6" />
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Type-Safe{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Environment Variables
          </span>{" "}
          for TypeScript
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Define, validate, and infer types for environment variables with zero runtime dependencies.
          Beautiful error messages, framework adapters, and CLI tooling.
        </p>
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
      </div>

      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <feature.icon className="mb-4 size-8 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="mb-8 text-center text-2xl font-bold">Quick Example</h2>
        <HomeCodeBlock />
      </div>

      <div className="mt-24 text-center">
        <p className="text-sm text-muted-foreground">
          MIT License &middot; Published on{" "}
          <a
            href="https://npmjs.com/package/@ctroenv/core"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            npm
          </a>{" "}
          &middot;{" "}
          <a
            href="https://github.com/ctrotech-tutor/ctroenv"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  )
}
