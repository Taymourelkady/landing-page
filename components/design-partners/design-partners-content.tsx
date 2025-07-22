"use client"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  {
    number: 1,
    title: "Early Access",
    description: "Early access to all features before general release",
    width: "w-32",
  },
  {
    number: 2,
    title: "Money-back guarantee",
    description: "3 month money back guarantee",
    width: "w-48",
  },
  {
    number: 3,
    title: "Discount",
    description: "A 30% discount for another 3 months",
    width: "w-64",
  },
  {
    number: 4,
    title: "Dedicated Support",
    description: "Dedicated support, onboarding & setup",
    width: "w-80",
  },
  {
    number: 5,
    title: "Product Influence",
    description: "Direct influence on our product roadmap",
    width: "w-96",
  },
]

export function DesignPartnersContent() {
  return (
    <div className="min-h-screen bg-[#101827] text-white w-full overflow-x-hidden">
      <LandingHeader />

      {/* CTA Button Section */}
      <div className="bg-[#101827] py-8 border-b border-gray-700 w-full overflow-x-hidden">
        <div className="container mx-auto px-2 sm:px-4 text-center w-full">
          <Link href="/contact?interest=design_partner" className="block w-full max-w-xs mx-auto">
            <Button className="w-full max-w-xs mx-auto bg-treeo-500 hover:bg-treeo-600 text-white font-semibold px-4 py-3 text-base sm:text-lg">
              Join our design partner program waitlist
            </Button>
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">Join Our Design Partner Program</h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Partner with us to shape the future of Treeo while enjoying exclusive benefits
          </p>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.number} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                {/* Number Box */}
                <div
                  className={`w-16 h-16 sm:${benefit.width} sm:h-20 bg-treeo-500 rounded-lg flex items-center justify-center flex-shrink-0 mb-2 sm:mb-0`}
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{benefit.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{benefit.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  )
}
