# Phase 8: meta.json, App Layouts & Doc Page

## 8.1 `content/docs/meta.json` — NEW

Create ordered page list matching ctroenv's existing doc structure.

Based on current `content/docs/` structure:
```json
{
  "pages": [
    "getting-started",
    "getting-started/quick-start",
    "getting-started/core-concepts",
    "core/define-env",
    "core/string",
    "core/number",
    "core/boolean",
    "core/pick",
    "core/chainable",
    "core/refinements",
    "core/errors",
    "core/schema-composition",
    "cli/index",
    "cli/validate",
    "cli/generate",
    "cli/check",
    "cli/docs",
    "cli/init",
    "cli/configuration",
    "node",
    "vite",
    "nextjs",
    "migration/from-t3-env",
    "migration/from-envalid",
    "migration/from-dotenv"
  ]
}
```

## 8.2 `app/layout.tsx` — REPLACE

Adapted from ctrodb-docs `app/layout.tsx`:

- Import Inter + JetBrains Mono fonts (replacing Geist)
- Meta: title template `%s | ctroenv`, description, OG, Twitter
- `Providers` wrapper
- No Navbar in root layout (docs layout handles its own)
- SEO structured data (WebSite schema)
- Add `data-scroll-behavior="smooth"` on `<html>`

**Keep from ctroenv:** 
- Logo (icon)
- Metadata values (ctroenv-specific)
- Any analytics scripts

## 8.3 `app/docs/layout.tsx` — REPLACE

Copy from ctrodb-docs `app/docs/layout.tsx`:

```tsx
<SidebarProvider>
  <Subnav groups={groups} />
  <div className="flex">
    <SidebarWrapper groups={groups} />
    <SidebarPanel />
    <main className="min-w-0 flex-1">{children}</main>
  </div>
</SidebarProvider>
```

- No AskAI button (we can add later if needed)

## 8.4 `app/docs/[[...slug]]/page.tsx` — REPLACE

Copy from ctrodb-docs page.tsx:

- Uses `getDoc()` from lib/content
- `generateStaticParams` from `getAllDocSlugs()`
- `generateMetadata` with OG images

**Doc page layout:**
1. `TocPopover` (mobile TOC bar)
2. Flex container with max-w-[90rem]
3. Article (max-w-[900px]):
   - h1 title from frontmatter
   - description paragraph
   - Breadcrumb nav (chevron style)
   - Action bar: CopyMarkdown + OpenDropdown + DocShare
   - CodeCopyProvider wrapping prose content
   - Prose div with compiled MDX
   - Feedback + Edit on GitHub link
   - Last updated date
   - DocNav (prev/next cards)
4. TableOfContents sidebar (desktop, xl:block)

**Adapt for ctroenv:**
- OG URL → ctroenv.vercel.app
- GitHub edit URL → ctrotech-tutor/ctroenv-docs
- Breadcrumb groups (adjust for ctroenv sections)
- Default slug → "getting-started"

## 8.5 `app/page.tsx` — UPDATE (keep ctroenv content)

Keep ctroenv's existing homepage content, but wrap with:
- Import Navbar at top
- Import Footer at bottom
- Reorganize layout to match ctrodb-docs structure

## 8.6 Remove old layout files:
- `components/layout/header.tsx`
- `components/layout/mobile-tabs.tsx`
- `components/layout/sidebar.tsx` (old)
- `components/sticky-mobile-bar.tsx`

## Steps:
1. Create `content/docs/meta.json`
2. Replace `app/layout.tsx`
3. Replace `app/docs/layout.tsx`
4. Replace `app/docs/[[...slug]]/page.tsx`
5. Update `app/page.tsx`
6. Remove old layout files
