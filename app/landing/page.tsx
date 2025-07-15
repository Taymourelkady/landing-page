"use client"

import { useEffect } from "react"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingHero } from "@/components/landing/landing-hero"
import { LandingFeatures } from "@/components/landing/landing-features"
import { LandingDemo } from "@/components/landing/landing-demo"
import { LandingPricing } from "@/components/landing/landing-pricing"
import { LandingCTA } from "@/components/landing/landing-cta"
import { LandingFooter } from "@/components/landing/landing-footer"
import { PageTransition } from "@/components/ui/page-transition"
import { DebugSectionIds } from "@/components/debug-section-ids"

export default function LandingPage() {
  // Scroll to top on initial page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }, [])

  // Handle hash navigation on initial page load
  useEffect(() => {
    // Function to scroll to the element with the given ID
    const scrollToElement = (id: string) => {
      const element = document.getElementById(id)
      if (element) {
        // Get header height for offset
        const header = document.querySelector("header")
        const headerHeight = header ? header.getBoundingClientRect().height : 0

        // Calculate position
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerHeight - 20

        // Scroll
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }

    // Handle initial hash on page load
    const handleInitialHash = () => {
      const hash = window.location.hash
      if (hash) {
        // Remove the # character
        const id = hash.substring(1)
        // Wait for page to fully render
        setTimeout(() => scrollToElement(id), 500)
      }
    }

    // Initial load
    handleInitialHash()

    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const id = hash.substring(1)
        scrollToElement(id)
      }
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#101827]">
      <LandingHeader />
      <PageTransition>
        <LandingHero />
        <LandingFeatures />
        <LandingDemo />
        <LandingPricing />
        <LandingCTA />
      </PageTransition>
      {process.env.NODE_ENV === "development" && <DebugSectionIds />}
    </div>
  )
}
