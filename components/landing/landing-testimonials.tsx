"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function LandingTestimonials() {
  const testimonials = [
    {
      quote:
        "TreeBI has transformed how we analyze our sales data. The AI assistant helped us identify trends we would have missed otherwise, leading to a 23% increase in revenue.",
      author: "Sarah Johnson",
      role: "VP of Sales, TechCorp",
      avatar: "SJ",
    },
    {
      quote:
        "The spreadsheet interface is familiar enough that our team needed zero training, but the AI capabilities are what make it truly revolutionary for our business.",
      author: "Michael Chen",
      role: "Data Analyst, GrowthMetrics",
      avatar: "MC",
    },
    {
      quote:
        "We've tried many BI tools, but TreeBI is the first one that our entire team—from analysts to executives—actually enjoys using. The AI insights are game-changing.",
      author: "Alex Rodriguez",
      role: "CEO, Startup Ventures",
      avatar: "AR",
    },
    {
      quote:
        "The natural language query feature saves me hours every week. I can just ask questions about our data and get instant visualizations and insights.",
      author: "Priya Patel",
      role: "Marketing Director, BrandGrowth",
      avatar: "PP",
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
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Data Teams Everywhere</h2>
          <p className="text-xl text-muted-foreground">
            See what our customers are saying about how TreeBI has transformed their data analysis workflows.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-border/40">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-emerald-500/40 mb-4" />
                  <p className="text-lg mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {["Company A", "Company B", "Company C", "Company D", "Company E"].map((company, index) => (
              <div key={index} className="text-xl font-bold">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
