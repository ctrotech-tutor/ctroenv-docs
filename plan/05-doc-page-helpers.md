# Phase 5: Doc Page & Helper Components

## 5.1 `components/code-copy.tsx` — NEW

Copy from ctrodb-docs `components/code-copy.tsx`.

- Injects copy buttons into all `<figure data-rehype-pretty-code-figure>` elements
- MutationObserver for dynamic content
- Copy + check SVG animation
- Wraps children in provider (no visual wrapper)

## 5.2 `components/copy-markdown.tsx` — NEW

Copy from ctrodb-docs `components/copy-markdown.tsx`.

- Button to copy raw markdown source text
- Uses `navigator.clipboard.writeText`
- Shows check icon + "Copy Markdown" on success
- Uses secondary Button variant

## 5.3 `components/open-dropdown.tsx` — NEW

Copy from ctrodb-docs `components/open-dropdown.tsx`.

- Dropdown with sections: Source (GitHub), AI Assistants (Claude, ChatGPT), Editors (Cursor)
- Each item links to external URL
- Uses secondary Button + ChevronDown

**Adapt for ctroenv:** Update REPO to `ctroenv-docs/content/docs`, GitHub URLs

## 5.4 `components/doc-share.tsx` — NEW

Copy from ctrodb-docs `components/doc-share.tsx`.

- Copy link button + Native Share API button
- Shows check icon on copy
- Fallback to copy if navigator.share unavailable

**Adapt for ctroenv:** Update URL domain to `ctroenv.vercel.app`

## 5.5 `components/feedback.tsx` — NEW

Copy from ctrodb-docs `components/feedback.tsx`.

- Thumbs up / Thumbs down buttons
- Toggle state (click again to un-rate)
- POSTs to `/api/doc-feedback` endpoint
- Sending state disables buttons

## 5.6 `components/doc-nav.tsx` — NEW (replaces `components/prev-next.tsx`)

Copy from ctrodb-docs `components/doc-nav.tsx`.

- Card-style prev/next navigation
- 2-column grid on sm+, single column on mobile
- ChevronLeft/Right with hover animation
- Truncated page titles
- Rounded-xl border cards with hover glow

## 5.7 `components/install-tabs.tsx` — NEW

Copy from ctrodb-docs `components/install-tabs.tsx`.

- Package manager tabs (npm/pnpm/yarn/bun) for install commands

**Adapt for ctroenv:** Update package name to `@ctroenv/core`

## 5.8 `components/package-tabs.tsx` — NEW (replaces existing old version)

Copy from ctrodb-docs `components/package-tabs.tsx`.

- Radix Tabs with Shiki code highlighting
- Dual theme support (github-light/github-dark)
- Copy button in header
- Active tab indicator (bottom border)
- Animated content transitions

## 5.9 `components/icons/github-icon.tsx` — NEW

Copy from ctrodb-docs `components/icons/github-icon.tsx`.

Simple SVG GitHub icon component with standard props.

## Steps:
1. Create `components/code-copy.tsx`
2. Create `components/copy-markdown.tsx`
3. Create `components/open-dropdown.tsx`
4. Create `components/doc-share.tsx`
5. Create `components/feedback.tsx`
6. Create `components/doc-nav.tsx`
7. Create `components/install-tabs.tsx`
8. Replace `components/package-tabs.tsx`
9. Create `components/icons/` directory + `github-icon.tsx`
10. Remove old: `components/prev-next.tsx`, `components/code-blocks.tsx`
