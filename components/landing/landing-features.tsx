"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BrainCircuit, FileSpreadsheet, LineChart, MessageSquare, Sparkles, Wand2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function LandingFeatures() {
  const features = [
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-emerald-500" />,
      title: "Familiar Spreadsheet Interface",
      description:
        "Work with your data in a familiar spreadsheet environment that's easy to use but powerful enough for complex analysis.",
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-emerald-500" />,
      title: "AI-Powered Analysis",
      description:
        "Let AI analyze your data to uncover trends, anomalies, and insights that would take hours to find manually.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-emerald-500" />,
      title: "Natural Language Queries",
      description:
        "Ask questions about your data in plain English and get instant answers, charts, and visualizations.",
    },
    {
      icon: <Wand2 className="h-10 w-10 text-emerald-500" />,
      title: "Smart Formulas",
      description:
        "Use AI-enhanced formulas that go beyond traditional spreadsheet capabilities for advanced calculations.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-emerald-500" />,
      title: "Automated Visualizations",
      description:
        "Generate the perfect charts and graphs for your data with a single click, no design skills required.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-emerald-500" />,
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes based on historical data with AI-powered predictive models.",
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <section id="features" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features, Simple Interface</h2>
          <p className="text-xl text-muted-foreground">
            TreeBI combines the best of spreadsheets and AI to create a powerful yet intuitive analytics platform.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-border/40 hover:border-emerald-500/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
