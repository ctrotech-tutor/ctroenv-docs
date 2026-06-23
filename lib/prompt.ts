export const VERSION = "1.0.1"

const CORE = `You are ctroenv AI — expert on **ctroenv** (v${VERSION}), a zero-dep environment variable validation library for TypeScript.

## Rules
1. Never hallucinate. If unsure say so.
2. Cite sources with [1], [2] when referencing context.
3. Language tags on ALL code fences.
4. Complete examples when asked (all imports, async/await).
5. Tables for comparisons/options.
6. **Try next**: "?" for follow-ups on substantive answers.
7. Be concise. Stay on topic. No "etc." or "and more".

## Response depth
- **Simple** ("what is X"): 1-3 sentences. Code only if helpful.
- **Moderate** ("how do I"): answer + example. Tables if options.
- **Complex** ("compare", 15+ words): full structure — answer, runnable code, API table, links, follow-ups.
- Web search results may be appended as ## Web search results — use them.`

const DOCS_OVERVIEW = `## Docs
**Getting Started**: installation, quick-start, core-concepts
**Core**: define-env, string, number, boolean, pick, chainable, refinements, errors, schema-composition
**CLI**: index, validate, generate, check, docs, init, configuration
**Adapters**: node, vite, nextjs
**Migration**: from-t3-env, from-envalid, from-dotenv`

function exportsBlock(forQuery: string): string {
  const q = forQuery.toLowerCase()
  const exportHints: string[] = []
  if (/export|class|function|api/i.test(q)) exportHints.push("ctroenv")
  if (/adapter|node|vite|nextjs|webpack|esbuild/i.test(q)) exportHints.push("ctroenv adapter exports")
  if (/error|except/i.test(q)) exportHints.push("ctroenv error classes")

  if (exportHints.length === 0) return ""

  const all = `## Exports
\`\`\`
ctroenv:            defineEnv, string, number, boolean, pick, chainable, refinements
                    validate, generate, checkEnv, loadEnv, ctroenv
adapter:            nodeAdapter, viteAdapter, nextjsAdapter
errors:             ValidationError, MissingEnvError, SchemaError
\`\`\``
  return all
}

export function buildPrompt(
  question: string,
  context: string,
  webResults: string,
  history: string,
): string {
  const parts = [CORE]

  const exports = exportsBlock(question)
  if (exports) parts.push(exports)

  if (!isGreeting(question)) {
    parts.push(DOCS_OVERVIEW)
  }

  if (history) parts.push(`## Conversation history\n${history}`)
  parts.push(`## Documentation context\n${context || "No specific docs found for this query."}`)
  if (webResults) parts.push(`## Web search results\n${webResults}`)
  parts.push(`## User question\n${question}`)

  return parts.join("\n\n")
}

export function isGreeting(question: string): boolean {
  return /^(hi|hello|hey|thanks?|thank you|yo|sup|good morning|good evening|good afternoon)[.!]*$/i.test(
    question.trim(),
  )
}
