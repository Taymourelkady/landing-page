import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101827] via-emerald-500/5 to-[#101827] z-0" />

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
            <Link href="#use-cases">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base px-8 border-gray-600 text-white hover:bg-gray-800"
              >
                Explore Use Cases
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
