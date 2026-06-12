"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface SidebarItem {
  title: string
  href?: string
  items?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "/docs/getting-started" },
      { title: "Quick Start", href: "/docs/getting-started/quick-start" },
      { title: "Core Concepts", href: "/docs/getting-started/core-concepts" },
    ],
  },
  {
    title: "Core",
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

function SidebarNavItem({ item, pathname }: { item: SidebarItem; pathname: string }) {
  if (item.href) {
    return (
      <Link
        href={item.href}
        className={cn(
          "block rounded-md px-3 py-1.5 text-sm transition-colors",
          pathname === item.href
            ? "bg-primary/10 font-medium text-primary"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        )}
      >
        {item.title}
      </Link>
    )
  }

  if (item.items) {
    const isActive = item.items.some((sub) => pathname === sub.href)
    return (
      <Accordion type="single" collapsible defaultValue={isActive ? item.title : undefined}>
        <AccordionItem value={item.title} className="border-none">
          <AccordionTrigger className="py-1.5 text-sm font-medium hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="ml-2 flex flex-col gap-0.5 border-l border-border pl-3">
              {item.items.map((sub) => (
                <SidebarNavItem key={sub.href || sub.title} item={sub} pathname={pathname} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }

  return null
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 shrink-0 md:block">
      <div className="fixed top-14 bottom-0 w-64 border-r border-border">
        <ScrollArea className="h-full p-4">
          <nav className="flex flex-col gap-1">
            {sidebarItems.map((item) => (
              <SidebarNavItem key={item.title} item={item} pathname={pathname} />
            ))}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  )
}
