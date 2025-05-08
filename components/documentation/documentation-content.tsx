"\"use client"

import { useState } from "react"
import { Logo } from "@/components/ui/logo"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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

      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-xl font-bold mb-4 text-white">Documentation</h2>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center w-full px-3 py-2 text-left rounded-md ${
                      activeSection === section.id
                        ? "bg-emerald-500/20 text-emerald-500 font-medium"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {activeSection === section.id && <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />}
                    <span className={activeSection === section.id ? "ml-0" : "ml-6"}>{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8 text-white">Documentation</h1>

            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
              <p className="mb-4 text-gray-300">
                Welcome to the Treeo documentation! This section provides an overview of Treeo and its capabilities.
              </p>
              <p className="text-gray-300">
                Treeo is an AI-powered analytics assistant that helps you explore and understand your data.
              </p>
            </section>

            <section id="getting-started" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Getting Started</h2>
              <p className="mb-4 text-gray-300">
                Learn how to set up your Treeo account and connect to your data sources.
              </p>
            </section>

            <section id="data-connections" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Connections</h2>
              <p className="mb-4 text-gray-300">
                Connect to various data sources, including databases, data warehouses, and APIs.
              </p>
            </section>

            <section id="querying-data" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Querying Data</h2>
              <p className="mb-4 text-gray-300">Use natural language to query your data and get instant insights.</p>
            </section>

            <section id="visualizations" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Visualizations</h2>
              <p className="mb-4 text-gray-300">Create charts and graphs to visualize your data and identify trends.</p>
            </section>

            <section id="api-reference" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">API Reference</h2>
              <p className="mb-4 text-gray-300">
                Explore the Treeo API and learn how to integrate it into your applications.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
