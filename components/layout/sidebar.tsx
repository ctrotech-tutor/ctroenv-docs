"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { sidebarSections } from "@/lib/navigation"

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex flex-col gap-4 px-3", className)}>
      {sidebarSections.map((section) => {
        const isActive = section.items.some(
          (item) => pathname === item.href
        )
        return (
          <div key={section.title}>
            <h4
              className={cn(
                "mb-1 px-3 text-xs font-semibold uppercase tracking-wider",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {section.title}
            </h4>
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-1.5 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </nav>
  )
}
