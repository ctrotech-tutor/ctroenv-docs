# Phase 7: UI Components

These shadcn-style UI components need to be updated to match ctrodb-docs versions.

## 7.1 `components/ui/dropdown-menu.tsx` — REPLACE

Copy from ctrodb-docs `components/ui/dropdown-menu.tsx`.

Uses `@radix-ui/react-dropdown-menu` with modern styling:
- Rounded-xl border
- Updated animation classes (animate-in/out, fade, zoom, slide)
- Focus-visible ring styling
- Data-slot attributes for shadcn v4 compatibility

## 7.2 `components/ui/sheet.tsx` — REPLACE

Copy from ctrodb-docs `components/ui/sheet.tsx`.

Uses `radix-ui` (Dialog as SheetPrimitive) with:
- Backdrop blur support
- Side variants (top/right/bottom/left)
- `showCloseButton` prop
- Modern animation classes (data-open/data-closed)
- Data-slot attributes

## 7.3 `components/ui/button.tsx` — REPLACE

Copy from ctrodb-docs `components/ui/button.tsx`.

Updated CVA variants:
- `variant`: default, outline, secondary, ghost, destructive, link
- `size`: default, xs, sm, lg, icon, icon-xs, icon-sm, icon-lg
- Focus-visible ring styling
- `asChild` support (Slot from radix-ui)
- Data-slot attributes

## Other UI components to CHECK:
- `accordion.tsx` — not used by ctrodb (may keep)
- `breadcrumb.tsx` — not used by new design (ctrodb uses inline breadcrumbs)
- `card.tsx` — used by homepage, keep
- `command.tsx` — NOT used by new design (remove)
- `dialog.tsx` — NOT used by new design (radix-ui/dialog used inline in search, remove)
- `drawer.tsx` — NOT used by new design (remove)
- `input-group.tsx` — keep if used
- `input.tsx` — keep if used
- `navigation-menu.tsx` — NOT used by new design (remove)
- `scroll-area.tsx` — keep (used by mobile sidebar)
- `separator.tsx` — check
- `tabs.tsx` — keep
- `textarea.tsx` — keep
- `tooltip.tsx` — keep

## Steps:
1. Replace `components/ui/dropdown-menu.tsx`
2. Replace `components/ui/sheet.tsx`
3. Replace `components/ui/button.tsx`
4. Remove unused UI components: `command.tsx`, `dialog.tsx`, `drawer.tsx`, `navigation-menu.tsx`
