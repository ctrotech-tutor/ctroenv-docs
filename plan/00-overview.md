# CtroEnv Docs Redesign — Full Plan

## Goal
Rebuild `ctroenv/apps/docs` to be **structurally and visually identical** to `ctrodb-docs` in every aspect:
- Layout, sidebar, navigation, TOC, search, doc page, code blocks, animations, interactions
- Only **content** (ctroenv MDX files) and **color tokens** (ctroenv's existing OKLCH values) remain different

## Source of Truth
All component structures, CSS patterns, and behaviors are copied from:
`C:\Projects\project\lib\ctrodb-docs`

## Implementation Phases

| Phase | Description | Files Involved |
|-------|-------------|----------------|
| 1 | Dependencies & CSS | package.json, globals.css, postcss.config.mjs |
| 2 | Core lib files | lib/sidebar.ts, lib/toc.ts, lib/content.ts, lib/mdx.ts, lib/sidebar-context.tsx, lib/utils.ts |
| 3 | Layout components | components/navbar.tsx, components/subnav.tsx, components/sidebar.tsx, components/sidebar-wrapper.tsx, components/sidebar-panel.tsx, components/mobile-sidebar.tsx, components/mobile-nav.tsx, components/footer.tsx, components/providers.tsx, components/theme-toggle.tsx |
| 4 | TOC components | components/toc.tsx, components/toc-popover.tsx |
| 5 | Doc page & helpers | components/code-copy.tsx, components/copy-markdown.tsx, components/open-dropdown.tsx, components/doc-share.tsx, components/feedback.tsx, components/doc-nav.tsx, components/install-tabs.tsx, components/package-tabs.tsx, components/icons/github-icon.tsx |
| 6 | Search system | scripts/build-search-index.mjs, lib/search-engine.ts, lib/search-index.ts, lib/search-context.tsx, public/search-index.json |
| 7 | UI components | components/ui/dropdown-menu.tsx, components/ui/sheet.tsx, components/ui/button.tsx |
| 8 | meta.json & content | content/docs/meta.json, app/layout.tsx, app/docs/layout.tsx, app/docs/[[...slug]]/page.tsx |
| 9 | Cleanup | Remove old files (code-blocks.tsx, breadcrumbs.tsx, prev-next.tsx, on-this-page.tsx, sticky-mobile-bar.tsx, etc.) |

## Detailed file mapping: ctrodb-docs → ctroenv-docs

| ctrodb-docs source | ctroenv-docs destination |
|---|---|
| app/globals.css | app/globals.css (keep ctroenv colors) |
| app/layout.tsx | app/layout.tsx |
| app/docs/layout.tsx | app/docs/layout.tsx |
| app/docs/[[...slug]]/page.tsx | app/docs/[[...slug]]/page.tsx |
| app/page.tsx | app/page.tsx (keep ctroenv content) |
| lib/sidebar.ts | lib/sidebar.ts |
| lib/toc.ts | lib/toc.ts |
| lib/content.ts | lib/content.ts |
| lib/mdx.ts | lib/mdx.ts |
| lib/sidebar-context.tsx | lib/sidebar-context.tsx |
| lib/search-context.tsx | lib/search-context.tsx |
| lib/search-engine.ts | lib/search-engine.ts |
| lib/search-index.ts | lib/search-index.ts |
| lib/utils.ts | lib/utils.ts (already same) |
| components/navbar.tsx | components/navbar.tsx |
| components/subnav.tsx | components/subnav.tsx |
| components/sidebar.tsx | components/layout/sidebar.tsx (move) |
| components/sidebar-wrapper.tsx | components/layout/sidebar-wrapper.tsx |
| components/sidebar-panel.tsx | components/sidebar-panel.tsx |
| components/mobile-sidebar.tsx | components/layout/mobile-sidebar.tsx |
| components/mobile-nav.tsx | components/mobile-nav.tsx |
| components/footer.tsx | components/layout/footer.tsx |
| components/providers.tsx | components/providers.tsx |
| components/theme-toggle.tsx | components/theme-toggle.tsx |
| components/toc.tsx | components/toc.tsx |
| components/toc-popover.tsx | components/toc-popover.tsx |
| components/code-copy.tsx | components/code-copy.tsx |
| components/copy-markdown.tsx | components/copy-markdown.tsx |
| components/open-dropdown.tsx | components/open-dropdown.tsx |
| components/doc-share.tsx | components/doc-share.tsx |
| components/feedback.tsx | components/feedback.tsx |
| components/doc-nav.tsx | components/doc-nav.tsx |
| components/install-tabs.tsx | components/install-tabs.tsx |
| components/package-tabs.tsx | components/package-tabs.tsx |
| components/icons/github-icon.tsx | components/icons/github-icon.tsx |
| components/ui/dropdown-menu.tsx | components/ui/dropdown-menu.tsx |
| components/ui/sheet.tsx | components/ui/sheet.tsx |
| components/ui/button.tsx | components/ui/button.tsx |
| scripts/build-search-index.mjs | scripts/build-search-index.mjs |
| content/docs/meta.json | content/docs/meta.json |
