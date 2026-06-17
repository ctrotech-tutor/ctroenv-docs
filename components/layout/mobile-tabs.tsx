"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { House, BookOpen, Newspaper, SearchIcon } from "lucide-react"
import { useSearch } from "@/lib/search-context"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "home", label: "Home", href: "/", icon: House },
  { id: "docs", label: "Docs", href: "/docs/getting-started", icon: BookOpen },
  { id: "blog", label: "Blog", href: "/blog", icon: Newspaper },
  { id: "search", label: "Search", href: null as string | null, icon: SearchIcon },
] as const

export function MobileTabs() {
  const pathname = usePathname()
  const { setOpen: setSearchOpen } = useSearch()

  function isActive(tabId: string): boolean {
    switch (tabId) {
      case "home":
        return pathname === "/"
      case "docs":
        return pathname.startsWith("/docs")
      case "blog":
        return pathname.startsWith("/blog")
      default:
        return false
    }
  }

  function isOnTabSection(tabId: string): boolean {
    if (tabId === "docs") return pathname.startsWith("/docs")
    if (tabId === "blog") return pathname.startsWith("/blog")
    return false
  }

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-border/50 bg-background/85 backdrop-blur-lg"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center justify-around h-14">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const active = isActive(tab.id)

          if (tab.id === "search") {
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors text-muted-foreground/60 hover:text-muted-foreground"
                aria-label={tab.label}
              >
                <Icon className="size-5" />
                <span className="text-[10px] font-medium tracking-tight">
                  {tab.label}
                </span>
              </button>
            )
          }

          if (isOnTabSection(tab.id)) {
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground/60 hover:text-muted-foreground",
                )}
                aria-label={`${tab.label} (scroll to top)`}
              >
                <Icon className="size-5" />
                <span className="text-[10px] font-medium tracking-tight">
                  {tab.label}
                </span>
              </button>
            )
          }

          return (
            <Link
              key={tab.id}
              href={tab.href!}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors",
                active
                  ? "text-primary"
                  : "text-muted-foreground/60 hover:text-muted-foreground",
              )}
              aria-label={tab.label}
            >
              <Icon className="size-5" />
              <span className="text-[10px] font-medium tracking-tight">
                {tab.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
