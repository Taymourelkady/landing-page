"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Database, Zap, Shield, Clock, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function LandingPricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isYearly, setIsYearly] = useState(false)

  // Toggle this to show/hide the blur overlay
  const showPricingBlur = true;

  // Helper function to format price
  const formatPrice = (price: number | string): string => {
    if (typeof price === "string") return price

    // Create formatter for the currency
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })

    return formatter.format(price)
  }

  // Define the plans with the new pricing structure
  const plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: "14-day trial converts here by default",
      badge: "Free Trial",
      badgeColor: "bg-blue-500",
      features: [
        "1 data source",
        "Daily updates",
        "3 dashboards",
        "Unlimited users",
        "Unlimited queries",
        "Unlimited metrics",
      ],
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      buttonText: "Join our design partner program",
      buttonVariant: "outline" as const,
      highlight: false,
    },
    {
      name: "Starter",
      monthlyPrice: 99,
      yearlyPrice: 948, // 99 * 12 - 2 months free = 99 * 10
      description: "For growing teams",
      badge: "Best Value",
      badgeColor: "bg-amber-500",
      features: [
        "2 data sources",
        "Daily updates",
        "15 dashboards",
        "Priority AI training",
        "Unlimited users",
        "Unlimited queries",
        "Email support",
      ],
      icon: <Clock className="h-10 w-10 text-treeo-500" />,
      buttonText: "Join our design partner program",
      buttonVariant: "default" as const,
      highlight: true,
    },
    {
      name: "Pro",
      monthlyPrice: 399,
      yearlyPrice: 3990, // 399 * 12 - 2 months free = 399 * 10
      description: "For professional teams",
      badge: "Most Popular",
      badgeColor: "bg-treeo-500",
      features: [
        "5 data sources",
        "Hourly updates",
        "Unlimited dashboards",
        "Enhanced AI optimization",
        "Faster training loop",
        "Better personalization",
      ],
      icon: <Shield className="h-10 w-10 text-purple-500" />,
      buttonText: "Join our design partner program",
      buttonVariant: "outline" as const,
      highlight: false,
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      description: "Starting at $1,000/month",
      badge: "",
      badgeColor: "",
      features: [
        "Unlimited data sources",
        "Live data",
        "Dedicated account manager",
        "SSO & security reviews",
        "Priority support",
      ],
      icon: <Users className="h-10 w-10 text-gray-400" />,
      buttonText: "Join our design partner program",
      buttonVariant: "outline" as const,
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-[#0c1420] scroll-mt-24 relative">
      {/* Toggleable Blur Overlay covers the entire section including all gaps */}
      {showPricingBlur && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center backdrop-blur-[8px] bg-black/30">
          <div className="text-3xl md:text-5xl font-extrabold text-white mb-2 text-center drop-shadow-lg">
            Pricing plans are coming soon
          </div>
          <Link href="/contact" className="text-treeo-500 hover:underline font-semibold text-base md:text-lg text-center">
            Sign up to hear first
          </Link>
        </div>
      )}
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-treeo-500/20 px-4 py-1.5 text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 text-treeo-500" />
            <span className="text-treeo-400">Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Choose Your Plan</h2>
          <p className="text-xl text-gray-300 mb-8">Start with a 14-day free trial. No credit card required.</p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? "text-white" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-treeo-500"
              style={{ backgroundColor: isYearly ? "#22C55E" : "#374151" }}
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
              <span className="text-xs text-treeo-400">Save 2 months free</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const period = isYearly ? "year" : "month"

            return (
              <div
                key={index}
                className="w-full"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card
                  className={`flex flex-col w-full h-full bg-[#1A1F2E] border-gray-700 transition-all duration-300 relative ${
                    plan.highlight ? "border-treeo-500 shadow-lg shadow-treeo-500/10" : ""
                  } ${hoveredCard === index ? "transform scale-105 shadow-xl border-treeo-500/70 z-10" : ""}`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 z-10 ${plan.badgeColor} text-white text-xs font-medium px-3 py-1 rounded-full`}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <CardHeader className={`${plan.badge ? "pt-6" : ""}`}>
                    <div className="mb-4">{plan.icon}</div>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-4xl font-bold text-treeo-500">{formatPrice(price)}</span>
                        {typeof price === "number" && price > 0 && <span className="text-gray-400">/{period}</span>}
                      </div>
                      <div className="text-sm text-gray-400">{plan.description}</div>

                      {/* Yearly savings message */}
                      {isYearly && typeof plan.monthlyPrice === "number" && plan.monthlyPrice > 0 && (
                        <div className="mt-1 text-xs text-treeo-400">
                          Save {formatPrice(plan.monthlyPrice * 2)} compared to monthly
                        </div>
                      )}
                    </div>

                    {/* Data Update Frequency */}
                    <div className="mb-4 flex items-center gap-2 bg-treeo-500/10 px-3 py-2 rounded-md">
                      <Database className="h-4 w-4 text-treeo-500" />
                      <span className="text-sm text-treeo-400 font-medium">
                        {index === 0 && "Daily Updates"}
                        {index === 1 && "Daily Updates"}
                        {index === 2 && "Hourly Updates"}
                        {index === 3 && "Live Updates"}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-treeo-500 shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4">
                    {index !== 3 ? (
                      <Link href="/contact" className="w-full">
                        <Button
                          variant={plan.buttonVariant}
                          className={`w-full px-6 py-3 transition-all duration-300 ${
                            plan.highlight
                              ? "bg-treeo-500 hover:bg-treeo-600 text-white"
                              : hoveredCard === index
                                ? "border-treeo-500 text-treeo-500 hover:bg-treeo-500/10"
                                : "border-gray-600 text-white hover:bg-gray-800"
                          }`}
                        >
                          {plan.buttonText}
                        </Button>
                      </Link>
                    ) : (
                      <Link href="/contact" className="w-full">
                        <Button
                          variant="outline"
                          className={`w-full px-6 py-3 transition-all duration-300 ${
                            hoveredCard === index
                              ? "border-treeo-500 text-treeo-500 hover:bg-treeo-500/10"
                              : "border-gray-600 text-white hover:bg-gray-800"
                          }`}
                        >
                          {plan.buttonText}
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Usage-Based Upsell Hooks */}
        <div className="max-w-3xl mx-auto mt-16 bg-[#1A1F2E] border border-gray-700 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <MessageSquare className="h-12 w-12 text-treeo-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">Unlimited Querying, Always</h3>
              <p className="text-gray-300">
                All plans include unlimited queries. As you use Treeo more, our AI gets smarter and more personalized to
                your needs. Upgrade anytime to access more data sources, faster updates, and enhanced features.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-300">
          <p className="mt-2">
            Need a custom plan?{" "}
            <Link href="/contact" className="text-treeo-500 hover:underline">
              Contact us
            </Link>{" "}
            for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
