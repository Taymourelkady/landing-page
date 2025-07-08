"use client"

import { useState } from "react"
<<<<<<< HEAD
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
=======
import { Logo } from "@/components/ui/logo"
import { Play, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TutorialsContent() {
  const [activeCategory, setActiveCategory] = useState("getting-started")

>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
  const categories = [
    { id: "getting-started", title: "Getting Started" },
    { id: "data-connections", title: "Data Connections" },
    { id: "analytics", title: "Analytics & Insights" },
    { id: "dashboards", title: "Dashboards" },
<<<<<<< HEAD
    { id: "collaboration", title: "Sharing & Collaboration" },
    { id: "advanced", title: "Advanced Features" },
  ]

  // Tutorials for each tab (example data)
  const tutorials: Record<string, Tutorial[]> = {
=======
    { id: "sharing", title: "Sharing & Collaboration" },
    { id: "advanced", title: "Advanced Features" },
  ]

  const tutorials = {
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
    "getting-started": [
      {
        id: "intro",
        title: "Introduction to Treeo",
        description: "Learn the basics of Treeo and how it can help your organization analyze data.",
        duration: "5:30",
        level: "Beginner",
      },
      {
<<<<<<< HEAD
        id: "setup-account",
=======
        id: "setup",
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
        title: "Setting Up Your Account",
        description: "A step-by-step guide to setting up your Treeo account and profile.",
        duration: "4:15",
        level: "Beginner",
      },
      {
<<<<<<< HEAD
        id: "navigating-interface",
=======
        id: "interface",
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
        title: "Navigating the Interface",
        description: "Explore the Treeo interface and learn how to find what you need quickly.",
        duration: "7:45",
        level: "Beginner",
      },
    ],
<<<<<<< HEAD
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
=======
    "data-connections": [
      {
        id: "connect-database",
        title: "Connecting to a Database",
        description: "Learn how to connect Treeo to your existing databases.",
        duration: "8:20",
        level: "Intermediate",
      },
      {
        id: "import-csv",
        title: "Importing CSV Files",
        description: "How to import and analyze data from CSV files.",
        duration: "6:10",
        level: "Beginner",
      },
      {
        id: "api-integration",
        title: "API Integrations",
        description: "Connect Treeo to third-party services using our API integrations.",
        duration: "12:45",
        level: "Advanced",
      },
    ],
    analytics: [
      {
        id: "basic-queries",
        title: "Basic Queries",
        description: "Learn how to ask questions about your data using natural language.",
        duration: "9:30",
        level: "Beginner",
      },
      {
        id: "advanced-queries",
        title: "Advanced Query Techniques",
        description: "Master complex queries to get deeper insights from your data.",
        duration: "14:20",
        level: "Advanced",
      },
      {
        id: "visualizations",
        title: "Creating Visualizations",
        description: "Turn your data into compelling visualizations with Treeo.",
        duration: "10:15",
        level: "Intermediate",
      },
    ],
    dashboards: [
      {
        id: "create-dashboard",
        title: "Creating Your First Dashboard",
        description: "Learn how to build a dashboard to monitor your key metrics.",
        duration: "11:05",
        level: "Intermediate",
      },
      {
        id: "customize-dashboard",
        title: "Customizing Dashboards",
        description: "Make your dashboards more effective with customization options.",
        duration: "8:50",
        level: "Intermediate",
      },
      {
        id: "automated-reports",
        title: "Setting Up Automated Reports",
        description: "Schedule regular reports to be delivered to your team.",
        duration: "7:30",
        level: "Intermediate",
      },
    ],
    sharing: [
      {
        id: "share-insights",
        title: "Sharing Insights",
        description: "Learn how to share your findings with team members and stakeholders.",
        duration: "5:45",
        level: "Beginner",
      },
      {
        id: "collaboration",
        title: "Collaborative Analysis",
        description: "Work together with your team to analyze data and make decisions.",
        duration: "9:20",
        level: "Intermediate",
      },
      {
        id: "permissions",
        title: "Managing Permissions",
        description: "Control who can access and modify your data and insights.",
        duration: "6:55",
        level: "Advanced",
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

  return (
    <div className="min-h-screen bg-[#101827] text-white">
      {/* Header with fixed navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-700 bg-[#101827]/95 backdrop-blur supports-[backdrop-filter]:bg-[#101827]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/landing"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white hover:bg-emerald-500/10 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white hover:bg-emerald-500/10 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/tutorials"
              className="text-sm font-medium text-white transition-colors hover:bg-emerald-500/10 px-3 py-2 rounded-md"
            >
              Tutorials
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Sign In Link */}
            <a
              href="https://app.treeo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-sm font-medium text-gray-300 transition-colors hover:text-white hover:bg-emerald-500/10 px-3 py-2 rounded-md"
            >
              Sign In
            </a>

            {/* Book a Demo Button */}
            <Link href="/contact">
              <Button className="hidden md:flex bg-emerald-500 hover:bg-emerald-600">Book a Demo</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-2 text-white">Tutorials</h1>
        <p className="text-gray-300 mb-8 max-w-3xl">
          Learn how to use Treeo effectively with our comprehensive tutorials. Whether you're just getting started or
          looking to master advanced features, we've got you covered.
        </p>

        {/* Category tabs */}
        <div className="border-b border-gray-700 mb-8">
          <div className="flex overflow-x-auto pb-1 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 font-medium whitespace-nowrap ${
                  activeCategory === category.id
                    ? "text-emerald-500 border-b-2 border-emerald-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tutorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials[activeCategory as keyof typeof tutorials].map((tutorial) => (
            <div
              key={tutorial.id}
              className="border border-gray-700 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-colors bg-[#1A1F2E]"
            >
              <div className="relative bg-[#0c1420] aspect-video flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <Play className="h-8 w-8 text-emerald-500 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {tutorial.duration}
                </div>
                <p className="text-gray-500 text-sm">Video Placeholder</p>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-white">{tutorial.title}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      tutorial.level === "Beginner"
                        ? "bg-emerald-500/20 text-emerald-500"
                        : tutorial.level === "Intermediate"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    {tutorial.level}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{tutorial.description}</p>
                <button className="text-emerald-500 font-medium text-sm flex items-center hover:text-emerald-400">
                  Watch tutorial <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Request tutorial section */}
        <div className="mt-16 bg-[#1A1F2E] rounded-lg p-6 max-w-3xl mx-auto text-center border border-gray-700">
          <h2 className="text-xl font-bold mb-2 text-white">Can't find what you're looking for?</h2>
          <p className="text-gray-300 mb-4">
            If you need help with something that's not covered in our tutorials, let us know and we'll create a new
            tutorial for you.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Request a Tutorial
          </button>
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
        </div>
      </div>
    </div>
  )
}
