import fs from "fs"
import path from "path"
import matter from "gray-matter"

export type SidebarItem = {
  title: string
  slug: string
}

export type SidebarGroup = {
  title: string
  items: SidebarItem[]
  icon?: string
}

const groupIcons: Record<string, string> = {
  "getting-started": "Rocket",
  "core": "Database",
  "cli": "Terminal",
  "adapters": "Cable",
  "node": "Cable",
  "vite": "Cable",
  "nextjs": "Cable",
  "migration": "ArrowRightLeft",
}

const groupDisplayNames: Record<string, string> = {
  "getting-started": "Getting Started",
  "core": "Core API",
  "cli": "CLI",
  "adapters": "Adapters",
  "node": "Adapters",
  "vite": "Adapters",
  "nextjs": "Adapters",
  "migration": "Migration",
  "__root__": "Other",
}

const adapterSlugs = new Set(["node", "vite", "nextjs"])

function getIcon(key: string): string | undefined {
  return groupIcons[key]
}

export function getSidebar(): SidebarGroup[] {
  const metaPath = path.join(process.cwd(), "content/docs/meta.json")
  const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"))

  const groupMap = new Map<string, SidebarItem[]>()

  for (const pagePath of meta.pages as string[]) {
    const parts = pagePath.split("/")
    let groupKey: string

    if (adapterSlugs.has(pagePath)) {
      groupKey = "adapters"
    } else {
      groupKey = parts.length > 1 ? parts[0] : "__root__"
    }

    const filePath = path.join(process.cwd(), `content/docs/${pagePath}.mdx`)
    const source = fs.readFileSync(filePath, "utf8")
    const { data } = matter(source)
    const title = (data.title as string) || parts[parts.length - 1]

    if (!groupMap.has(groupKey)) {
      groupMap.set(groupKey, [])
    }
    groupMap.get(groupKey)!.push({ title, slug: pagePath })
  }

  const groups: SidebarGroup[] = []
  const rootItems: SidebarItem[] = []

  for (const [key, items] of groupMap) {
    if (key === "__root__") {
      rootItems.push(...items)
    } else {
      groups.push({
        title: groupDisplayNames[key] || key.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        items,
        icon: getIcon(key),
      })
    }
  }

  for (const item of rootItems) {
    const existing = groups.find((g) => g.title === item.title)
    if (existing) {
      existing.items.unshift(item)
    } else {
      groups.push({
        title: item.title,
        items: [item],
        icon: "GitPullRequest",
      })
    }
  }

  return groups
}
