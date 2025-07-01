"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { SharedHeader } from "@/components/ui/shared-header"
import { navItems, dropdownItems, sharedHeaderOptions } from "@/components/ui/header-config"

export function TutorialsContent() {
  const [activeCategory, setActiveCategory] = useState("beginner")
  const [activeSection, setActiveSection] = useState("getting-started")

  const categories = [
    { id: "beginner", title: "Beginner" },
    { id: "intermediate", title: "Intermediate" },
    { id: "advanced", title: "Advanced" },
  ]

  const tutorials = {
    beginner: [
      {
        id: "getting-started",
        title: "Getting Started with Treeo",
        description: "Learn the basics of Treeo and how to navigate the platform.",
        duration: "5:30",
        level: "Beginner",
      },
      {
        id: "first-query",
        title: "Your First Query",
        description: "Write your first natural language query and get results.",
        duration: "8:15",
        level: "Beginner",
      },
      {
        id: "data-connections",
        title: "Connecting Data Sources",
        description: "Connect your first database or data warehouse to Treeo.",
        duration: "12:45",
        level: "Beginner",
      },
    ],
    intermediate: [
      {
        id: "advanced-queries",
        title: "Advanced Querying Techniques",
        description: "Learn how to write more complex queries and use advanced features.",
        duration: "15:20",
        level: "Intermediate",
      },
      {
        id: "visualizations",
        title: "Creating Visualizations",
        description: "Build charts and graphs to visualize your data insights.",
        duration: "10:30",
        level: "Intermediate",
      },
      {
        id: "collaboration",
        title: "Team Collaboration",
        description: "Share insights and collaborate with your team members.",
        duration: "7:45",
        level: "Intermediate",
      },
    ],
    advanced: [
      {
        id: "custom-models",
        title: "Creating Custom Models",
        description: "Build custom models to analyze specific aspects of your business.",
        duration: "15:30",
        level: "Advanced",
      },
      {
        id: "alerts",
        title: "Setting Up Alerts",
        description: "Get notified when your data meets specific conditions.",
        duration: "8:15",
        level: "Intermediate",
      },
      {
        id: "api-usage",
        title: "Using the Treeo API",
        description: "Integrate Treeo's capabilities into your own applications.",
        duration: "13:40",
        level: "Advanced",
      },
    ],
  }

  const pageNavItems = [
    ...navItems,
  ]

  return (
    <div className="min-h-screen bg-[#101827] text-white">
      <SharedHeader 
        navItems={pageNavItems}
        dropdownItems={dropdownItems}
        {...sharedHeaderOptions}
      />

      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-xl font-bold mb-4 text-white">Tutorials</h2>
              
              {/* Category Navigation */}
              <nav className="space-y-1 mb-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center w-full px-3 py-2 text-left rounded-md ${
                      activeCategory === category.id
                        ? "bg-emerald-500/20 text-emerald-500 font-medium"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {activeCategory === category.id && <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />}
                    <span className={activeCategory === category.id ? "ml-0" : "ml-6"}>{category.title}</span>
                  </button>
                ))}
              </nav>

              {/* Tutorial Navigation */}
              <nav className="space-y-1">
                {tutorials[activeCategory as keyof typeof tutorials].map((tutorial) => (
                  <button
                    key={tutorial.id}
                    onClick={() => setActiveSection(tutorial.id)}
                    className={`flex items-center w-full px-3 py-2 text-left rounded-md ${
                      activeSection === tutorial.id
                        ? "bg-emerald-500/20 text-emerald-500 font-medium"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {activeSection === tutorial.id && <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />}
                    <span className={activeSection === tutorial.id ? "ml-0" : "ml-6"}>{tutorial.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8 text-white">Tutorials</h1>

            {tutorials[activeCategory as keyof typeof tutorials].map((tutorial) => (
              <section key={tutorial.id} id={tutorial.id} className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">{tutorial.title}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">{tutorial.duration}</span>
                    <span className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-500 rounded">
                      {tutorial.level}
                    </span>
                  </div>
                </div>
                <p className="mb-4 text-gray-300">{tutorial.description}</p>
                
                {/* Placeholder for tutorial content */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <p className="text-gray-400 text-center">
                    Tutorial content for "{tutorial.title}" will be displayed here.
                  </p>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}
