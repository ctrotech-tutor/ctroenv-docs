import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { MdxContent } from "@/components/mdx-content"
import { CodeBlocks } from "@/components/code-blocks"
import { loadBlogPost, getBlogSlugs } from "@/lib/blog"

const posts: Record<string, { title: string; date: string; description: string }> = {
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
