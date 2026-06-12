import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Logo size={16} />
            <span>CtroEnv — Type-safe environment variables for TypeScript</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/ctrotech-tutor/ctroenv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://npmjs.com/package/@ctroenv/core"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              npm
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground sm:text-left">
          Built with Next.js, shadcn/ui, and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
