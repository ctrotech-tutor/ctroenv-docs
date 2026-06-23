"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { useSearch } from "@/lib/search-context";

const navLinks = [
  {
    href: "/docs/getting-started",
    label: "Documentation",
  },
  {
    href: "/docs/core/define-env",
    label: "API",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const { open } = useSearch();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-(--fd-layout-width) items-center px-4">
        {/* LEFT */}
        <div className="flex min-w-0 items-center">
          {/* Brand */}
          <Link
            href="/"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl transition-opacity hover:opacity-90"
          >
            <div className="flex flex-col leading-none">
              <span className="text-[1rem] font-semibold tracking-[-0.04em] text-foreground">
                CtroEnv
              </span>
              <span className="hidden text-[11px] font-medium text-muted-foreground lg:block sr-only">
                Type-Safe Environment Variables
              </span>
            </div>
          </Link>

          {/* Nav */}
          <ul className="ml-8 hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);

              return (
                <li key={link.href} className="list-none">
                  <Link
                    href={link.href}
                    data-active={active}
                    className="relative inline-flex h-9 items-center rounded-lg px-3.5 text-sm font-medium text-muted-foreground transition-all hover:bg-accent/50 hover:text-foreground data-[active=true]:bg-accent/50 data-[active=true]:text-foreground data-[active=true]:shadow-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-2">
          {/* Search */}
          <button
            onClick={open}
            aria-label="Search"
            className="hidden lg:flex h-9 min-w-[250px] items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3 text-sm text-muted-foreground transition-all hover:bg-accent hover:text-foreground"
          >
            <Search className="size-4 shrink-0" />

            <span>Search documentation...</span>

            <div className="ml-auto flex gap-1">
              <kbd className="rounded-md border bg-background px-1.5 py-0.5 text-[11px]">
                Ctrl
              </kbd>

              <kbd className="rounded-md border bg-background px-1.5 py-0.5 text-[11px]">
                K
              </kbd>
            </div>
          </button>

          {/* Mobile Search */}
          <button
            onClick={open}
            aria-label="Open Search"
            className="lg:hidden inline-flex size-9 items-center justify-center rounded-md hover:bg-accent"
          >
            <Search className="size-4.5" />
          </button>

          <div className="md:hidden">
            <MobileNav />
          </div>

          <div className="hidden md:inline-flex">
            <ThemeToggle />
          </div>

          {/* GitHub */}
          <Link
            href="https://github.com/ctrotech-tutor/ctroenv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex size-9 items-center justify-center rounded-md transition-colors hover:bg-accent"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
              <path d="M12 .297c-5.373 0-9.75 4.373-9.75 9.75 0 4.308 2.793 7.967 6.667 9.258.487.092.667-.21.667-.469v-1.656c-2.713.59-3.286-1.31-3.286-1.31-.444-1.13-1.083-1.43-1.083-1.43-.885-.606.066-.594.066-.594.979.07 1.495 1.005 1.495 1.005.87 1.49 2.282 1.06 2.837.81.088-.63.34-1.06.62-1.304-2.166-.246-4.444-1.083-4.444-4.82 0-1.065.38-1.935 1.005-2.617-.1-.246-.435-1.24.095-2.584 0 0 .82-.263 2.685 1.0.78-.217 1.617-.326 2.447-.326.83 0 1.667.109 2.448.326 1.865-1.264 2.685-1.0 2.685-1.0.53 1.344.195 2.338.095 2.584.625.682 1.005 1.552 1.005 2.617 0 3.745-2.28 4.572-4.453 4.813.35.303.666.899.666 1.812v2.688c0 .26.18.564.674.467 3.866-1.291 6.656-4.95 6.656-9.258 0-5.377-4.377-9.75-9.75-9.75z" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
