"use client"

import { useState, useMemo } from "react"
import { Menu, ListTree } from "lucide-react"
import { usePathname } from "next/navigation"
import { useScrollDirection } from "@/lib/hooks"
import { cn } from "@/lib/utils"
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from "@/components/layout/sidebar"
import { OnThisPage } from "@/components/on-this-page"
import type { TocItem } from "@/lib/mdx"

interface StickyMobileBarProps {
  toc: TocItem[]
}

export function StickyMobileBar({ toc }: StickyMobileBarProps) {
  const pathname = usePathname()
  const { visible: navbarVisible } = useScrollDirection()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [tocOpen, setTocOpen] = useState(false)

  const pageTitle = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean)
    return segments[segments.length - 1]?.replace(/-/g, " ") ?? ""
  }, [pathname])

  return (
    <div
      key={pathname}
      className={cn(
        "sticky z-40 flex items-center gap-2 border-b border-border/50 bg-background/80 px-4 py-3 md:hidden transition-transform duration-200",
        navbarVisible ? "translate-y-0" : "-translate-y-14"
      )}
    >
      <Drawer open={sidebarOpen} onOpenChange={setSidebarOpen} direction="left">
        <DrawerTrigger asChild>
          <button
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="size-4" />
            <span>Menu</span>
          </button>
        </DrawerTrigger>
        <DrawerContent className="p-0">
          <DrawerTitle className="sr-only">Navigation</DrawerTitle>
          <ScrollArea className="h-dvh">
            <Sidebar className="w-full border-r-0 pt-4 pb-8" />
          </ScrollArea>
        </DrawerContent>
      </Drawer>

      <span className="flex-1 text-center text-xs font-semibold text-muted-foreground truncate px-2">
        {pageTitle}
      </span>

      <Drawer open={tocOpen} onOpenChange={setTocOpen} direction="right">
        <DrawerTrigger asChild>
          <button
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open table of contents"
          >
            <span>On this page</span>
            <ListTree className="size-4" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="p-0">
          <DrawerTitle className="sr-only">Table of Contents</DrawerTitle>
          <h4 className="sr-only">Table of Contents</h4>
          <ScrollArea className="h-dvh">
            <div className="p-4">
              <OnThisPage items={toc} />
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
