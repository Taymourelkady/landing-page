"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"

export function LandingCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#101827]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101827] via-treeo-500/5 to-[#101827] z-0" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-treeo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <MessageSquare className="h-12 w-12 text-treeo-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Data Experience?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading companies that are using Treeo to make data accessible to everyone in their organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gap-2 text-base px-8 bg-treeo-500 hover:bg-treeo-600">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
