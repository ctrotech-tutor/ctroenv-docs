import fs from "fs"
import path from "path"
import { parseFrontmatter } from "@/lib/mdx"
import { sidebarSections } from "@/lib/navigation"

export interface SearchDocument {
  id: string
  title: string
  description: string
  section: string
  content: string
}

function stripMdx(mdx: string): string {
  return mdx
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]+`/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[#*_~>|]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\s+/g, " ")
    .trim()
}

function getSectionForSlug(slug: string): string {
  for (const s of sidebarSections) {
    for (const item of s.items) {
      if (item.href === `/docs/${slug}`) return s.title
    }
  }
  const folder = slug.split("/")[0]
  return folder.charAt(0).toUpperCase() + folder.slice(1)
}

export function getSearchData(): SearchDocument[] {
  const docs: SearchDocument[] = []
  const contentDir = path.join(process.cwd(), "content", "docs")
  if (!fs.existsSync(contentDir)) return docs

  function walk(dir: string, prefix: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), `${prefix}${entry.name}/`)
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        const slug = entry.name.replace(/\.mdx$/, "")
        const id = `${prefix}${slug}`
        const filePath = path.join(dir, entry.name)
        const raw = fs.readFileSync(filePath, "utf-8")
        const { frontmatter, body } = parseFrontmatter(raw)
        docs.push({
          id,
          title: frontmatter.title ?? slug,
          description: frontmatter.description ?? "",
          section: getSectionForSlug(id),
          content: stripMdx(body),
        })
      }
    }
  }

  walk(contentDir, "")
  return docs
}
