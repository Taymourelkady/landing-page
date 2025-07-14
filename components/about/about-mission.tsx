import { Card, CardContent } from "@/components/ui/card"
import { Database, MessageSquare, Hash, LineChart } from "lucide-react"

export function AboutMission() {
  const problems = [
    {
      icon: <Database className="h-8 w-8 text-treeo-500" />,
      title: "Data Silos",
      description: "Teams work with different data sources, leading to inconsistent metrics and definitions.",
    },
    {
      icon: <Hash className="h-8 w-8 text-treeo-500" />,
      title: "Metric Confusion",
      description: "Different departments define and calculate key metrics in different ways.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-treeo-500" />,
      title: "Communication Gaps",
      description: "Technical and non-technical teams struggle to communicate about data needs.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-treeo-500" />,
      title: "Validation Overhead",
      description: "Teams spend excessive time validating data rather than deriving insights.",
    },
  ]

  return (
    <section className="py-20 bg-[#0c1420]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Problem We're Solving</h2>
          <p className="text-xl text-gray-300">
            Data inconsistency is costing companies millions in wasted time, missed opportunities, and poor decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="bg-[#1A1F2E] border-gray-700 hover:border-treeo-500/50 transition-colors h-full"
            >
              <CardContent className="pt-6">
                <div className="mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{problem.title}</h3>
                <p className="text-gray-300">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Our Solution</h3>
          <p className="text-lg text-gray-300 mb-8">
            Treeo creates a unified metrics dictionary and natural language interface that allows everyone in your
            organization to access consistent, reliable data without technical knowledge.
          </p>

          <div className="relative rounded-xl overflow-hidden border border-gray-700 shadow-xl">
            <div className="bg-[#101827] p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Hash className="h-5 w-5 text-treeo-500" />
                    <h4 className="font-semibold text-lg text-white">Metrics Dictionary</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Define metrics once, use them everywhere. Ensure everyone in your organization is working with the
                    same definitions.
                  </p>
                  <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-700">
                    <code className="text-sm text-treeo-400">
                      What was our #monthly_active_users for Q1 compared to Q4 last year?
                    </code>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="h-5 w-5 text-treeo-500" />
                    <h4 className="font-semibold text-lg text-white">Natural Language Interface</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Ask questions in plain English and get immediate answers, visualizations, and insights.
                  </p>
                  <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-700">
                    <code className="text-sm text-treeo-400">
                      Show me the correlation between customer support tickets and churn rate by plan type
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
