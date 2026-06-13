import { notFound } from "next/navigation"
import { loadContent, getContentPaths } from "@/lib/mdx"
import { MdxContent } from "@/components/mdx-content"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { OnThisPage } from "@/components/on-this-page"
import { PrevNext } from "@/components/prev-next"
import { CodeBlocks } from "@/components/code-blocks"
import { StickyMobileBar } from "@/components/sticky-mobile-bar"

export function generateStaticParams() {
  return getContentPaths().map((p) => {
    const parts = p.split("/")
    return { slug: parts }
  })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  const contentPath = slug?.join("/") || "getting-started"
  const page = loadContent(contentPath)
  if (!page) return {}

  return {
    title: page.frontmatter.title
      ? `${page.frontmatter.title} | ctroenv Docs`
      : "ctroenv Docs",
    description: page.frontmatter.description,
  }
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  const contentPath = slug?.join("/") || "getting-started"
  const page = loadContent(contentPath)
  if (!page) notFound()

  return (
    <>
      <StickyMobileBar toc={page.toc} />
      <div className="flex flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 gap-8 py-8">
        <article className="flex-1 min-w-0 max-w-4xl overflow-x-hidden">
          <Breadcrumbs />
          <CodeBlocks>
            <MdxContent source={page.source} />
          </CodeBlocks>
          <PrevNext />
        </article>
        <aside className="hidden xl:block w-56 shrink-0">
          <div className="sticky top-24">
            <OnThisPage items={page.toc} />
          </div>
        </aside>
      </div>
    </>
  )
}
