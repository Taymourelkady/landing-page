"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export function LandingPricing() {
  const plans = [
    {
      name: "Starter",
      price: "$50",
      period: "month",
      features: [
        "1 data source",
        "Up to 5 team members",
        "Unlimited queries",
        "1 saved dashboard",
        "Unlimited metrics configuration",
      ],
      popular: false,
      buttonVariant: "outline" as const,
    },
    {
      name: "Growth",
      price: "$400",
      period: "month",
      features: [
        "Up to 5 data sources",
        "Unlimited queries",
        "3 saved dashboards/reports",
        "Unlimited metrics configuration",
        "Unlimited users",
        "Growth product manager",
      ],
      popular: true,
      buttonVariant: "default" as const,
    },
    {
      name: "Pro",
      price: "$600",
      period: "month",
      features: [
        "Unlimited data sources",
        "Unlimited workspaces/dashboards",
        "Advanced alerting & automation",
        "Growth product manager",
        "Data profiling",
      ],
      popular: false,
      buttonVariant: "outline" as const,
    },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the plan that's right for your business, with no hidden fees or surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="flex">
              <Card
                className={`flex flex-col w-full border-border/40 ${
                  plan.popular ? "border-emerald-500 shadow-lg shadow-emerald-500/10" : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`${plan.popular ? "pt-6" : ""}`}>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-emerald-500">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button
                      variant={plan.buttonVariant}
                      className={`w-full ${plan.popular ? "bg-emerald-500 hover:bg-emerald-600 text-white" : ""}`}
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
