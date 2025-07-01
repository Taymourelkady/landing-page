"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { SharedHeader } from "@/components/ui/shared-header"
import { navItems, dropdownItems, sharedHeaderOptions } from "@/components/ui/header-config"

export function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("introduction")

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-collection", title: "Information Collection" },
    { id: "information-usage", title: "Information Usage" },
    { id: "information-sharing", title: "Information Sharing" },
    { id: "data-security", title: "Data Security" },
    { id: "your-rights", title: "Your Rights" },
    { id: "contact-us", title: "Contact Us" },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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

      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-xl font-bold mb-4 text-white">Privacy Policy</h2>
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
            <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>

            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
              <p className="mb-4 text-gray-300">
                This Privacy Policy describes how Treeo collects, uses, and protects your personal information.
              </p>
            </section>

            <section id="information-collection" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Information Collection</h2>
              <p className="mb-4 text-gray-300">
                We collect information you provide directly to us, such as when you create an account or contact us.
              </p>
            </section>

            <section id="information-usage" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Information Usage</h2>
              <p className="mb-4 text-gray-300">
                We use the information we collect to provide, maintain, and improve our services.
              </p>
            </section>

            <section id="information-sharing" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Information Sharing</h2>
              <p className="mb-4 text-gray-300">
                We do not sell, trade, or otherwise transfer your personal information to third parties.
              </p>
            </section>

            <section id="data-security" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Security</h2>
              <p className="mb-4 text-gray-300">
                We implement appropriate security measures to protect your personal information.
              </p>
            </section>

            <section id="your-rights" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
              <p className="mb-4 text-gray-300">
                You have the right to access, update, or delete your personal information.
              </p>
            </section>

            <section id="contact-us" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="mb-4 text-gray-300">
                If you have any questions about this Privacy Policy, please contact us.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
