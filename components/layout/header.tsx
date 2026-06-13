"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import { SearchDialog } from "@/components/search-dialog"
import { cn } from "@/lib/utils"
import { useScrollDirection } from "@/lib/hooks"
import { usePathname } from "next/navigation"
import { Menu, Moon, Sun, ExternalLink } from "lucide-react"
import { packages, socialLinks, navLinks } from "@/lib/navigation"

export function Header() {
  const { theme, setTheme } = useTheme()
  const { visible } = useScrollDirection()
  const pathname = usePathname()
  const isDocsPage = pathname.startsWith("/docs")

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm transition-transform duration-200",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold shrink-0">
          <Logo size={24} />
          <span className="hidden sm:inline">CtroEnv</span>
        </Link>

        <NavigationMenu className="hidden md:flex ml-6">
          <NavigationMenuList>
            {navLinks.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus:bg-accent focus:text-accent-foreground focus:outline-none",
                    "disabled:pointer-events-none disabled:opacity-50"
                  )}
                >
                  {item.title}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end gap-1.5">
          <SearchDialog />

          <div className="relative group hidden md:block">
            <Button variant="ghost" size="icon" aria-label="Packages">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </Button>
            <div className="absolute right-0 top-full mt-1 w-64 rounded-lg border border-border bg-popover p-1.5 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="text-xs font-medium text-muted-foreground px-2 py-1.5">
                Packages
              </div>
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="flex items-center gap-1 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <a
                    href={pkg.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 truncate"
                  >
                    {pkg.name}
                  </a>
                  <div className="flex gap-0.5 shrink-0">
                    <a
                      href={pkg.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-muted-foreground/50 hover:text-foreground transition-colors"
                      aria-label={`${pkg.name} on npm`}
                    >
                      <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 7.334v8h6.666v1.332H12v-1.332h12V7.334H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667H6.666v5.331zm4 0v1.336H8.001V8.667h2.665v5.332zm7.331 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-1.332V8.667h6.663v5.331z" />
                      </svg>
                    </a>
                    <a
                      href={pkg.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-muted-foreground/50 hover:text-foreground transition-colors"
                      aria-label={`${pkg.name} on GitHub`}
                    >
                      <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
              <div className="mt-1.5 pt-1.5 border-t border-border/50">
                <a
                  href={socialLinks.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12V7.334H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667H6.666v5.331zm4 0v1.336H8.001V8.667h2.665v5.332zm7.331 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-1.332V8.667h6.663v5.331z" />
                  </svg>
                  View all @ctroenv packages
                  <ExternalLink className="size-3 ml-auto" />
                </a>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="relative"
          >
            <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {!isDocsPage && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <Logo size={20} />
                      CtroEnv
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <Separator className="my-4" />
                <nav className="flex flex-col gap-2">
                  {navLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Separator className="my-2" />
                  <div className="text-xs font-medium text-muted-foreground px-3 py-1">
                    Packages
                  </div>
                  {packages.map((pkg) => (
                    <div key={pkg.name} className="flex items-center gap-1 px-3 py-1.5">
                      <span className="flex-1 text-sm">{pkg.name}</span>
                      <div className="flex gap-1">
                        <a
                          href={pkg.npm}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 text-muted-foreground/50 hover:text-foreground"
                          aria-label={`${pkg.name} on npm`}
                        >
                          <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M0 7.334v8h6.666v1.332H12v-1.332h12V7.334H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667H6.666v5.331zm4 0v1.336H8.001V8.667h2.665v5.332zm7.331 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-1.332V8.667h6.663v5.331z" />
                          </svg>
                        </a>
                        <a
                          href={pkg.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 text-muted-foreground/50 hover:text-foreground"
                          aria-label={`${pkg.name} on GitHub`}
                        >
                          <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
