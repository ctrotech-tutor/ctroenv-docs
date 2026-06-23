import fs from "fs"
import path from "path"
import type { MetadataRoute } from "next"
import { getAllDocSlugs } from "@/lib/content"
import { getBlogSlugs } from "@/lib/blog"

const baseUrl = "https://ctroenv.vercel.app"

function getFileLastmod(filePath: string): Date {
  try {
    const stat = fs.statSync(filePath)
    return stat.mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  entries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  })

  const staticRoutes = [
    "/blog",
  ]

  for (const route of staticRoutes) {
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  }

  const contentDir = path.join(process.cwd(), "content", "docs")
  const docPaths = getAllDocSlugs().map((s) => s.join("/"))
  for (const docPath of docPaths) {
    const filePath = path.join(contentDir, `${docPath}.mdx`)
    const lastmod = getFileLastmod(filePath)
    entries.push({
      url: `${baseUrl}/docs/${docPath}`,
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  }

  const blogDir = path.join(process.cwd(), "content", "blog")
  const slugs = getBlogSlugs()
  for (const slug of slugs) {
    const filePath = path.join(blogDir, `${slug}.mdx`)
    const lastmod = getFileLastmod(filePath)
    entries.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  }

  return entries
}
