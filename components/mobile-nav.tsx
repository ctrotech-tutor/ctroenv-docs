"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, BookOpen, Album } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

const docLinks = [
  { href: "/docs/getting-started", label: "Getting Started" },
  { href: "/docs/core/define-env", label: "Core API" },
  { href: "/docs/cli", label: "CLI" },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Toggle Menu"
          className="data-[state=open]:bg-accent/50 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 hover:bg-accent hover:text-accent-foreground p-1.5 group [&_svg]:size-5.5"
        >
          <ChevronDown className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
          Documentation
        </DropdownMenuLabel>
        {docLinks.map((link) => {
          const active = pathname.startsWith(link.href)
          return (
            <DropdownMenuItem key={link.href} asChild>
              <Link
                href={link.href}
                className={active ? "font-medium text-primary" : ""}
              >
                <BookOpen className="size-4" />
                {link.label}
              </Link>
            </DropdownMenuItem>
          )
        })}

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/blog">
            <Album className="size-4" />
            Blog
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <div className="flex items-center gap-2 px-2 py-1.5">
          <Link
            href="https://github.com/ctrotech-tutor/ctroenv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
            className="inline-flex items-center justify-center rounded-md p-1.5 transition-colors hover:bg-accent hover:text-accent-foreground [&_svg]:size-4"
          >
            <svg role="img" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-5.373 0-9.75 4.373-9.75 9.75 0 4.308 2.793 7.967 6.667 9.258.487.092.667-.21.667-.469v-1.656c-2.713.59-3.286-1.31-3.286-1.31-.444-1.13-1.083-1.43-1.083-1.43-.885-.606.066-.594.066-.594.979.07 1.495 1.005 1.495 1.005.87 1.49 2.282 1.06 2.837.81.088-.63.34-1.06.62-1.304-2.166-.246-4.444-1.083-4.444-4.82 0-1.065.38-1.935 1.005-2.617-.1-.246-.435-1.24.095-2.584 0 0 .82-.263 2.685 1.0.78-.217 1.617-.326 2.447-.326.83 0 1.667.109 2.448.326 1.865-1.264 2.685-1.0 2.685-1.0.53 1.344.195 2.338.095 2.584.625.682 1.005 1.552 1.005 2.617 0 3.745-2.28 4.572-4.453 4.813.35.303.666.899.666 1.812v2.688c0 .26.18.564.674.467 3.866-1.291 6.656-4.95 6.656-9.258 0-5.377-4.377-9.75-9.75-9.75z" />
            </svg>
          </Link>

          <div className="flex-1" />

          <ThemeToggle />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
