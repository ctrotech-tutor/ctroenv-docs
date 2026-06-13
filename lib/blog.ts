import fs from "fs"
import path from "path"

const blogDir = path.join(process.cwd(), "content", "blog")

export interface BlogPost {
  slug: string
  source: string
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(blogDir)) return []
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}

export function loadBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  return { slug, source: fs.readFileSync(filePath, "utf-8") }
}
