import { LandingHeader } from "@/components/landing/landing-header"
import { LandingHero } from "@/components/landing/landing-hero"
import { LandingFeatures } from "@/components/landing/landing-features"
import { LandingDemo } from "@/components/landing/landing-demo"
import { LandingTestimonials } from "@/components/landing/landing-testimonials"
import { LandingPricing } from "@/components/landing/landing-pricing"
import { LandingCTA } from "@/components/landing/landing-cta"
import { LandingFooter } from "@/components/landing/landing-footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <LandingHero />
      <LandingFeatures />
      <LandingDemo />
      <LandingTestimonials />
      <LandingPricing />
      <LandingCTA />
      <LandingFooter />
    </div>
  )
}
