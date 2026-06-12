import type { MetadataRoute } from "next"

const baseUrl = "https://ctroenv.vercel.app"

const routes = [
  "",
  "/docs",
  "/docs/getting-started",
  "/docs/getting-started/quick-start",
  "/docs/getting-started/core-concepts",
  "/docs/core/define-env",
  "/docs/core/string",
  "/docs/core/number",
  "/docs/core/boolean",
  "/docs/core/pick",
  "/docs/core/chainable",
  "/docs/core/refinements",
  "/docs/core/errors",
  "/docs/cli",
  "/docs/cli/validate",
  "/docs/cli/generate",
  "/docs/cli/check",
  "/docs/cli/docs",
  "/docs/cli/init",
  "/docs/cli/configuration",
  "/docs/node",
  "/docs/vite",
  "/docs/nextjs",
  "/docs/migration/from-t3-env",
  "/docs/migration/from-envalid",
  "/docs/migration/from-dotenv",
  "/blog",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}
