import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Providers } from "@/components/providers"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s — CtroEnv",
    default: "CtroEnv — Type-Safe Environment Variables for TypeScript",
  },
  description:
    "Define, validate, and infer types for environment variables with zero runtime dependencies. CtroEnv gives you beautiful error messages, framework adapters, and CLI tooling.",
  metadataBase: new URL("https://ctroenv.vercel.app"),
  openGraph: {
    title: "CtroEnv — Type-Safe Environment Variables",
    description:
      "Define, validate, and infer types for environment variables with zero runtime dependencies.",
    siteName: "CtroEnv",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CtroEnv — Type-Safe Environment Variables",
    description:
      "Define, validate, and infer types for environment variables with zero runtime dependencies.",
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1">{children}</main>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
