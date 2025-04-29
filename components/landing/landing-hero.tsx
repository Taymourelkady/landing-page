"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function LandingHero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium mb-6">
              <span className="text-emerald-500">New</span>
              <span className="text-muted-foreground">AI-Powered Analytics</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transform Your Data Into <span className="text-emerald-500">Intelligent Insights</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            TreeBI combines the simplicity of spreadsheets with the power of AI to help you analyze data, uncover
            insights, and make better business decisions—all in one intuitive platform.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/signup">
              <Button
                size="lg"
                className="gap-2 text-base px-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started Free
                <ArrowRight className={`h-4 w-4 transition-transform ${isHovered ? "translate-x-1" : ""}`} />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="gap-2 text-base px-8">
                <Sparkles className="h-4 w-4 text-emerald-500" />
                See AI in Action
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          className="mt-16 md:mt-20 relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative rounded-xl overflow-hidden border border-border/40 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 z-0" />
            <img
              src="/placeholder.svg?height=720&width=1280"
              alt="TreeBI Dashboard"
              className="w-full h-auto relative z-10"
            />
          </div>

          {/* Floating elements */}
          <div className="absolute -right-12 -top-12 bg-card border border-border/40 p-4 rounded-lg shadow-lg hidden md:block">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-500" />
              <p className="font-medium">AI detected a 15% sales increase</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
