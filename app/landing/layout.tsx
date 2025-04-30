import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Treeo - AI-Powered Analytics Assistant",
  description: "Chat-based data analyst for your business",
  metadataBase: new URL("https://treeo.ai"),
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
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="bg-background min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
