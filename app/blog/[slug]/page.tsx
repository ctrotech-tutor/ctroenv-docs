import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { MdxContent } from "@/components/mdx-content"
import { CodeBlocks } from "@/components/code-blocks"
import { getAllPosts, loadBlogPost } from "@/lib/blog"

const baseUrl = "https://ctroenv.vercel.app"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const posts = getAllPosts()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}

  const url = `${baseUrl}/blog/${slug}`

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      siteName: "CtroEnv",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const posts = getAllPosts()
  const meta = posts.find((p) => p.slug === slug)
  const content = loadBlogPost(slug)
  if (!meta || !content) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    author: {
      "@type": "Person",
      name: meta.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Ctrotech",
    },
    url: `${baseUrl}/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`,
    },
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={meta.date}>{meta.date}</time>
          <span aria-hidden="true">·</span>
          <span>{meta.author}</span>
          {meta.tags.length > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <div className="flex gap-1.5">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>
      <CodeBlocks>
        <MdxContent source={content.source} />
      </CodeBlocks>
    </article>
  )
}
