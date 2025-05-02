"use client"

import { MessageSquare, Database, Hash, AtSign, LineChart, FileCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function LandingFeatures() {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-emerald-500" />,
      title: "Natural Language Queries",
      description:
        "Ask questions about your data in plain English and get immediate answers, no SQL knowledge required.",
    },
    {
      icon: <Database className="h-10 w-10 text-emerald-500" />,
      title: "Database Connectivity",
      description:
        "Connect to your existing databases and analytics tools including Snowflake, BigQuery, Redshift, and more.",
    },
    {
      icon: <Hash className="h-10 w-10 text-emerald-500" />,
      title: "Metrics Dictionary",
      description:
        "Reference metrics with # to ensure everyone is using consistent definitions across your organization.",
    },
    {
      icon: <AtSign className="h-10 w-10 text-emerald-500" />,
      title: "Data References",
      description: "Easily reference specific data rows with @ to drill down into the details that matter most.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-emerald-500" />,
      title: "Automated Visualizations",
      description:
        "Treeo automatically generates the most appropriate charts and visualizations for your data queries.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-emerald-500" />,
      title: "Data Profiling",
      description: "Identify and fix schema issues with our data profiler to ensure data quality and consistency.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-[#0c1420] scroll-mt-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Your AI Data Analyst, Always On Call</h2>
          <p className="text-xl text-gray-300">
            Treeo makes data accessible to everyone in your organization, ensuring consistency and accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="h-full bg-[#1A1F2E] border-gray-700 hover:border-emerald-500/50 transition-colors"
            >
              <CardContent className="pt-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
