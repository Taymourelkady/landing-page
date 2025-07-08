import { Card, CardContent } from "@/components/ui/card"
import { Database, MessageSquare, Hash, LineChart } from "lucide-react"

export function AboutMission() {
  const problems = [
    {
<<<<<<< HEAD
      icon: <Database className="h-8 w-8 text-treeo-500" />,
=======
      icon: <Database className="h-8 w-8 text-emerald-500" />,
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
      title: "Data Silos",
      description: "Teams work with different data sources, leading to inconsistent metrics and definitions.",
    },
    {
<<<<<<< HEAD
      icon: <Hash className="h-8 w-8 text-treeo-500" />,
=======
      icon: <Hash className="h-8 w-8 text-emerald-500" />,
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
      title: "Metric Confusion",
      description: "Different departments define and calculate key metrics in different ways.",
    },
    {
<<<<<<< HEAD
      icon: <MessageSquare className="h-8 w-8 text-treeo-500" />,
=======
      icon: <MessageSquare className="h-8 w-8 text-emerald-500" />,
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
      title: "Communication Gaps",
      description: "Technical and non-technical teams struggle to communicate about data needs.",
    },
    {
<<<<<<< HEAD
      icon: <LineChart className="h-8 w-8 text-treeo-500" />,
=======
      icon: <LineChart className="h-8 w-8 text-emerald-500" />,
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
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
<<<<<<< HEAD
              className="bg-[#1A1F2E] border-gray-700 hover:border-treeo-500/50 transition-colors h-full"
=======
              className="bg-[#1A1F2E] border-gray-700 hover:border-emerald-500/50 transition-colors h-full"
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
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
<<<<<<< HEAD
                    <Hash className="h-5 w-5 text-treeo-500" />
=======
                    <Hash className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
                    <h4 className="font-semibold text-lg text-white">Metrics Dictionary</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Define metrics once, use them everywhere. Ensure everyone in your organization is working with the
                    same definitions.
                  </p>
                  <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-700">
<<<<<<< HEAD
                    <code className="text-sm text-treeo-400">
=======
                    <code className="text-sm text-emerald-400">
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
                      What was our #monthly_active_users for Q1 compared to Q4 last year?
                    </code>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
<<<<<<< HEAD
                    <MessageSquare className="h-5 w-5 text-treeo-500" />
=======
                    <MessageSquare className="h-5 w-5 text-emerald-500" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
                    <h4 className="font-semibold text-lg text-white">Natural Language Interface</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Ask questions in plain English and get immediate answers, visualizations, and insights.
                  </p>
                  <div className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-700">
<<<<<<< HEAD
                    <code className="text-sm text-treeo-400">
=======
                    <code className="text-sm text-emerald-400">
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
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
