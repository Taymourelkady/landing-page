"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function LandingTestimonials() {
  const testimonials = [
    {
      quote:
        "Treeo has transformed how our team accesses data. Instead of waiting for the data team to run queries, anyone can now ask questions and get immediate insights.",
      author: "Sarah Johnson",
      role: "VP of Analytics, TechCorp",
      avatar: "SJ",
    },
    {
      quote:
        "The metrics dictionary feature ensures everyone is using the same definitions, which has eliminated confusion and inconsistencies in our reporting.",
      author: "Michael Chen",
      role: "Data Scientist, GrowthMetrics",
      avatar: "MC",
    },
    {
      quote:
        "We've tried many BI tools, but Treeo is the first one that our entire team—from analysts to executives—actually enjoys using. The natural language interface is a game-changer.",
      author: "Alex Rodriguez",
      role: "CEO, Startup Ventures",
      avatar: "AR",
    },
    {
      quote:
        "The data profiling feature helped us identify and fix schema issues we didn't even know we had. Our data quality has improved dramatically since implementing Treeo.",
      author: "Priya Patel",
      role: "Data Engineering Lead, BrandGrowth",
      avatar: "PP",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Data-Driven Teams</h2>
          <p className="text-xl text-muted-foreground">
            See what our customers are saying about how Treeo has transformed their data workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border-border/40">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-treeo-500/40 mb-4" />
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
          ))}
        </div>

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
