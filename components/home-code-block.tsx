import { codeToHtml } from "shiki"

const CODE = `import { defineEnv, string, number, pick } from "@ctroenv/core"

const env = defineEnv({
  DATABASE_URL: string().url(),
  PORT: number().port().default(3000),
  JWT_SECRET: string().secret(),
  NODE_ENV: pick(["dev", "staging", "prod"]),
})

// TypeScript infers:
//   env.DATABASE_URL → string
//   env.PORT → number
//   env.JWT_SECRET → string
//   env.NODE_ENV → "dev" | "staging" | "prod"`

export async function HomeCodeBlock() {
  const html = await codeToHtml(CODE, {
    lang: "ts",
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  })

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="border-b border-border bg-muted px-4 py-2 text-xs text-muted-foreground">
        env.ts
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
