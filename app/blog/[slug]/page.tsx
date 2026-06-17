import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { MdxContent } from "@/components/mdx-content"
import { CodeBlocks } from "@/components/code-blocks"
import { loadBlogPost, getBlogSlugs } from "@/lib/blog"

const posts: Record<string, { title: string; date: string; description: string }> = {
  "v1-2-0": {
    title: "v1.2.0 — JSON Config, Env File Parsing, CLI Improvements",
    date: "June 17, 2026",
    description: "Smarter env file parsing, JSON configuration support, and check --strict for value validation.",
  },
  "secret-masking": {
    title: "Protecting Secrets at Runtime",
    date: "June 17, 2026",
    description: "Runtime secret masking prevents accidental leaks of JWT secrets, API keys, and database credentials.",
  },
  "monorepo-env": {
    title: "Environment Variables in Monorepos",
    date: "June 17, 2026",
    description: "Schema composition for reusable env definitions across monorepo packages with extendSchema.",
  },
  "why-ctroenv": {
    title: "Why CtroEnv?",
    date: "June 17, 2026",
    description: "Bring the same rigor from your type system to the environment variables your app depends on.",
  },
  "v1-1-1": {
    title: "v1.1.1 — Bug Fixes & Quality Improvements",
    date: "June 17, 2026",
    description: "Fixes for env.meta, Next.js server-only key guard, CLI stderr, and boolean validator polish.",
  },
  "v1-1-0": {
    title: "v1.1.0 — Secret Masking & Schema Composition",
    date: "June 17, 2026",
    description: "Runtime secret masking, schema composition for monorepos, and universal AI agent guide.",
  },
  "v1-0-1": {
    title: "v1.0.1 — Polish & Developer Experience",
    date: "June 13, 2026",
    description: "Error message refinement, performance benchmarks, and bundle size optimization.",
  },
  "v1-0-0": {
    title: "v1.0.0 — Type-Safe Environment Variables for TypeScript",
    date: "June 2026",
    description: "Initial release of CtroEnv: define, validate, and infer types for environment variables.",
  },
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return {}
  return { title: post.title, description: post.description }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug]
  const content = loadBlogPost(slug)
  if (!post || !content) notFound()

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <time className="mt-2 block text-sm text-muted-foreground">{post.date}</time>
      </header>
      <CodeBlocks>
        <MdxContent source={content.source} />
      </CodeBlocks>
    </article>
  )
}
