import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutUseCases } from "@/components/about/about-use-cases"
import { AboutProcess } from "@/components/about/about-process"
import { AboutTeam } from "@/components/about/about-team"
import { AboutCTA } from "@/components/about/about-cta"
import { PageTransition } from "@/components/ui/page-transition"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#101827]">
      <LandingHeader />
      <PageTransition>
        <AboutHero />
        <AboutMission />
        <AboutProcess />
        <AboutUseCases />
        <AboutTeam />
        <AboutCTA />
      </PageTransition>
      <LandingFooter />
    </div>
  )
}
