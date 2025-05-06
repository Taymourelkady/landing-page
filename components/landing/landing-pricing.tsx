"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Database } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function LandingPricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isYearly, setIsYearly] = useState(false)

  // Define the plans with both monthly and yearly pricing
  const plans = [
    {
      name: "Starter",
      originalPrice: {
        monthly: "$120",
        yearly: "$1,200",
      },
      price: {
        monthly: "$39.99",
        yearly: "$399.90",
      },
      discount: {
        monthly: "67%",
        yearly: "67%",
      },
      period: {
        monthly: "month",
        yearly: "year",
      },
      specialOffer: "for the first 3 months",
      updateFrequency: "Daily Updates",
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
      originalPrice: {
        monthly: "$900",
        yearly: "$9,000",
      },
      price: {
        monthly: "$500",
        yearly: "$5,000",
      },
      discount: {
        monthly: "44%",
        yearly: "44%",
      },
      period: {
        monthly: "month",
        yearly: "year",
      },
      updateFrequency: "Hourly Updates",
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
      originalPrice: {
        monthly: "$1,900",
        yearly: "$19,000",
      },
      price: {
        monthly: "$1,400",
        yearly: "$14,000",
      },
      discount: {
        monthly: "26%",
        yearly: "26%",
      },
      period: {
        monthly: "month",
        yearly: "year",
      },
      updateFrequency: "Live Updates",
      features: [
        "Unlimited data sources",
        "Unlimited workspaces/dashboards",
        "Advanced alerting & automation",
        "Growth product manager",
        "Data profiling",
      ],
    },
  ]

  // Calculate savings for yearly plans
  const calculateYearlySavings = (plan) => {
    const monthlyPrice = Number.parseInt(plan.price.monthly.replace(/[^0-9.]/g, ""))
    const yearlyPrice = Number.parseInt(plan.price.yearly.replace(/[^0-9.]/g, ""))
    const monthlyCost = monthlyPrice * 12
    return Math.round(((monthlyCost - yearlyPrice) / monthlyCost) * 100)
  }

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

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? "text-white" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
              style={{ backgroundColor: isYearly ? "#10b981" : "#374151" }}
              aria-checked={isYearly}
              role="switch"
            >
              <span
                className={`${
                  isYearly ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
            <div className="flex flex-col items-start">
              <span className={`text-sm font-medium ${isYearly ? "text-white" : "text-gray-400"}`}>Yearly</span>
              <span className="text-xs text-emerald-400">Save up to 20%</span>
            </div>
          </div>
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
                      <span className="text-4xl font-bold text-emerald-500">
                        {isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-400">/{isYearly ? plan.period.yearly : plan.period.monthly}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400 line-through">
                        {isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly}/
                        {isYearly ? plan.period.yearly : plan.period.monthly}
                      </span>
                      <span className="text-xs font-medium bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                        Save {isYearly ? plan.discount.yearly : plan.discount.monthly}
                      </span>
                    </div>
                    {isYearly && (
                      <div className="mt-1 text-xs text-emerald-400">
                        {calculateYearlySavings(plan)}% savings vs monthly billing
                      </div>
                    )}
                    {index === 0 && <div className="mt-1 text-xs text-amber-400">{plan.specialOffer}</div>}
                  </div>

                  {/* Database update frequency */}
                  <div className="mb-4 flex items-center gap-2 bg-emerald-500/10 px-3 py-2 rounded-md">
                    <Database className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-emerald-400 font-medium">{plan.updateFrequency}</span>
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
                      Start Free Trial
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
