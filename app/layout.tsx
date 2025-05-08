import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { TransitionProvider } from "@/components/ui/transition-provider"
import { FaviconManager } from "@/components/ui/favicon-manager"
import "./globals.css"

export const metadata: Metadata = {
  title: "Treeo - AI-Powered Analytics Assistant",
  description: "Chat-based data analyst for your business",
  metadataBase: new URL("https://treeo.ai"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://treeo.ai",
    title: "Treeo - AI-Powered Analytics Assistant",
    description: "Chat-based data analyst for your business",
    siteName: "Treeo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treeo - AI-Powered Analytics Assistant",
    description: "Chat-based data analyst for your business",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="theme-color" content="#16A249" />
      </head>
      <body className="bg-[#101827] text-white min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <FaviconManager />
          <TransitionProvider>{children}</TransitionProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
