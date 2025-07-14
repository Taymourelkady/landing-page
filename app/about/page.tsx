"use client"

import { useEffect } from "react"
import { AboutHeader } from "@/components/about/about-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutUseCases } from "@/components/about/about-use-cases"
import { AboutProcess } from "@/components/about/about-process"
import { AboutCTA } from "@/components/about/about-cta"
import { PageTransition } from "@/components/ui/page-transition"

export default function AboutPage() {
  // Scroll to top on initial page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#101827]">
      <AboutHeader />
      <PageTransition>
        <AboutHero />
        <AboutMission />
        <AboutProcess />
        <AboutUseCases />
        <AboutCTA />
      </PageTransition>
      {/* <LandingFooter /> Removed because it's now global */}
    </div>
  )
}
