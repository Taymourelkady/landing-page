"use client"

import { useState } from "react"
<<<<<<< HEAD
import { ChevronRight } from "lucide-react"
import { SharedHeader } from "@/components/ui/shared-header"
import { navItems, dropdownItems, sharedHeaderOptions } from "@/components/ui/header-config"
import { LandingFooter } from "@/components/landing/landing-footer"
=======
import { Logo } from "@/components/ui/logo"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c

export function DocumentationContent() {
  const [activeSection, setActiveSection] = useState("introduction")

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "getting-started", title: "Getting Started" },
    { id: "data-connections", title: "Data Connections" },
    { id: "querying-data", title: "Querying Data" },
    { id: "visualizations", title: "Visualizations" },
    { id: "api-reference", title: "API Reference" },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
<<<<<<< HEAD
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
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
=======
      element.scrollIntoView({ behavior: "smooth" })
    }
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
              href="/documentation"
              className="text-sm font-medium text-white transition-colors hover:bg-emerald-500/10 px-3 py-2 rounded-md"
            >
              Documentation
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
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c

      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
<<<<<<< HEAD
          <aside className="hidden md:block md:w-64 flex-shrink-0">
            <div className="fixed top-24 left-0 w-64 h-[calc(100vh-6rem)] overflow-y-auto px-4">
=======
          <aside className="md:w-64 flex-shrink-0">
            <div className="sticky top-8">
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              <h2 className="text-xl font-bold mb-4 text-white">Documentation</h2>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
<<<<<<< HEAD
                                            className={`flex items-center w-full px-3 py-2 text-left rounded-md ${
                          activeSection === section.id
                            ? "bg-treeo-500/20 text-treeo-500 font-medium"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`}
=======
                    className={`flex items-center w-full px-3 py-2 text-left rounded-md ${
                      activeSection === section.id
                        ? "bg-emerald-500/20 text-emerald-500 font-medium"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
                  >
                    {activeSection === section.id && <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />}
                    <span className={activeSection === section.id ? "ml-0" : "ml-6"}>{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
<<<<<<< HEAD
          <main className="flex-1 max-w-3xl md:ml-0">
=======
          <main className="flex-1 max-w-3xl">
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
            <h1 className="text-3xl font-bold mb-8 text-white">Documentation</h1>

            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
              <p className="mb-4 text-gray-300">
<<<<<<< HEAD
                Welcome to the Treeo documentation! This page offers a clear overview of Treeo and its main strengths.<br />
                Treeo is a cloud-powered AI assistant that helps teams explore data, build dashboards, and share insights in minutes.
=======
                Welcome to the Treeo documentation! This section provides an overview of Treeo and its capabilities.
              </p>
              <p className="text-gray-300">
                Treeo is an AI-powered analytics assistant that helps you explore and understand your data.
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </p>
            </section>

            <section id="getting-started" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Getting Started</h2>
<<<<<<< HEAD
              <p className="mb-4 text-gray-300">Follow these steps to begin using Treeo:</p>
              <ol className="mb-4 text-gray-300 list-decimal list-inside space-y-1">
                <li>Sign up with your email or a single sign-on provider (Ex: google).</li>
                <li>Create your first workspace to keep projects, boards, and users organised.</li>
                <li>Connect a data source by entering read-only credentials and pressing "test connection."</li>
                <li>Ask your first question in the chat box or open the visual builder to drag fields.</li>
                <li>Save the result as a chart and place it on a board.</li>
                <li>Invite teammates and assign roles so they can view or edit content.</li>
              </ol>
=======
              <p className="mb-4 text-gray-300">
                Learn how to set up your Treeo account and connect to your data sources.
              </p>
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
            </section>

            <section id="data-connections" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Connections</h2>
<<<<<<< HEAD
              <p className="mb-4 text-gray-300">Treeo connects to popular data platforms:</p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-1">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Google BigQuery</li>
                <li>Snowflake</li>
                <li>Amazon Redshift</li>
                <li>CSV or Parquet file upload</li>
              </ul>
              <p className="mb-4 text-gray-300">
                Connections use encrypted transport and credentials are stored with strong hashing. Treeo never reads or writes data outside the granted scope.
=======
              <p className="mb-4 text-gray-300">
                Connect to various data sources, including databases, data warehouses, and APIs.
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </p>
            </section>

            <section id="querying-data" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Querying Data</h2>
<<<<<<< HEAD
              <p className="mb-4 text-gray-300">You can obtain answers in two flexible ways:</p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-1">
                <li><b>Natural language chat:</b> Type a question such as "What was our total revenue last quarter?" and Treeo converts it to SQL automatically.</li>
                <li><b>Visual query builder:</b> Drag tables, choose columns, and add filters without writing code.</li>
              </ul>
              <p className="mb-4 text-gray-300">
                A full SQL editor is available for advanced users. Query history lets you rerun and favourite results at any time.
              </p>
=======
              <p className="mb-4 text-gray-300">Use natural language to query your data and get instant insights.</p>
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
            </section>

            <section id="visualizations" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Visualizations</h2>
<<<<<<< HEAD
              <p className="mb-4 text-gray-300">Turn any query into a chart with one click.<br />Supported chart types include:</p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-1">
                <li>Bar</li>
                <li>Line</li>
                <li>Pie</li>
                <li>Area</li>
                <li>Scatter</li>
              </ul>
              <p className="mb-4 text-gray-300">
                Resize, style, and label your charts in the side panel. Dashboards refresh in real time when data changes and can be exported as PNG or CSV.
              </p>
=======
              <p className="mb-4 text-gray-300">Create charts and graphs to visualize your data and identify trends.</p>
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
            </section>

            <section id="api-reference" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">API Reference</h2>
<<<<<<< HEAD
              <p className="mb-4 text-gray-300">Use the public REST API to automate routine tasks.<br />Authentication</p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-1">
                <li>POST /api/auth/login</li>
                <li>POST /api/auth/signup</li>
              </ul>
              <p className="mb-2 text-gray-300 font-semibold">Workspaces</p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-1">
                <li>GET /api/workspaces</li>
                <li>POST /api/workspaces</li>
                <li>GET /api/workspaces/[id]</li>
              </ul>
              <p className="mb-2 text-gray-300 font-semibold">Queries</p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-1">
                <li>POST /api/queries</li>
                <li>GET /api/queries/[id]</li>
                <li>POST /api/queries/[id]/execute</li>
              </ul>
              <p className="mb-2 text-gray-300 font-semibold">Metrics</p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-1">
                <li>GET /api/metrics</li>
                <li>POST /api/metrics/[id]/calculate</li>
              </ul>
              <p className="mb-4 text-gray-300">
                All responses are JSON and protected with bearer tokens. See the developer portal for detailed schemas.
=======
              <p className="mb-4 text-gray-300">
                Explore the Treeo API and learn how to integrate it into your applications.
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              </p>
            </section>
          </main>
        </div>
      </div>
<<<<<<< HEAD
      <LandingFooter />
=======
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
    </div>
  )
}
