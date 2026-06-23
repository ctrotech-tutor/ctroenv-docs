"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { SidebarGroup as SidebarGroupType } from "@/lib/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { useSearch } from "@/lib/search-context";
import { useSidebar } from "@/lib/sidebar-context";
import {
  ChevronDown,
  Search,
  Rocket,
  Database,
  Cable,
  Puzzle,
  Atom,
  BookOpen,
  Sparkles,
  ArrowRightLeft,
  GitPullRequest,
  PanelLeft,
  Terminal,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Database,
  Cable,
  Puzzle,
  Atom,
  BookOpen,
  Sparkles,
  ArrowRightLeft,
  GitPullRequest,
  Terminal,
};

export function SidebarGroup({
  group,
  pathname,
  onLinkClick,
}: {
  group: SidebarGroupType;
  pathname: string;
  onLinkClick?: () => void;
}) {
  const padding = "calc(2 * var(--spacing))";
  const [open, setOpen] = useState(
    group.items.some((item) => pathname === `/docs/${item.slug}`),
  );
  const isSingle = group.items.length === 1;
  const Icon = group.icon ? iconMap[group.icon] : undefined;

  if (isSingle) {
    const item = group.items[0]!;
    const isActive = pathname === `/docs/${item.slug}`;
    return (
      <Link
        href={`/docs/${item.slug}`}
        data-active={isActive ? "true" : "false"}
        onClick={onLinkClick}
        className="relative flex flex-row items-center gap-2 rounded-lg p-2 text-start text-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-accent/50 hover:text-accent-foreground/80 hover:transition-none data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:hover:transition-colors data-[active=true]:before:content-[''] data-[active=true]:before:bg-primary data-[active=true]:before:absolute data-[active=true]:before:w-px data-[active=true]:before:inset-y-2.5 data-[active=true]:before:inset-s-2.5"
        style={{ paddingInlineStart: padding }}
      >
        {Icon && <Icon />}
        {group.title}
      </Link>
    );
  }

  return (
    <div data-state={open ? "open" : "closed"}>
      <button
        type="button"
        aria-expanded={open}
        data-state={open ? "open" : "closed"}
        onClick={() => setOpen(!open)}
        className="relative flex w-full flex-row items-center gap-2 rounded-lg p-2 text-start text-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-accent/50 hover:text-accent-foreground/80"
        style={{ paddingInlineStart: padding }}
      >
        {Icon && <Icon />}
        {group.title}
        <ChevronDown
          className={cn(
            "ms-auto transition-transform",
            open ? "rotate-0" : "-rotate-90",
          )}
          data-icon="true"
        />
      </button>
      <div
        data-state={open ? "open" : "closed"}
        hidden={!open}
        className={cn(
          "overflow-hidden data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down relative before:content-[''] before:absolute before:w-px before:inset-y-1 before:bg-border before:inset-s-2.5",
        )}
      >
        <div className="flex flex-col gap-0.5 pt-0.5">
          {group.items.map((item) => {
            const isActive = pathname === `/docs/${item.slug}`;
            return (
              <Link
                key={item.slug}
                href={`/docs/${item.slug}`}
                data-active={isActive ? "true" : "false"}
                onClick={onLinkClick}
                className="relative flex flex-row items-center gap-2 rounded-lg p-2 text-start text-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-accent/50 hover:text-accent-foreground/80 hover:transition-none data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:hover:transition-colors data-[active=true]:before:content-[''] data-[active=true]:before:bg-primary data-[active=true]:before:absolute data-[active=true]:before:w-px data-[active=true]:before:inset-y-2.5 data-[active=true]:before:inset-s-2.5"
                style={{ paddingInlineStart: "calc(5 * var(--spacing))" }}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Sidebar({ groups }: { groups: SidebarGroupType[] }) {
  const pathname = usePathname();
  const { open: openSearch } = useSearch();
  const { collapsed, toggle } = useSidebar();

  return (
    <aside
      id="nd-sidebar"
      data-collapsed={collapsed ? "true" : "false"}
      data-hovered="false"
      className="flex flex-col w-full bg-card text-sm h-full duration-250"
    >
      <div className="flex flex-col gap-3 p-4 pb-2 shrink-0">
        <div className="flex items-start justify-between">
          <Link
            href="/"
            className="group me-auto inline-flex items-center gap-3 rounded-lg transition-opacity hover:opacity-90"
          >
            <div className="flex flex-col leading-none">
              <span className="text-[1rem] font-semibold tracking-[-0.03em] text-foreground">
                ctroenv
              </span>
              <span className="text-[11px] font-medium text-muted-foreground sr-only">
                Type-Safe Environment Variables
              </span>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Collapse Sidebar"
            data-collapsed={collapsed ? "true" : "false"}
            onClick={toggle}
            className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-4"
          >
            <PanelLeft />
          </button>
        </div>
        <button
          type="button"
          data-search-full=""
          onClick={openSearch}
          className="inline-flex items-center gap-2 rounded-lg border bg-secondary/50 p-1.5 ps-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <Search className="size-4" />
          Search
          <div className="ms-auto inline-flex gap-0.5">
            <kbd className="rounded-md border bg-background px-1.5 text-xs">
              Ctrl
            </kbd>
            <kbd className="rounded-md border bg-background px-1.5 text-xs">
              K
            </kbd>
          </div>
        </button>
      </div>

      <div
        className="overflow-hidden min-h-0 flex-1"
        style={{ position: "relative" }}
      >
        <style>{`
          [data-sidebar-viewport] {
            scrollbar-width: none;
            -ms-overflow-style: none;
            -webkit-overflow-scrolling: touch;
          }
          [data-sidebar-viewport]::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div
          data-sidebar-viewport=""
          className="size-full [&>*]:flex! [&>*]:flex-col! [&>*]:gap-0.5! p-4 overscroll-contain fd-mask-both"
          style={{ overflow: "hidden scroll" }}
        >
          <div style={{ minWidth: "100%" }}>
            {groups.map((group) => (
              <SidebarGroup
                key={group.title}
                group={group}
                pathname={pathname}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col p-4 pt-2 shrink-0">
        <div className="flex text-muted-foreground items-center border bg-secondary/50 p-0.5 pe-0 rounded-lg empty:hidden">
          <a
            href="https://github.com/ctrotech-tutor/ctroenv"
            rel="noreferrer noopener"
            target="_blank"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground p-1.5 [&_svg]:size-4.5"
            aria-label="github"
            data-active="false"
          >
            <svg role="img" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-5.373 0-9.75 4.373-9.75 9.75 0 4.308 2.793 7.967 6.667 9.258.487.092.667-.21.667-.469v-1.656c-2.713.59-3.286-1.31-3.286-1.31-.444-1.13-1.083-1.43-1.083-1.43-.885-.606.066-.594.066-.594.979.07 1.495 1.005 1.495 1.005.87 1.49 2.282 1.06 2.837.81.088-.63.34-1.06.62-1.304-2.166-.246-4.444-1.083-4.444-4.82 0-1.065.38-1.935 1.005-2.617-.1-.246-.435-1.24.095-2.584 0 0 .82-.263 2.685 1.0.78-.217 1.617-.326 2.447-.326.83 0 1.667.109 2.448.326 1.865-1.264 2.685-1.0 2.685-1.0.53 1.344.195 2.338.095 2.584.625.682 1.005 1.552 1.005 2.617 0 3.745-2.28 4.572-4.453 4.813.35.303.666.899.666 1.812v2.688c0 .26.18.564.674.467 3.866-1.291 6.656-4.95 6.656-9.258 0-5.377-4.377-9.75-9.75-9.75z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
