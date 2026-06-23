# Phase 4: TOC Components

## 4.1 `components/toc.tsx` — NEW (replaces `components/on-this-page.tsx`)

Copy from ctrodb-docs `components/toc.tsx`.

Features:
- Sticky sidebar (right side, w-64, 2xl:w-72)
- "On this page" heading with TextAlignStart icon
- SVG tree visualization:
  - SVG path connecting all headings
  - Gradient stroke (primary → transparent) indicating scroll position
  - Animated dot following the path
  - Proper SVG line connections for h2 → h3 indentations
- RAF-based scroll tracking (IntersectionObserver + scroll events)
- Active heading detection with TOP_OFFSET = 100
- H3 items indented with tree branch lines

## 4.2 `components/toc-popover.tsx` — NEW (replaces `components/sticky-mobile-bar.tsx` TOC part)

Copy from ctrodb-docs `components/toc-popover.tsx`.

Features:
- Sticky bar below header on mobile (xl:hidden)
- Button with progress circle SVG (circular progress indicator)
- Current active heading text displayed
- ChevronDown that rotates on open
- Collapsible (Radix) with fd animations
- List of all headings with active state
- Click navigates + closes
- RAF-based scroll tracking
- Click-outside + Escape to close

## Steps:
1. Create `components/toc.tsx`
2. Create `components/toc-popover.tsx`
3. Remove old: `components/on-this-page.tsx`
