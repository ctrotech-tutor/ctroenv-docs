# Phase 3: Layout Components

## 3.1 `components/navbar.tsx` — NEW (replaces `components/layout/header.tsx`)

Copy from ctrodb-docs `components/navbar.tsx`.

Features:
- Sticky top header with backdrop blur
- Logo + brand name (left)
- Nav links: Documentation, API, Blog (from navLinks)
- Search bar (desktop: wide input with Ctrl+K badge)
- Theme toggle (desktop only)
- GitHub link
- Mobile: search icon + hamburger (MobileNav)

**Adapt for ctroenv:** 
- Logo component (use existing `Logo` component instead of Image)
- Nav links from config (use existing navLinks from navigation.ts before removal)
- Update hrefs to ctroenv paths
- GitHub URL → ctrotech-tutor/ctroenv

## 3.2 `components/subnav.tsx` — NEW (replaces MobileTabs + sticky-mobile-bar)

Copy from ctrodb-docs `components/subnav.tsx`.

Features:
- Mobile-only header (below lg breakpoint)
- Logo left
- Search button + hamburger right
- Sheet opens on mobile sidebar

## 3.3 `components/layout/sidebar.tsx` — NEW (replaces current sidebar)

Copy from ctrodb-docs `components/sidebar.tsx`.

Features:
- Collapsible sidebar groups with icons
- Active page indicator (primary color bar on left)
- Search button at top
- Collapse toggle button (PanelLeft)
- Logo + brand at top
- GitHub + Theme toggle at bottom
- Scrollable with hidden scrollbar
- Groups use animated collapsible (ChevronDown rotation)

**Adapt for ctroenv:** 
- Logo component instead of Image
- Use data from `lib/sidebar.ts` (meta.json-based)
- Update GitHub URL

## 3.4 `components/layout/sidebar-wrapper.tsx` — NEW

Copy from ctrodb-docs `components/sidebar-wrapper.tsx`.

- Sticky sidebar container with collapse state
- Transition width from 268px to 0 when collapsed
- Hidden on mobile

## 3.5 `components/sidebar-panel.tsx` — NEW

Copy from ctrodb-docs `components/sidebar-panel.tsx`.

- Floating panel (absolute positioned) visible when sidebar is collapsed
- Contains: expand button + search button

## 3.6 `components/layout/mobile-sidebar.tsx` — NEW

Copy from ctrodb-docs `components/mobile-sidebar.tsx`.

- Same SidebarGroup rendering as desktop
- Calls `onLinkClick` after navigation (to close sheet)

## 3.7 `components/mobile-nav.tsx` — NEW

Copy from ctrodb-docs `components/mobile-nav.tsx`.

- Dropdown menu triggered by hamburger on mobile
- Links to main doc sections, playground, blog
- GitHub + Theme toggle at bottom

**Adapt for ctroenv:** No playground → remove it

## 3.8 `components/layout/footer.tsx` — REPLACE

Copy from ctrodb-docs `components/footer.tsx`.

**Adapt for ctroenv:**
- Brand name & description → ctroenv
- Links → Documentation, API, Blog
- GitHub → ctrotech-tutor/ctroenv
- Remove playground link
- Tagline: "Type-Safe Environment Variables for TypeScript"

## 3.9 `components/providers.tsx` — REPLACE

Copy from ctrodb-docs `components/providers.tsx`.

Wrap children in:
- `ThemeProvider` (next-themes)
- `SearchProvider`
- No `AiProvider` (unless we want to add that later)

## 3.10 `components/theme-toggle.tsx` — NEW

Copy from ctrodb-docs `components/theme-toggle.tsx`.

Sun/Moon toggle with mounted state handling and active indicator.

## Steps:
1. Create `components/navbar.tsx`
2. Create `components/subnav.tsx`
3. Create `components/layout/sidebar.tsx`
4. Create `components/layout/sidebar-wrapper.tsx`
5. Create `components/sidebar-panel.tsx`
6. Create `components/layout/mobile-sidebar.tsx`
7. Create `components/mobile-nav.tsx`
8. Replace `components/layout/footer.tsx`
9. Replace `components/providers.tsx`
10. Create `components/theme-toggle.tsx`
11. Remove old: `components/layout/header.tsx`, `components/layout/mobile-tabs.tsx`
