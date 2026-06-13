"use client"

import { useState } from "react"

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={copy}
      className="absolute right-2 top-2 z-10 rounded-md border border-border bg-background/80 px-2 py-1 text-xs text-muted-foreground opacity-0 backdrop-blur-sm transition-opacity hover:bg-background hover:text-foreground group-hover:opacity-100"
      aria-label={copied ? "Copied" : "Copy code"}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  )
}
