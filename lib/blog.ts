import fs from "fs"
import path from "path"
import yaml from "js-yaml"

const blogDir = path.join(process.cwd(), "content", "blog")

export interface BlogFrontmatter {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string
}

export interface BlogPost extends BlogPostMeta {
  source: string
}

function parseFrontmatter(raw: string): { frontmatter: BlogFrontmatter; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n*/)
  if (!match) {
    return {
      frontmatter: { title: "", description: "", date: "", author: "", tags: [] },
      body: raw,
    }
  }

  const rawFm = match[1]
  const body = raw.slice(match[0].length)
  let parsed: Record<string, unknown> = {}

  try {
    parsed = yaml.load(rawFm) as Record<string, unknown>
  } catch {
    for (const line of rawFm.split(/\r?\n/)) {
      const colonIdx = line.indexOf(":")
      if (colonIdx === -1) continue
      const key = line.slice(0, colonIdx).trim()
      const value = line.slice(colonIdx + 1).trim().replace(/^['"]|['"]$/g, "")
      parsed[key] = value
    }
  }

  const tags = Array.isArray(parsed.tags) ? parsed.tags.map(String) : []

  return {
    frontmatter: {
      title: String(parsed.title ?? ""),
      description: String(parsed.description ?? ""),
      date: String(parsed.date ?? ""),
      author: String(parsed.author ?? "Ctrotech"),
      tags,
    },
    body,
  }
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(blogDir)) return []
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .sort()
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getBlogSlugs()
  const posts: BlogPostMeta[] = []

  for (const slug of slugs) {
    const filePath = path.join(blogDir, `${slug}.mdx`)
    const raw = fs.readFileSync(filePath, "utf-8")
    const { frontmatter } = parseFrontmatter(raw)
    posts.push({ ...frontmatter, slug })
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function loadBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, "utf-8")
  const { frontmatter, body } = parseFrontmatter(raw)
  return { ...frontmatter, slug, source: body }
}
