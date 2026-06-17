import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "CtroEnv release notes, changelogs, and announcements.",
}

const posts = [
  {
    slug: "turbopack-and-quality",
    title: "Turbopack Compat, Better Types, and Quality Improvements",
    date: "June 17, 2026",
    description:
      "Eager validation for Turbopack, const type parameter for pick(), and string | undefined for env.meta.get().",
  },
  {
    slug: "v1-2-0",
    title: "v1.2.0 — JSON Config, Env File Parsing, CLI Improvements",
    date: "June 17, 2026",
    description:
      "Smarter env file parsing, JSON configuration support, and check --strict for value validation.",
  },
  {
    slug: "secret-masking",
    title: "Protecting Secrets at Runtime",
    date: "June 17, 2026",
    description:
      "Runtime secret masking prevents accidental leaks of JWT secrets, API keys, and database credentials.",
  },
  {
    slug: "monorepo-env",
    title: "Environment Variables in Monorepos",
    date: "June 17, 2026",
    description:
      "Schema composition for reusable env definitions across monorepo packages with extendSchema.",
  },
  {
    slug: "why-ctroenv",
    title: "Why CtroEnv?",
    date: "June 17, 2026",
    description:
      "Bring the same rigor from your type system to the environment variables your app depends on.",
  },
  {
    slug: "v1-1-1",
    title: "v1.1.1 — Bug Fixes & Quality Improvements",
    date: "June 17, 2026",
    description:
      "Fixes for env.meta, Next.js server-only key guard, CLI stderr, and boolean validator polish.",
  },
  {
    slug: "v1-1-0",
    title: "v1.1.0 — Secret Masking & Schema Composition",
    date: "June 17, 2026",
    description:
      "Runtime secret masking, schema composition for monorepos, and universal AI agent guide.",
  },
  {
    slug: "v1-0-1",
    title: "v1.0.1 — Polish & Developer Experience",
    date: "June 13, 2026",
    description:
      "Error message refinement, performance benchmarks, and bundle size optimization.",
  },
  {
    slug: "v1-0-0",
    title: "v1.0.0 — Type-Safe Environment Variables for TypeScript",
    date: "June 2026",
    description:
      "Initial release of CtroEnv: define, validate, and infer types for environment variables.",
  },
]

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted-foreground">Release notes, changelogs, and announcements.</p>
      <div className="mt-10 flex flex-col gap-8">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <time className="text-sm text-muted-foreground">{post.date}</time>
              <h2 className="mt-1 text-xl font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-1 text-muted-foreground">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
