"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Database, Hash, AtSign, LineChart, FileCheck, Table } from "lucide-react"
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
          <h3 className="text-2xl font-bold mb-3 text-white">Natural Language Queries</h3>
          <p className="text-gray-300 mb-6 h-[48px]">
            Ask questions about your data in plain English and get immediate answers, no SQL required.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
<<<<<<< HEAD
              <div className="bg-treeo-500/20 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-treeo-500" />
=======
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </div>
              <div>
                <h4 className="font-medium text-white">Conversational Interface</h4>
                <p className="text-gray-300 mb-6 h-[48px]">
                  Chat with your data as if you're talking to a data analyst on your team.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
<<<<<<< HEAD
              <div className="bg-treeo-500/20 p-2 rounded-full">
                <Database className="h-5 w-5 text-treeo-500" />
=======
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <Database className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </div>
              <div>
                <h4 className="font-medium text-white">Direct Database Connection</h4>
                <p className="text-gray-300 mb-6 h-[48px]">
                  Connects directly to your data sources for real-time, accurate answers.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      image: "https://i.imgur.com/5eXeFxJ.jpg",
    },
    {
      id: "metrics",
      title: "Metrics Dictionary",
      description: "Ensure data consistency with a shared metrics dictionary.",
      icon: <Hash className="h-5 w-5" />,
      content: (
        <>
          <h3 className="text-2xl font-bold mb-3 text-white">Metrics Dictionary</h3>
          <p className="text-gray-300 mb-6 h-[48px]">Ensure data consistency with a shared metrics dictionary.</p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
<<<<<<< HEAD
              <div className="bg-treeo-500/20 p-2 rounded-full">
                <Hash className="h-5 w-5 text-treeo-500" />
=======
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <Hash className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </div>
              <div>
                <h4 className="font-medium text-white">Consistent Definitions</h4>
                <p className="text-gray-300 mb-6 h-[48px]">
                  Use #metric_name to ensure everyone is using the same definitions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
<<<<<<< HEAD
              <div className="bg-treeo-500/20 p-2 rounded-full">
                <AtSign className="h-5 w-5 text-treeo-500" />
=======
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <AtSign className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </div>
              <div>
                <h4 className="font-medium text-white">Data References</h4>
                <p className="text-gray-300 mb-6 h-[48px]">
                  Reference specific data rows with @reference for detailed analysis.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      image: "https://i.postimg.cc/yNzr8LFW/Screenshot-2025-05-16-at-10-05-04-AM.png",
    },
    {
      id: "profiling",
      title: "Data Profiling",
      description: "Identify and fix schema issues to ensure data quality.",
      icon: <FileCheck className="h-5 w-5" />,
      content: (
        <>
          <h3 className="text-2xl font-bold mb-3 text-white">Data Profiling</h3>
          <p className="text-gray-300 mb-6 h-[48px]">Identify and fix schema issues to ensure data quality.</p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
<<<<<<< HEAD
              <div className="bg-treeo-500/20 p-2 rounded-full">
                <FileCheck className="h-5 w-5 text-treeo-500" />
=======
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <FileCheck className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </div>
              <div>
                <h4 className="font-medium text-white">Schema Analysis</h4>
                <p className="text-gray-300 mb-6 h-[48px]">
                  Automatically analyze your data schema to identify inconsistencies and issues.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
<<<<<<< HEAD
              <div className="bg-treeo-500/20 p-2 rounded-full">
                <ArrowRight className="h-5 w-5 text-treeo-500" />
=======
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <ArrowRight className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </div>
              <div>
                <h4 className="font-medium text-white">Actionable Recommendations</h4>
                <p className="text-gray-300 mb-6 h-[48px]">
                  Get specific recommendations to improve your data quality and consistency.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      image: "https://i.postimg.cc/5tQYsMyk/Screenshot-2025-05-16-at-10-08-09-AM.png",
    },
    {
      id: "visualizations",
      title: "Smart Visualizations",
      description: "Automatically generate the perfect charts for your data.",
      icon: <LineChart className="h-5 w-5" />,
      content: (
        <>
          <h3 className="text-2xl font-bold mb-3 text-white">Smart Visualizations</h3>
          <p className="text-gray-300 mb-6 h-[48px]">Automatically generate the perfect charts for your data.</p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
<<<<<<< HEAD
              <div className="bg-treeo-500/20 p-2 rounded-full">
                <LineChart className="h-5 w-5 text-treeo-500" />
=======
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <LineChart className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </div>
              <div>
                <h4 className="font-medium text-white">Smart Chart Selection</h4>
                <p className="text-gray-300 mb-6 h-[48px]">
                  AI automatically selects the best visualization type for your data.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
<<<<<<< HEAD
              <div className="bg-treeo-500/20 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-treeo-500" />
=======
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </div>
              <div>
                <h4 className="font-medium text-white">Interactive Exploration</h4>
                <p className="text-gray-300 mb-6 h-[48px]">
                  Ask follow-up questions to drill down into your visualizations.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      image: "https://i.postimg.cc/PJT06TXW/Screenshot-2025-05-16-at-10-09-00-AM.png",
    },
    {
      id: "spreadsheets",
      title: "Built-in Spreadsheets",
      description: "Work with your data directly in the platform without exporting.",
      icon: <Table className="h-5 w-5" />,
      content: (
        <>
          <h3 className="text-2xl font-bold mb-3 text-white">Built-in Spreadsheets</h3>
          <p className="text-gray-300 mb-6 h-[48px]">
            Analyze and manipulate your data with familiar spreadsheet tools, all within Treeo.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
<<<<<<< HEAD
              <div className="bg-treeo-500/20 p-2 rounded-full">
                <Table className="h-5 w-5 text-treeo-500" />
=======
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <Table className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </div>
              <div>
                <h4 className="font-medium text-white">Familiar Interface</h4>
                <p className="text-gray-300 mb-6 h-[48px]">
                  Use formulas, filters, and formatting just like your favorite spreadsheet app.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
<<<<<<< HEAD
              <div className="bg-treeo-500/20 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-treeo-500" />
=======
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </div>
              <div>
                <h4 className="font-medium text-white">AI-Powered Analysis</h4>
                <p className="text-gray-300 mb-6 h-[48px]">
                  Ask questions about your spreadsheet data and get instant insights.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      image: "https://i.postimg.cc/wjj2w3hx/Screenshot-2025-05-16-at-10-10-12-AM.png",
    },
  ]

  return (
    <section id="demo" className="py-20 bg-[#101827] scroll-mt-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">See Treeo in Action</h2>
          <p className="text-xl text-gray-300">
            Experience how Treeo transforms data analysis with AI-powered features that make insights accessible to
            everyone.
          </p>
        </div>

        <Tabs defaultValue="chat" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-5 gap-2 mb-8 p-1 bg-[#0c1420]">
            {demos.map((demo) => (
              <TabsTrigger
                key={demo.id}
                value={demo.id}
<<<<<<< HEAD
                className="flex items-center gap-2 data-[state=active]:bg-treeo-500 data-[state=active]:text-white"
=======
                className="flex items-center gap-2 data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
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
<<<<<<< HEAD
                    <Button className="mt-6 gap-2 bg-treeo-500 hover:bg-treeo-600">
=======
                    <Button className="mt-6 gap-2 bg-emerald-500 hover:bg-emerald-600">
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
                      Book a Demo <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="md:col-span-3 order-1 md:order-2">
                  <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg">
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
