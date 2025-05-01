import { LandingHeader } from "@/components/landing/landing-header"
import { LandingHero } from "@/components/landing/landing-hero"
import { LandingFeatures } from "@/components/landing/landing-features"
import { LandingDemo } from "@/components/landing/landing-demo"
import { LandingPricing } from "@/components/landing/landing-pricing"
import { LandingCTA } from "@/components/landing/landing-cta"
import { LandingFooter } from "@/components/landing/landing-footer"
import { PageTransition } from "@/components/ui/page-transition"

export default function LandingPage() {
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
      <LandingFooter />
    </div>
  )
}
