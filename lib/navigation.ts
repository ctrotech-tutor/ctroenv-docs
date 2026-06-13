export interface NavItem {
  title: string
  href: string
  external?: boolean
}

export interface SidebarSection {
  title: string
  items: NavItem[]
}

export const sidebarSections: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "/docs/getting-started" },
      { title: "Quick Start", href: "/docs/getting-started/quick-start" },
      { title: "Core Concepts", href: "/docs/getting-started/core-concepts" },
    ],
  },
  {
    title: "Core API",
    items: [
      { title: "defineEnv", href: "/docs/core/define-env" },
      { title: "string()", href: "/docs/core/string" },
      { title: "number()", href: "/docs/core/number" },
      { title: "boolean()", href: "/docs/core/boolean" },
      { title: "pick()", href: "/docs/core/pick" },
      { title: "Chainable Methods", href: "/docs/core/chainable" },
      { title: "Refinements", href: "/docs/core/refinements" },
      { title: "Error Handling", href: "/docs/core/errors" },
    ],
  },
  {
    title: "CLI",
    items: [
      { title: "Overview", href: "/docs/cli" },
      { title: "validate", href: "/docs/cli/validate" },
      { title: "generate", href: "/docs/cli/generate" },
      { title: "check", href: "/docs/cli/check" },
      { title: "docs", href: "/docs/cli/docs" },
      { title: "init", href: "/docs/cli/init" },
      { title: "Configuration", href: "/docs/cli/configuration" },
    ],
  },
  {
    title: "Adapters",
    items: [
      { title: "Node", href: "/docs/node" },
      { title: "Vite", href: "/docs/vite" },
      { title: "Next.js", href: "/docs/nextjs" },
    ],
  },
  {
    title: "Migration",
    items: [
      { title: "From t3-env", href: "/docs/migration/from-t3-env" },
      { title: "From envalid", href: "/docs/migration/from-envalid" },
      { title: "From dotenv", href: "/docs/migration/from-dotenv" },
    ],
  },
]

const pkgPath = (sub: string) =>
  `https://github.com/ctrotech-tutor/ctroenv/tree/main/packages/${sub}`

export const packages = [
  { name: "@ctroenv/core", npm: "https://www.npmjs.com/package/@ctroenv/core", github: pkgPath("core") },
  { name: "@ctroenv/cli", npm: "https://www.npmjs.com/package/@ctroenv/cli", github: pkgPath("cli") },
  { name: "@ctroenv/node", npm: "https://www.npmjs.com/package/@ctroenv/node", github: pkgPath("node") },
  { name: "@ctroenv/vite", npm: "https://www.npmjs.com/package/@ctroenv/vite", github: pkgPath("vite") },
  { name: "@ctroenv/nextjs", npm: "https://www.npmjs.com/package/@ctroenv/nextjs", github: pkgPath("nextjs") },
  { name: "@ctroenv/zod", npm: "https://www.npmjs.com/package/@ctroenv/zod", github: pkgPath("zod") },
]

export const socialLinks = {
  github: "https://github.com/ctrotech-tutor/ctroenv",
  twitter: "https://twitter.com/ctrotechDev",
  youtube: "https://youtube.com/@ctrotech",
  email: "mailto:ctrotech.devs@gmail.com",
  npm: "https://www.npmjs.com/org/ctroenv",
}

export const navLinks = [
  { title: "Docs", href: "/docs/getting-started" },
  { title: "API", href: "/docs/core/define-env" },
  { title: "Blog", href: "/blog" },
]
