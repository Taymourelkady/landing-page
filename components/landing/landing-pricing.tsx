"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Database, Info } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function LandingPricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isYearly, setIsYearly] = useState(false)
  const [showTooltip, setShowTooltip] = useState<number | null>(null)

  // Helper function to format price with thousand separators and optional decimal points
  const formatPrice = (price: number): string => {
    // Create formatter for the currency
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0, // Don't show decimal for whole numbers
      maximumFractionDigits: 2, // Show up to 2 decimal places when needed
    })

    return formatter.format(price).replace("$", "$") // Replace with $ to ensure consistent formatting
  }

  // Define the plans with both monthly and yearly pricing
  const plans = [
    {
      name: "Starter",
      standardMonthlyRate: 120,
      discountedMonthlyRate: 39.99,
      discountedMonths: 1,
      updateFrequency: "Daily Updates",
      features: [
        "1 data source",
        "Daily Data Capture",
        "Up to 50 team members",
        "10 saved dashboard",
        "Unlimited sheets",
        "Unlimited queries",
        "Unlimited metrics configuration",
      ],
    },
    {
      name: "Growth",
      standardMonthlyRate: 900,
      discountedMonthlyRate: 500,
      discountedMonths: 3,
      updateFrequency: "Hourly Updates",
      features: [
        "Up to 2 data sources",
        "Hourly Data Capture",
        "Unlimited saved dashboards",
        "Unlimited metrics configuration",
        "Unlimited queries",
        "Unlimited users",
        "Growth product manager",
      ],
    },
    {
      name: "Pro",
      standardMonthlyRate: 1900,
      discountedMonthlyRate: 1400,
      discountedMonths: 3,
      updateFrequency: "Live Updates",
      features: [
        "Unlimited data sources",
        "Live Data",
        "Unlimited saved dashboards",
        "Unlimited queries",
        "Unlimited users",
        "Advanced alerting & automation",
        "Growth product manager",
      ],
    },
  ]

  // Calculate monthly and yearly prices
  const calculatePrices = (plan) => {
    // Monthly display price is the discounted rate
    const monthlyPrice = plan.discountedMonthlyRate

    // Calculate discount percentage for monthly
    const monthlyDiscount = Math.round(
      ((plan.standardMonthlyRate - plan.discountedMonthlyRate) / plan.standardMonthlyRate) * 100,
    )

    // For yearly, calculate: (discounted months * discounted rate) + (10 - discounted months) * standard rate - 2 months free
    const discountedPortion = plan.discountedMonths * plan.discountedMonthlyRate
    const standardPortion = (10 - plan.discountedMonths) * plan.standardMonthlyRate
    const yearlyPrice = discountedPortion + standardPortion

    // Calculate yearly savings percentage compared to 12 months at standard rate
    const standardYearlyTotal = 12 * plan.standardMonthlyRate
    const yearlyDiscount = Math.round(((standardYearlyTotal - yearlyPrice) / standardYearlyTotal) * 100)

    return {
      monthly: {
        display: formatPrice(monthlyPrice),
        standard: formatPrice(plan.standardMonthlyRate),
        discount: `${monthlyDiscount}%`,
        period: "month",
        discountPeriod: plan.discountedMonths > 1 ? `first ${plan.discountedMonths} months` : "first month",
      },
      yearly: {
        display: formatPrice(yearlyPrice),
        standard: formatPrice(12 * plan.standardMonthlyRate),
        discount: `${yearlyDiscount}%`,
        period: "year",
        savings: Math.round((12 * plan.standardMonthlyRate - yearlyPrice) / plan.standardMonthlyRate),
      },
    }
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
              <span className="text-xs text-emerald-400">Save 2 months free</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const prices = calculatePrices(plan)
            const currentPricing = isYearly ? prices.yearly : prices.monthly

            return (
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
                        <span className="text-4xl font-bold text-emerald-500">{currentPricing.display}</span>
                        <span className="text-gray-400">/{currentPricing.period}</span>

                        {isYearly && (
                          <div
                            className="relative"
                            onMouseEnter={() => setShowTooltip(index)}
                            onMouseLeave={() => setShowTooltip(null)}
                          >
                            <Info className="h-4 w-4 text-gray-400 cursor-help" />
                            {showTooltip === index && (
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-3 bg-gray-800 text-white text-xs rounded-md shadow-lg w-64 z-50">
                                <p className="font-medium mb-1">Yearly price breakdown:</p>
                                <p>
                                  {plan.discountedMonths} {plan.discountedMonths > 1 ? "months" : "month"} at{" "}
                                  {formatPrice(plan.discountedMonthlyRate)}/month
                                </p>
                                <p>
                                  {10 - plan.discountedMonths} months at {formatPrice(plan.standardMonthlyRate)}/month
                                </p>
                                <p>2 months free (standard rate)</p>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 line-through">
                          {currentPricing.standard}/{currentPricing.period}
                        </span>
                        <span className="text-xs font-medium bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                          Save {currentPricing.discount}
                        </span>
                      </div>
                      {isYearly ? (
                        <div className="mt-1 text-xs text-emerald-400">
                          {currentPricing.savings} months free compared to monthly
                        </div>
                      ) : (
                        <div className="mt-1 text-xs text-amber-400">
                          For the {currentPricing.discountPeriod}, then {formatPrice(plan.standardMonthlyRate)}/month
                        </div>
                      )}
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
                    {/* Updated to open in new tab */}
                    <a href="https://app.treeo.ai" target="_blank" rel="noopener noreferrer" className="w-full">
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
                    </a>
                  </CardFooter>
                </Card>
              </div>
            )
          })}
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
