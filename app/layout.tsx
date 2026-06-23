import { Providers } from "@/components/providers"
import { Inter, JetBrains_Mono } from "next/font/google"
import type { ReactNode } from "react"
import "./globals.css"

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: {
    template: "%s | ctroenv",
    default: "ctroenv — Type-Safe Environment Variables for TypeScript",
  },
  description:
    "Define, validate, and infer types for environment variables with zero runtime dependencies. Beautiful error messages, framework adapters, and CLI tooling.",
  metadataBase: new URL("https://ctroenv.vercel.app"),
  openGraph: {
    siteName: "ctroenv",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og?title=ctroenv&description=Type-Safe Environment Variables for TypeScript",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ctroenv",
    description:
      "Define, validate, and infer types for environment variables with zero runtime dependencies.",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ctroenv",
              url: "https://ctroenv.vercel.app",
              description:
                "Define, validate, and infer types for environment variables with zero runtime dependencies.",
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
