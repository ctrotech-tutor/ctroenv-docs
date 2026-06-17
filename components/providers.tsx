"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SearchProvider } from "@/lib/search-context"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TooltipProvider>
        <SearchProvider>{children}</SearchProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}
