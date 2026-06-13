import { notFound } from "next/navigation"
import type { Metadata } from "next"

import V100 from "@/content/blog/v1-0-0.mdx"
import V101 from "@/content/blog/v1-0-1.mdx"

const posts = {
  "v1-0-0": { title: "v1.0.0 — Type-Safe Environment Variables for TypeScript", content: V100 },
  "v1-0-1": { title: "v1.0.1 — Polish & Developer Experience", content: V101 },
} as const

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug as keyof typeof posts]
  if (!post) return {}
  return { title: post.title, description: `CtroEnv ${post.title}` }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug as keyof typeof posts]
  if (!post) notFound()

  const Content = post.content
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 prose prose-gray dark:prose-invert">
      <Content />
    </article>
  )
}
