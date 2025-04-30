"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Database, Hash, AtSign, LineChart, FileCheck } from "lucide-react"
import Link from "next/link"

export function LandingDemo() {
  const [activeTab, setActiveTab] = useState("chat")

  const demos = [
    {
      id: "chat",
      title: "Natural Language Chat",
      description: "Ask questions about your data in plain English and get instant answers.",
      icon: <MessageSquare className="h-5 w-5" />,
      content: (
        <>
          <h3 className="text-2xl font-bold mb-3">Natural Language Queries</h3>
          <p className="text-muted-foreground mb-6 h-[48px]">
            Ask questions about your data in plain English and get immediate answers, no SQL knowledge required.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium">Conversational Interface</h4>
                <p className="text-muted-foreground mb-6 h-[48px]">
                  Chat with your data as if you're talking to a data analyst on your team.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <Database className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium">Direct Database Connection</h4>
                <p className="text-muted-foreground mb-6 h-[48px]">
                  Connects directly to your data sources for real-time, accurate answers.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      image: "https://i.imgur.com/g6f6AaP.png",
    },
    {
      id: "metrics",
      title: "Metrics Dictionary",
      description: "Ensure data consistency with a shared metrics dictionary.",
      icon: <Hash className="h-5 w-5" />,
      content: (
        <>
          <h3 className="text-2xl font-bold mb-3">Metrics Dictionary</h3>
          <p className="text-muted-foreground mb-6 h-[48px]">Ensure data consistency with a shared metrics dictionary.</p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <Hash className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium">Consistent Definitions</h4>
                <p className="text-muted-foreground mb-6 h-[48px]">
                  Use #metric_name to ensure everyone is using the same definitions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <AtSign className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium">Data References</h4>
                <p className="text-muted-foreground mb-6 h-[48px]">
                  Reference specific data rows with @reference for detailed analysis.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      image: "https://i.imgur.com/of1Kclj.png",
    },
    {
      id: "profiling",
      title: "Data Profiling",
      description: "Identify and fix schema issues to ensure data quality.",
      icon: <FileCheck className="h-5 w-5" />,
      content: (
        <>
          <h3 className="text-2xl font-bold mb-3">Data Profiling</h3>
          <p className="text-muted-foreground mb-6 h-[48px]">Identify and fix schema issues to ensure data quality.</p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <FileCheck className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium">Schema Analysis</h4>
                <p className="text-muted-foreground mb-6 h-[48px]">
                Automatically analyze your data schema to identify inconsistencies and issues.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <ArrowRight className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium">Actionable Recommendations</h4>
                <p className="text-muted-foreground mb-6 h-[48px]">
                Get specific recommendations to improve your data quality and consistency.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      image: "https://i.imgur.com/9XDf1pa.png",
    },
    {
      id: "visualizations",
      title: "Smart Visualizations",
      description: "Automatically generate the perfect charts for your data.",
      icon: <LineChart className="h-5 w-5" />,
      content: (
        <>
          <h3 className="text-2xl font-bold mb-3">Smart Visualizations</h3>
          <p className="text-muted-foreground mb-6 h-[48px]">Automatically generate the perfect charts for your data.</p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <LineChart className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium">Smart Chart Selection</h4>
                <p className="text-muted-foreground mb-6 h-[48px]">
                  AI automatically selects the best visualization type for your data.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-medium">Interactive Exploration</h4>
                <p className="text-muted-foreground mb-6 h-[48px]">
                  Ask follow-up questions to drill down into your visualizations.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      image: "https://i.imgur.com/UP76iM5.png",
    },
  ]

  return (
    <section id="demo" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Treeo in Action</h2>
          <p className="text-xl text-muted-foreground">
            Experience how Treeo transforms data analysis with AI-powered features that make insights accessible to
            everyone.
          </p>
        </div>

        <Tabs defaultValue="chat" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-4 gap-2 mb-8 p-1 bg-muted/50">
            {demos.map((demo) => (
              <TabsTrigger
                key={demo.id}
                value={demo.id}
                className="flex items-center gap-2 data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                {demo.icon}
                <span className="hidden md:inline">{demo.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {demos.map((demo) => (
            <TabsContent key={demo.id} value={demo.id} className="mt-0">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2 order-2 md:order-1">
                  {demo.content}
                  <Link href="/contact">
                    <Button className="mt-6 gap-2 bg-emerald-500 hover:bg-emerald-600">
                      Book a Demo <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="md:col-span-3 order-1 md:order-2">
                  <div className="rounded-xl overflow-hidden border border-border/40 shadow-lg">
                    <img src={demo.image || "/placeholder.svg"} alt={demo.title} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}