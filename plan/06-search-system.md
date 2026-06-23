# Phase 6: Search System

## 6.1 `scripts/build-search-index.mjs` — NEW

Copy from ctrodb-docs `scripts/build-search-index.mjs`.

- Reads `content/docs/meta.json` for ordered doc pages
- Reads all blog posts from `content/blog/`
- Parses frontmatter with gray-matter
- Splits content into sections by headings
- Strips markdown for plaintext content
- Outputs `public/search-index.json`

**No adaptations needed** (works generically).

## 6.2 `lib/search-engine.ts` — NEW

Copy from ctrodb-docs `lib/search-engine.ts`.

- MiniSearch engine singleton
- Lazy-loads search index from `/search-index.json`
- `getSearchEngine()` returns MiniSearch instance
- `searchDocs(results, filter, limit)` filters by type

## 6.3 `lib/search-index.ts` — NEW

Copy from ctrodb-docs `lib/search-index.ts`.

- Type definitions for SearchDoc, SearchResult, SearchFilter
- `getSearchIndex()` fetches and caches `/search-index.json`

## 6.4 `lib/search-context.tsx` — NEW (replaces current `lib/search-context.tsx`)

Copy from ctrodb-docs `lib/search-context.tsx`.

- Full search dialog with:
  - Ctrl+K / Cmd+K shortcut
  - Filter toggle (All / Docs / Blog)
  - Debounced search (150ms)
  - Keyboard navigation (arrows, enter)
  - Highlighted results with `<mark>`
  - Loading/empty/error states
  - Scroll into view for active result
- Uses `@radix-ui/react-dialog`
- Uses MiniSearch for search

## Steps:
1. Create `scripts/build-search-index.mjs`
2. Create `lib/search-engine.ts`
3. Create `lib/search-index.ts`
4. Replace `lib/search-context.tsx`
5. Remove old: `lib/search-data.ts`
6. Remove old: `app/search-data.json/` directory
