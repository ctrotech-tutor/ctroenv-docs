import type { MDXComponents } from "mdx/types"
import type { ReactNode } from "react"
import Link from "next/link"
import { CopyButton } from "@/components/copy-button"

function extractText(node: ReactNode): string {
  if (typeof node === "string") return node
  if (typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(extractText).join("")
  if (node && typeof node === "object" && "props" in node) {
    return extractText((node as { props: { children: ReactNode } }).props.children)
  }
  return ""
}

const components: MDXComponents = {
  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  },
  pre: ({ children, ...props }) => {
    const code = extractText(children)
    return (
      <div className="group relative">
        <pre {...props}>{children}</pre>
        <CopyButton text={code} />
      </div>
    )
  },
}

export function useMDXComponents(): MDXComponents {
  return components
}
