# Phase 1: Dependencies & CSS

## 1.1 Package.json Updates

### Add these dependencies:
```json
"gray-matter": "^4.0.3",
"@shikijs/rehype": "^4.2.0",
"minisearch": "^7.2.0",
"rehype-autolink-headings": "^7.1.0"
```

### Remove these dependencies:
```json
"fuse.js",
"cmdk",
"rehype-pretty-code"
```

### Update scripts:
```json
"scripts": {
  "build:search": "node scripts/build-search-index.mjs",
  "dev": "node scripts/build-search-index.mjs && next dev",
  "build": "node scripts/build-search-index.mjs && next build",
  "start": "next start",
  "lint": "eslint",
  "typecheck": "tsc --noEmit"
}
```

## 1.2 globals.css (`app/globals.css`)

Replace entire file with ctrodb-docs structure, BUT keep ctroenv's OKLCH color values.

### Key differences:
- Import `@plugin "@tailwindcss/typography"` at top (instead of prose classes in JSX)
- Add `@custom-variant dark (&:is(.dark *));`
- Add `@theme inline` block with sidebar tokens, chart tokens, radius tokens
- Add scrollbar customization (webkit + Firefox)
- Add fd-* animations (fd-dialog-in, fd-dialog-out, fd-collapsible-*, fd-accordion-*)
- Add fd-* utilities (fd-scrollbar-none, fd-mask-top, fd-mask-bottom, fd-mask-both)
- Add shiki dual-theme CSS rules (`.shiki, .shiki span` with dark theme transition)
- Add package-code and code-block-* shiki overrides
- Add prose table styling (rounded-xl border, hover rows)
- Add prose code block styling (rounded-xl border)
- Add prose inline code styling
- Add `.prose-no-margin p` utility
- Replace `border-border` layer rule with `@layer base`

**Color tokens to KEEP from ctroenv** (just move into the new CSS structure):
- `--background`, `--foreground`
- `--card`, `--card-foreground`  
- `--popover`, `--popover-foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--destructive`
- `--border`, `--input`, `--ring`
- `--radius`

**Add sidebar tokens** (using ctroenv's colors):
```css
--sidebar: oklch(...)
--sidebar-foreground: oklch(...)
--sidebar-primary: oklch(...)
--sidebar-primary-foreground: white
--sidebar-accent: oklch(...)
--sidebar-accent-foreground: oklch(...)
--sidebar-border: oklch(...)
--sidebar-ring: oklch(...)
```

**Add chart tokens** (using ctroenv's colors):
```css
--chart-1: oklch(...)
--chart-2: oklch(...)
--chart-3: oklch(...)
--chart-4: oklch(...)
--chart-5: oklch(...)
```

## 1.3 postcss.config.mjs
- Already identical (both use `@tailwindcss/postcss`)

## 1.4 next.config.ts
- Keep plain config, no unoptimized images needed

## Steps:
1. Update package.json (add deps, remove deps, update scripts)
2. Run `npm install`
3. Replace globals.css with new structure (preserving ctroenv colors)
