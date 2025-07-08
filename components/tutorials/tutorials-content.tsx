"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { SharedHeader } from "@/components/ui/shared-header"
import { navItems, dropdownItems, sharedHeaderOptions } from "@/components/ui/header-config"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Tutorial = {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
};

export function TutorialsContent() {
  const [activeCategory, setActiveCategory] = useState("getting-started")
  const [showComingSoon, setShowComingSoon] = useState(true)

  // Tab categories as in the screenshot
  const categories = [
    { id: "getting-started", title: "Getting Started" },
    { id: "data-connections", title: "Data Connections" },
    { id: "analytics", title: "Analytics & Insights" },
    { id: "dashboards", title: "Dashboards" },
    { id: "collaboration", title: "Sharing & Collaboration" },
    { id: "advanced", title: "Advanced Features" },
  ]

  // Tutorials for each tab (example data)
  const tutorials: Record<string, Tutorial[]> = {
    "getting-started": [
      {
        id: "intro",
        title: "Introduction to Treeo",
        description: "Learn the basics of Treeo and how it can help your organization analyze data.",
        duration: "5:30",
        level: "Beginner",
      },
      {
        id: "setup-account",
        title: "Setting Up Your Account",
        description: "A step-by-step guide to setting up your Treeo account and profile.",
        duration: "4:15",
        level: "Beginner",
      },
      {
        id: "navigating-interface",
        title: "Navigating the Interface",
        description: "Explore the Treeo interface and learn how to find what you need quickly.",
        duration: "7:45",
        level: "Beginner",
      },
    ],
    "data-connections": [],
    "analytics": [],
    "dashboards": [],
    "collaboration": [],
    "advanced": [],
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
        <h1 className="text-3xl font-bold mb-2 text-white">Tutorials</h1>
        <p className="text-gray-300 mb-8 max-w-2xl">
          Learn how to use Treeo effectively with our comprehensive tutorials. Whether you're just getting started or looking to master advanced features, we've got you covered.
        </p>

        <div className="relative">
          {/* Blurred COMING SOON overlay (covers everything below title/subheader) */}
          {showComingSoon && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 backdrop-blur-[6px] bg-black/30 rounded-2xl" style={{ minHeight: '100%', top: 0, left: 0, right: 0, bottom: 0 }}>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">COMING SOON....</div>
              <div className="text-lg md:text-xl text-gray-200 text-center max-w-xl mx-auto font-medium">
                Step-by-step tutorials and in-depth videos<br />covering all Treeo features and how to master them will be available soon.
              </div>
            </div>
          )}

          {/* Tab navigation */}
          <div className="flex flex-wrap gap-4 border-b border-gray-700 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-base font-medium border-b-2 transition-colors duration-150
                  ${activeCategory === cat.id
                    ? "border-treeo-500 text-treeo-500"
                    : "border-transparent text-gray-300 hover:text-white hover:border-treeo-500/50"}
                `}
                disabled={showComingSoon}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Tutorials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {tutorials[activeCategory].length === 0 ? (
              <div className="col-span-full text-center text-gray-400 py-12">
                No tutorials available for this category yet.
              </div>
            ) : (
              tutorials[activeCategory].map((tutorial: Tutorial) => (
                <div key={tutorial.id} className="bg-[#181F2E] rounded-lg border border-gray-700 h-full flex flex-col">
                  {/* Video placeholder */}
                  <div className="flex items-center justify-center h-48 bg-gray-800 rounded-t-lg relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-14 w-14 rounded-full bg-black/60 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="16" fill="#101827" fillOpacity="0.7" />
                          <polygon points="13,11 23,16 13,21" fill="#26a249" />
                        </svg>
                      </div>
                    </div>
                    <span className="sr-only">Video Placeholder</span>
                    {/* Duration */}
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                      <svg className="inline-block mr-1" width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#26a249" strokeWidth="2" /><path d="M12 6v6l4 2" stroke="#26a249" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {tutorial.duration}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-lg font-bold text-white mb-0">{tutorial.title}</h2>
                      <span className="px-2 py-1 text-xs bg-treeo-500/20 text-treeo-500 rounded">{tutorial.level}</span>
                    </div>
                    <p className="text-gray-300 mb-4 flex-1">{tutorial.description}</p>
                    <Link href="#" className="text-treeo-500 hover:underline text-sm font-medium flex items-center gap-1">
                      Watch tutorial <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Callout box */}
          <div className="max-w-2xl mx-auto bg-[#181F2E] border border-gray-700 rounded-lg p-8 text-center">
            <h3 className="text-lg font-semibold mb-2 text-white">Can't find what you're looking for?</h3>
            <p className="text-gray-300 mb-4">
              If you need help with something that's not covered in our tutorials, let us know and we'll create a new tutorial for you.
            </p>
            <Button className="bg-treeo-500 hover:bg-treeo-600 text-white px-6 py-2 rounded" size="lg">
              Request a Tutorial
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
