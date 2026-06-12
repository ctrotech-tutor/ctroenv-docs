import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CtroEnv Documentation",
    short_name: "CtroEnv",
    description: "Type-safe environment variables for TypeScript",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4F46E5",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
