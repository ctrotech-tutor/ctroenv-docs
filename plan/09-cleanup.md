# Phase 9: Cleanup & Verification

## Files to Remove

### Old lib files:
- `lib/navigation.ts` — replaced by `lib/sidebar.ts`
- `lib/mdx.ts` (old) — replaced by new version
- `lib/search-data.ts` — replaced by search-index + search-engine

### Old components:
- `components/layout/header.tsx` — replaced by `components/navbar.tsx`
- `components/layout/mobile-tabs.tsx` — replaced by `components/subnav.tsx`
- `components/layout/sidebar.tsx` (old) — replaced by new `components/layout/sidebar.tsx`
- `components/sticky-mobile-bar.tsx` — replaced by `components/toc-popover.tsx`
- `components/on-this-page.tsx` — replaced by `components/toc.tsx`
- `components/prev-next.tsx` — replaced by `components/doc-nav.tsx`
- `components/code-blocks.tsx` — replaced by `components/code-copy.tsx`
- `components/breadcrumbs.tsx` — breadcrumbs now inline in doc page
- `components/logo.tsx` — keep (or replace with Image/Logo)
- `components/package-tabs.tsx` (old) — replaced by new version

### Old UI components:
- `components/ui/command.tsx` — not used
- `components/ui/dialog.tsx` — not used (radix-ui/dialog used inline in search)
- `components/ui/drawer.tsx` — not used
- `components/ui/navigation-menu.tsx` — not used

### Old app files:
- `app/search-data.json/` — replaced by search-index.json

## Verification Checklist

### Layout & Navigation
- [ ] Navbar shows on all pages (desktop)
- [ ] Subnav shows on mobile
- [ ] Sidebar is collapsible
- [ ] SidebarPanel shows when collapsed
- [ ] Mobile sidebar opens as sheet
- [ ] Mobile nav dropdown works
- [ ] Theme toggle works (light/dark)
- [ ] Footer renders with correct links

### Doc Page
- [ ] Breadcrumbs display correctly
- [ ] CopyMarkdown button copies raw source
- [ ] OpenDropdown shows GitHub/AI/editor links
- [ ] DocShare copies link / uses native share
- [ ] Code blocks have copy buttons
- [ ] Code blocks have proper syntax highlighting
- [ ] Feedback thumbs work
- [ ] Edit on GitHub link opens correct URL
- [ ] Last updated date shows
- [ ] Prev/Next cards navigate correctly
- [ ] Desktop TOC shows with SVG tree
- [ ] Mobile TOC popover shows with progress circle

### Search
- [ ] Ctrl+K opens search dialog
- [ ] Search returns results
- [ ] Keyboard navigation works
- [ ] Filter toggle cycles All/Docs/Blog
- [ ] Loading/empty/error states display

### Content
- [ ] All md files render correctly
- [ ] Frontmatter parsed correctly
- [ ] InstallTabs component renders
- [ ] Links resolve to correct paths

### Build
- [ ] `npm run build:search` generates search-index.json
- [ ] `npm run build` succeeds without errors
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes

## Build Commands to Test
```powershell
npm run build:search
npm run build
npm run lint
```
