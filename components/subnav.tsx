"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, PanelLeft } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { MobileSidebar } from "@/components/layout/mobile-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSearch } from "@/lib/search-context"
import type { SidebarGroup } from "@/lib/sidebar"

export function Subnav({ groups }: { groups: SidebarGroup[] }) {
  const { open } = useSearch()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      id="nd-subnav"
      data-transparent="false"
      className="[grid-area:header] sticky top-0 z-30 flex items-center ps-4 pe-2.5 border-b transition-colors backdrop-blur-sm h-14 bg-background/80 md:hidden"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2.5 font-semibold me-auto"
      >
        <span className="text-base font-semibold">CtroEnv</span>
      </Link>

      <div className="flex-1" />

      <button
        type="button"
        data-search=""
        aria-label="Open Search"
        onClick={open}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground [&_svg]:size-4.5 p-2"
      >
        <Search />
      </button>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <button
            aria-label="Open Sidebar"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground [&_svg]:size-4.5 p-2"
          >
            <PanelLeft />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[85%] max-w-[380px] p-0 text-[0.9375rem] flex flex-col" showCloseButton={false}>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <div className="flex flex-col gap-3 p-4 pb-2 shrink-0">
            <div className="flex text-muted-foreground items-center gap-1.5">
              <div className="flex flex-1">
                <a
                  href="https://github.com/ctrotech-tutor/ctroenv"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground [&_svg]:size-4.5 p-2"
                  aria-label="github"
                  data-active="false"
                >
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-5.373 0-9.75 4.373-9.75 9.75 0 4.308 2.793 7.967 6.667 9.258.487.092.667-.21.667-.469v-1.656c-2.713.59-3.286-1.31-3.286-1.31-.444-1.13-1.083-1.43-1.083-1.43-.885-.606.066-.594.066-.594.979.07 1.495 1.005 1.495 1.005.87 1.49 2.282 1.06 2.837.81.088-.63.34-1.06.62-1.304-2.166-.246-4.444-1.083-4.444-4.82 0-1.065.38-1.935 1.005-2.617-.1-.246-.435-1.24.095-2.584 0 0 .82-.263 2.685 1.0.78-.217 1.617-.326 2.447-.326.83 0 1.667.109 2.448.326 1.865-1.264 2.685-1.0 2.685-1.0.53 1.344.195 2.338.095 2.584.625.682 1.005 1.552 1.005 2.617 0 3.745-2.28 4.572-4.453 4.813.35.303.666.899.666 1.812v2.688c0 .26.18.564.674.467 3.866-1.291 6.656-4.95 6.656-9.258 0-5.377-4.377-9.75-9.75-9.75z" />
                  </svg>
                </a>
              </div>
              <ThemeToggle />
              <SheetClose asChild>
                <button
                  aria-label="Close Sidebar"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground [&_svg]:size-4.5 p-2"
                >
                  <PanelLeft />
                </button>
              </SheetClose>
            </div>
          </div>
          <MobileSidebar groups={groups} onClose={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>
    </header>
  )
}
