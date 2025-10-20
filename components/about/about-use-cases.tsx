"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BarChart3, MessageSquare, Users, TrendingUp, Database, Code, Lightbulb, CheckCircle2 } from "lucide-react"

interface Role {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  category: "business" | "technical"
  challenge: string
  solution: string
  workflow: string[]
  benefits: string[]
  color: string
}

const roles: Role[] = [
  {
    id: "product-manager",
    name: "Product Manager",
    icon: Lightbulb,
    category: "business",
    challenge: "Need to understand user behavior and feature performance without waiting for analysts",
    solution: "Use Chat Mode to instantly query product metrics and visualize user funnels",
    workflow: [
      "Ask: 'Show me conversion rates by feature for the last quarter'",
      "Review the generated chart and insights",
      "Add to shared dashboard for team visibility",
      "Iterate on product decisions with real-time data"
    ],
    benefits: [
      "Make data-driven decisions in minutes, not days",
      "No SQL or technical skills required",
      "Share insights instantly with stakeholders",
      "Track product metrics consistently"
    ],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "sales-manager",
    name: "Sales Manager",
    icon: TrendingUp,
    category: "business",
    challenge: "Tracking deals, pipeline health, and team performance across multiple tools is time-consuming",
    solution: "Query sales data conversationally and create live dashboards for team performance",
    workflow: [
      "Ask: 'What's our win rate by deal size this quarter?'",
      "Compare performance across sales reps",
      "Create dashboards for daily stand-ups",
      "Set up automated reports for leadership"
    ],
    benefits: [
      "Instant visibility into pipeline health",
      "Compare performance across periods effortlessly",
      "Identify trends before they become problems",
      "Empower reps with self-service analytics"
    ],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: "executive",
    name: "Executive",
    icon: Users,
    category: "business",
    challenge: "Need strategic insights without sifting through multiple reports and dashboards",
    solution: "Access unified dashboards with consistent metrics across all departments",
    workflow: [
      "Review key metrics in centralized dashboards",
      "Ask follow-up questions for deeper insights",
      "Compare cross-functional performance",
      "Make strategic decisions with complete context"
    ],
    benefits: [
      "Single source of truth for all metrics",
      "Reduce decision-making bottlenecks",
      "Consistent reporting across teams",
      "Strategic insights at your fingertips"
    ],
    color: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    icon: BarChart3,
    category: "technical",
    challenge: "Spending too much time on ad-hoc requests instead of high-value analysis",
    solution: "Enable self-service analytics while maintaining control over metric definitions",
    workflow: [
      "Define metrics once in Scientist Mode",
      "Empower teams to query data themselves",
      "Focus on complex analysis and modeling",
      "Ensure data quality and governance"
    ],
    benefits: [
      "Reduce ad-hoc requests by 80%",
      "Maintain metric consistency across org",
      "More time for strategic analysis",
      "Improve data literacy company-wide"
    ],
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    id: "data-engineer",
    name: "Data Engineer",
    icon: Database,
    category: "technical",
    challenge: "Data quality issues and schema optimization are discovered too late",
    solution: "Use Data Profiler to identify and fix data quality issues proactively",
    workflow: [
      "Profile data sources automatically",
      "Identify anomalies and quality issues",
      "Optimize schema based on usage patterns",
      "Monitor data health continuously"
    ],
    benefits: [
      "Catch data issues before they impact users",
      "Optimize performance proactively",
      "Reduce pipeline maintenance time",
      "Improve overall data reliability"
    ],
    color: "from-teal-500/20 to-cyan-500/20"
  },
  {
    id: "developer",
    name: "Developer",
    icon: Code,
    category: "technical",
    challenge: "Integrating analytics into applications requires complex infrastructure",
    solution: "Use APIs to embed analytics directly into your applications",
    workflow: [
      "Access Treeo's API from your application",
      "Embed charts and insights in your UI",
      "Automate workflows with analytics data",
      "Build data-driven features faster"
    ],
    benefits: [
      "Reduce time to build analytics features",
      "Consistent data across all touchpoints",
      "No infrastructure overhead",
      "Focus on product, not plumbing"
    ],
    color: "from-sky-500/20 to-blue-500/20"
  }
]

export function AboutUseCases() {
  const [selectedRole, setSelectedRole] = useState<Role>(roles[0])
  const [activeCategory, setActiveCategory] = useState<"business" | "technical">("business")

  const filteredRoles = roles.filter(role => role.category === activeCategory)

  return (
    <section id="use-cases" className="py-20 bg-[#0c1420] scroll-mt-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How Can Treeo Help You?</h2>
          <p className="text-xl text-gray-300">Select your role to see specific use cases and benefits</p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#101827] rounded-lg p-1 border border-gray-700">
            <button
              onClick={() => {
                setActiveCategory("business")
                setSelectedRole(roles[0])
              }}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeCategory === "business"
                  ? "bg-treeo-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <MessageSquare className="inline-block w-5 h-5 mr-2" />
              Business Roles
            </button>
            <button
              onClick={() => {
                setActiveCategory("technical")
                setSelectedRole(roles[3])
              }}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeCategory === "technical"
                  ? "bg-treeo-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Database className="inline-block w-5 h-5 mr-2" />
              Technical Roles
            </button>
          </div>
        </div>

        {/* Role Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {filteredRoles.map((role) => {
            const Icon = role.icon
            return (
              <motion.button
                key={role.id}
                onClick={() => setSelectedRole(role)}
                className={`relative p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                  selectedRole.id === role.id
                    ? "border-treeo-500 bg-[#101827]"
                    : "border-gray-700 bg-[#0d1117] hover:border-gray-600"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className={`w-8 h-8 mb-3 ${
                  selectedRole.id === role.id ? "text-treeo-500" : "text-gray-400"
                }`} />
                <h3 className="font-semibold text-white text-lg">{role.name}</h3>
                {selectedRole.id === role.id && (
                  <motion.div
                    layoutId="selected-indicator"
                    className="absolute top-2 right-2"
                    initial={false}
                  >
                    <CheckCircle2 className="w-6 h-6 text-treeo-500" />
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Role Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRole.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className={`bg-gradient-to-br ${selectedRole.color} rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Challenge & Solution */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                      <selectedRole.icon className="w-7 h-7 text-treeo-500" />
                      {selectedRole.name}
                    </h3>
                    <div className="bg-[#0d1117]/80 rounded-lg p-5 border border-gray-700/50">
                      <h4 className="font-semibold text-red-400 mb-2 text-sm uppercase tracking-wide">Challenge</h4>
                      <p className="text-gray-300">{selectedRole.challenge}</p>
                    </div>
                  </div>

                  <div className="bg-[#0d1117]/80 rounded-lg p-5 border border-treeo-500/30">
                    <h4 className="font-semibold text-treeo-500 mb-2 text-sm uppercase tracking-wide">Treeo Solution</h4>
                    <p className="text-gray-300">{selectedRole.solution}</p>
                  </div>

                  <div className="bg-[#0d1117]/80 rounded-lg p-5 border border-gray-700/50">
                    <h4 className="font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {selectedRole.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Workflow */}
                <div className="bg-[#0d1117]/80 rounded-lg p-5 border border-gray-700/50">
                  <h4 className="font-semibold text-white mb-4">Typical Workflow</h4>
                  <div className="space-y-4">
                    {selectedRole.workflow.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-treeo-500/20 border-2 border-treeo-500 flex items-center justify-center text-treeo-500 font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-300 leading-relaxed">{step}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-[#101827] rounded-lg p-6 border border-gray-700 text-center">
            <div className="text-4xl font-bold text-treeo-500 mb-2">80%</div>
            <div className="text-gray-300">Reduction in ad-hoc requests</div>
          </div>
          <div className="bg-[#101827] rounded-lg p-6 border border-gray-700 text-center">
            <div className="text-4xl font-bold text-treeo-500 mb-2">10x</div>
            <div className="text-gray-300">Faster insights delivery</div>
          </div>
          <div className="bg-[#101827] rounded-lg p-6 border border-gray-700 text-center">
            <div className="text-4xl font-bold text-treeo-500 mb-2">100%</div>
            <div className="text-gray-300">Metric consistency</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
