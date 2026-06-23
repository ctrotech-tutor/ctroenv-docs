import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getBlogPost, getAllDocSlugs } from "@/lib/content"
import { getAllPosts } from "@/lib/blog"
import { CodeCopyProvider } from "@/components/code-copy"

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
  const meta = posts.find((p) => p.slug === slug)
  if (!meta) return {}

  const url = `${baseUrl}/blog/${slug}`

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      type: "article",
      publishedTime: meta.date,
      authors: [meta.author],
      tags: meta.tags,
      siteName: "ctroenv",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
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
  if (!meta) notFound()

  const result = await getBlogPost(slug)
  if (!result) notFound()

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
      <CodeCopyProvider>
        <div className="prose flex-1 text-foreground/90 max-w-none dark:prose-invert prose-headings:scroll-mt-28 prose-headings:group/heading prose-a:no-underline hover:prose-a:underline">
          {result.content}
        </div>
      </CodeCopyProvider>
    </article>
  )
}
