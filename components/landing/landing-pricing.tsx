"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"

export function LandingPricing() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams",
      monthlyPrice: 19,
      annualPrice: 15,
      features: [
        "Up to 5 sheets",
        "Basic AI analysis",
        "Standard visualizations",
        "7-day data history",
        "Email support",
      ],
      popular: false,
      buttonVariant: "outline" as const,
    },
    {
      name: "Professional",
      description: "For growing businesses and data teams",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Unlimited sheets",
        "Advanced AI analysis",
        "Custom visualizations",
        "30-day data history",
        "Priority support",
        "Team collaboration",
        "Custom formulas",
      ],
      popular: true,
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Everything in Professional",
        "Unlimited data history",
        "Advanced security features",
        "Custom AI model training",
        "API access",
        "Dedicated account manager",
        "SSO & SAML",
        "Custom integrations",
      ],
      popular: false,
      buttonVariant: "outline" as const,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the plan that's right for your business, with no hidden fees or surprises.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? "font-medium" : "text-muted-foreground"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-emerald-500" />
            <span className={`text-sm ${isAnnual ? "font-medium" : "text-muted-foreground"}`}>
              Annual <span className="text-emerald-500 font-medium">(Save 20%)</span>
            </span>
          </div>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants} className="flex">
              <Card
                className={`flex flex-col w-full border-border/40 ${plan.popular ? "border-emerald-500 shadow-lg shadow-emerald-500/10" : ""}`}
              >
                {plan.popular && (
                  <div className="bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                    <span className="text-muted-foreground">/month</span>
                    {isAnnual && <p className="text-xs text-muted-foreground mt-1">Billed annually</p>}
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
                  <Button variant={plan.buttonVariant} className="w-full">
                    {plan.popular ? "Get Started" : "Choose Plan"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
