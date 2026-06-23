# Phase 2: Core Lib Files

## 2.1 `lib/sidebar.ts` — NEW (replaces `lib/navigation.ts`)

Copy from ctrodb-docs. This reads `content/docs/meta.json` and generates sidebar groups with icons.

```typescript
// Reads meta.json for page ordering
// Parses frontmatter (gray-matter) for each page to get title
// Groups pages by directory (first path segment)
// Returns SidebarGroup[] with title, items, icon

export type SidebarItem = { title: string; slug: string }
export type SidebarGroup = { title: string; items: SidebarItem[]; icon?: string }
```

**Note:** `lib/navigation.ts` will be REMOVED (sidebarSections, navLinks, socialLinks, packages may need to be merged into other files)

## 2.2 `lib/toc.ts` — NEW (replaces TOC logic in `lib/mdx.ts`)

Copy from ctrodb-docs. Pure function to extract TOC items from MDX.

```typescript
export type TOCItem = { level: number; text: string; id: string }
export function extractTOC(mdx: string): TOCItem[]
```

## 2.3 `lib/mdx.ts` — REPLACE

Replace with ctrodb-docs version using:
- `@shikijs/rehype` with dual themes (github-light / github-dark)
- `rehype-autolink-headings` (behavior: "wrap")
- `rehype-slug`
- `remark-gfm`
- `defaultColor: "light"`, `defaultLanguage: "plaintext"`
- `InstallTabs` component registration
- TOC extraction via `lib/toc.ts`

```typescript
export async function compile(mdxSource: string): Promise<MDXResult> {
  // compileMDX with shiki dual themes
  // extractTOC from source
}
```

## 2.4 `lib/content.ts` — NEW

Copy from ctrodb-docs. High-level content layer:
- `getDoc(slug)` — reads MDX, parses frontmatter (gray-matter), compiles, gets prev/next from meta.json, gets lastUpdated from git
- `getAllDocSlugs()` — reads meta.json pages
- `getAdjacentPages(slug)` — prev/next from meta.json ordering
- `getGitDate(filePath)` — git log for last-updated, falls back to mtime

## 2.5 `lib/sidebar-context.tsx` — NEW

Client context for sidebar collapsed state.

```typescript
export function SidebarProvider({ children })
export function useSidebar() // returns { collapsed, toggle, setCollapsed }
```

## 2.6 `lib/utils.ts`
- Already identical (cn function using clsx + tailwind-merge)
- Keep as-is

## 2.7 `lib/hooks.ts` — Check if still needed
- ctrodb uses no scroll-direction hook (header is always visible)
- Keep or remove after verifying

## 2.8 `lib/reading-time.ts` — NEW (for blog)

Copy from ctrodb-docs if blog is needed.

## Steps:
1. Create `lib/sidebar.ts`
2. Create `lib/toc.ts`
3. Replace `lib/mdx.ts`
4. Create `lib/content.ts`
5. Create `lib/sidebar-context.tsx`
6. Create `lib/reading-time.ts`
7. Remove `lib/navigation.ts` (keep navLinks elsewhere)
