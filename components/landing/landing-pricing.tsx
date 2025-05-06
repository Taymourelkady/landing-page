"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function LandingPricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const plans = [
    {
      name: "Starter",
      originalPrice: "$120",
      price: "$80",
      discount: "33%",
      period: "month",
      features: [
        "1 data source",
        "Up to 5 team members",
        "Unlimited queries",
        "4 saved dashboard",
        "Unlimited metrics configuration",
      ],
    },
    {
      name: "Growth",
      originalPrice: "$900",
      price: "$500",
      discount: "44%",
      period: "month",
      features: [
        "Up to 5 data sources",
        "Unlimited queries",
        "8 saved dashboards/reports",
        "Unlimited metrics configuration",
        "Unlimited users",
        "Growth product manager",
      ],
    },
    {
      name: "Pro",
      originalPrice: "$1200",
      price: "$900",
      discount: "25%",
      period: "month",
      features: [
        "Unlimited data sources",
        "Unlimited workspaces/dashboards",
        "Advanced alerting & automation",
        "Growth product manager",
        "Data profiling",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-[#0c1420] scroll-mt-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 text-emerald-500" />
            <span className="text-emerald-400">Limited Time Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose the plan that's right for your business, with no hidden fees or surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="w-full"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`flex flex-col w-full bg-[#1A1F2E] border-gray-700 transition-all duration-300 relative ${
                  index === 1 ? "border-emerald-500 shadow-lg shadow-emerald-500/10" : ""
                } ${hoveredCard === index ? "transform scale-105 shadow-xl border-emerald-500/70 z-10" : ""}`}
              >
                {/* Badges attached to the card */}
                {index === 1 && (
                  <>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                    <div className="absolute -top-3 right-4 z-20 bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Best Deal
                    </div>
                  </>
                )}

                <CardHeader className={`${index === 1 ? "pt-6" : ""}`}>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-4xl font-bold text-emerald-500">{plan.price}</span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400 line-through">
                        {plan.originalPrice}/{plan.period}
                      </span>
                      <span className="text-xs font-medium bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                        Save {plan.discount}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button
                      variant={index === 1 ? "default" : "outline"}
                      className={`w-full transition-all duration-300 ${
                        index === 1
                          ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                          : hoveredCard === index
                            ? "border-emerald-500 text-emerald-500 hover:bg-emerald-500/10"
                            : "border-gray-600 text-white hover:bg-gray-800"
                      }`}
                    >
                      Start Free trail
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-300">
          <p>All plans include a 14-day free trial. No credit card required.</p>
          <p className="mt-2">
            Need a custom plan?{" "}
            <Link href="/contact" className="text-emerald-500 hover:underline">
              Contact us
            </Link>{" "}
            for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
