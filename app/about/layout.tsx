import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { LandingFooter } from "@/components/landing/landing-footer"

export const metadata: Metadata = {
  title: "About Treeo - AI-Powered Analytics Assistant",
  description: "Learn about Treeo's mission to make data consistent and accessible for everyone",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="bg-[#101827] text-white min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
          <LandingFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
