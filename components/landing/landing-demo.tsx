"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, FileSpreadsheet, MessageSquare, Sparkles } from "lucide-react"

export function LandingDemo() {
  const [activeTab, setActiveTab] = useState("spreadsheet")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const demos = [
    {
      id: "spreadsheet",
      title: "Spreadsheet Interface",
      description: "Work with your data in a familiar spreadsheet environment with AI-powered features.",
      icon: <FileSpreadsheet className="h-5 w-5" />,
      image: "/placeholder.svg?height=720&width=1280",
    },
    {
      id: "ai-assistant",
      title: "AI Assistant",
      description: "Ask questions about your data and get instant insights and visualizations.",
      icon: <Sparkles className="h-5 w-5" />,
      image: "/placeholder.svg?height=720&width=1280",
    },
    {
      id: "chat",
      title: "Natural Language Chat",
      description: "Have a conversation with your data using our AI-powered chat interface.",
      icon: <MessageSquare className="h-5 w-5" />,
      image: "/placeholder.svg?height=720&width=1280",
    },
    {
      id: "visualizations",
      title: "Smart Visualizations",
      description: "Generate the perfect charts and graphs for your data with a single click.",
      icon: <BarChart3 className="h-5 w-5" />,
      image: "/placeholder.svg?height=720&width=1280",
    },
  ]

  return (
    <section id="demo" className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See TreeBI in Action</h2>
          <p className="text-xl text-muted-foreground">
            Experience how TreeBI transforms complex data analysis into simple, intuitive workflows.
          </p>
        </motion.div>

        <Tabs defaultValue="spreadsheet" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-5 gap-8 items-center"
              >
                <div className="md:col-span-2 order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">{demo.title}</h3>
                  <p className="text-muted-foreground mb-6">{demo.description}</p>

                  <div className="space-y-4">
                    {demo.id === "spreadsheet" && (
                      <>
                        <div className="flex items-start gap-3">
                          <div className="bg-emerald-500/20 p-2 rounded-full">
                            <FileSpreadsheet className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">Familiar Interface</h4>
                            <p className="text-sm text-muted-foreground">
                              All the spreadsheet features you know, enhanced with AI capabilities.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-emerald-500/20 p-2 rounded-full">
                            <Sparkles className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">AI-Enhanced Formulas</h4>
                            <p className="text-sm text-muted-foreground">
                              Use AI-powered formulas like =AI.PREDICT() and =AI.TREND() for advanced analysis.
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    {demo.id === "ai-assistant" && (
                      <>
                        <div className="flex items-start gap-3">
                          <div className="bg-emerald-500/20 p-2 rounded-full">
                            <MessageSquare className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">Ask Questions in Plain English</h4>
                            <p className="text-sm text-muted-foreground">
                              "What were our top-selling products last quarter?" - get instant answers.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-emerald-500/20 p-2 rounded-full">
                            <BarChart3 className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">Automatic Visualizations</h4>
                            <p className="text-sm text-muted-foreground">
                              AI suggests and creates the most relevant charts for your data.
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    {demo.id === "chat" && (
                      <>
                        <div className="flex items-start gap-3">
                          <div className="bg-emerald-500/20 p-2 rounded-full">
                            <MessageSquare className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">Conversational Analysis</h4>
                            <p className="text-sm text-muted-foreground">
                              Have a natural conversation with your data through our AI chat interface.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-emerald-500/20 p-2 rounded-full">
                            <Sparkles className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">Follow-up Questions</h4>
                            <p className="text-sm text-muted-foreground">
                              AI remembers context, so you can ask follow-up questions for deeper insights.
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    {demo.id === "visualizations" && (
                      <>
                        <div className="flex items-start gap-3">
                          <div className="bg-emerald-500/20 p-2 rounded-full">
                            <BarChart3 className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">Smart Chart Selection</h4>
                            <p className="text-sm text-muted-foreground">
                              AI automatically selects the best visualization type for your data.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-emerald-500/20 p-2 rounded-full">
                            <Sparkles className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">Interactive Dashboards</h4>
                            <p className="text-sm text-muted-foreground">
                              Create interactive dashboards with AI-generated insights and visualizations.
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <Button className="mt-6 gap-2">
                    Try it yourself <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="md:col-span-3 order-1 md:order-2">
                  <div className="rounded-xl overflow-hidden border border-border/40 shadow-lg">
                    <img src={demo.image || "/placeholder.svg"} alt={demo.title} className="w-full h-auto" />
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
