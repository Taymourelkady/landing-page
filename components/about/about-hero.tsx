"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"
import { useState } from "react"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"

export function AboutHero() {
  const [isScrolling, setIsScrolling] = useState(false)

  // Function to handle smooth scrolling to the use cases section
  const scrollToUseCases = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Set scrolling state to true to trigger animation
    setIsScrolling(true)

    // Find the use cases section
    const useCasesSection = document.getElementById("use-cases")

    if (useCasesSection) {
      // Get header height for offset
      const header = document.querySelector("header")
      const headerHeight = header ? header.getBoundingClientRect().height : 0

      // Calculate position
      const elementPosition = useCasesSection.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight - 20

      // Scroll to the section with smooth behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Reset scrolling state after animation completes
      setTimeout(() => {
        setIsScrolling(false)
      }, 1000) // Approximately the duration of the scroll animation
    }
  }

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101827] via-emerald-500/5 to-[#101827] z-0" />

      {/* Scroll indicator */}
      <ScrollIndicator isVisible={isScrolling} targetId="use-cases" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium mb-6">
            <span className="text-emerald-400">Our Mission</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            Making Data <span className="text-emerald-500">Consistent</span> and{" "}
            <span className="text-emerald-500">Accessible</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're solving the data inconsistency problem that plagues modern companies, allowing teams to work with
            reliable data without constant validation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gap-2 text-base px-8 bg-emerald-500 hover:bg-emerald-600">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a
              href="#use-cases"
              onClick={scrollToUseCases}
              className={`inline-flex transition-all duration-300 ${isScrolling ? "transform translate-y-1" : ""}`}
            >
              <Button
                size="lg"
                variant="outline"
                className={`gap-2 text-base px-8 border-gray-600 text-white hover:bg-gray-800 group transition-all duration-300 ${
                  isScrolling ? "bg-gray-800/50" : ""
                }`}
              >
                Explore Use Cases
                <ArrowDown
                  className={`h-4 w-4 transition-transform duration-500 ${
                    isScrolling ? "animate-bounce" : "group-hover:translate-y-1"
                  }`}
                />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
