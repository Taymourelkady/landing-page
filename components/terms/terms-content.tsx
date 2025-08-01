"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { SharedHeader } from "@/components/ui/shared-header"
import { navItems, dropdownItems, sharedHeaderOptions } from "@/components/ui/header-config"
import { LandingFooter } from "@/components/landing/landing-footer"
import { useScrollToHash } from "@/hooks/use-scroll-to-hash"

export function TermsContent() {
  const [activeSection, setActiveSection] = useState("terms")
  useScrollToHash()

  const sections = [
    { id: "terms", title: "Terms and Conditions" },
    { id: "use-of-platform", title: "1. Use of the Platform" },
    { id: "user-accounts", title: "2. User Accounts" },
    { id: "subscription-payment", title: "3. Subscription and Payment" },
    { id: "data-privacy", title: "4. Data & Privacy" },
    { id: "intellectual-property", title: "5. Intellectual Property" },
    { id: "limitations-liability", title: "6. Limitations of Liability" },
    { id: "changes-terms", title: "7. Changes to Terms" },
    { id: "termination", title: "8. Termination" },
    { id: "contact", title: "9. Contact" },
  ]

  const refundSections = [
    { id: "subscription-plans", title: "1. Subscription Plans" },
    { id: "free-trial", title: "2. Free Trial" },
    { id: "refund-eligibility", title: "3. Refund Eligibility" },
    { id: "request-refund", title: "4. How to Request a Refund" },
    { id: "refund-process", title: "5. Refund Process" },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      // Get the height of the sticky header
      const header = document.querySelector("header")
      const headerHeight = header ? header.getBoundingClientRect().height : 0

      // Calculate the element's position and adjust for the header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight - 20 // 20px extra padding

      // Scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
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
          <aside className="hidden md:block md:w-64 flex-shrink-0">
            <div className="sticky top-24 w-64 px-4 pb-8">
              <h2 className="text-xl font-bold mb-4 text-white">Legal</h2>
              <nav className="space-y-1 mb-8">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center w-full px-3 py-2 text-left rounded-md ${
                      activeSection === section.id
                        ? "bg-treeo-500/20 text-treeo-500 font-medium"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {activeSection === section.id && <ChevronRight className="h-4 w-4 mr-2 flex-shrink-0" />}
                    <span className={activeSection === section.id ? "ml-0" : "ml-6"}>{section.title}</span>
                  </button>
                ))}
              </nav>
              
              <h2 className="text-xl font-bold mb-4 text-white">Refund Policy</h2>
              <nav className="space-y-1">
                {refundSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center w-full px-3 py-2 text-left rounded-md ${
                      activeSection === section.id
                        ? "bg-treeo-500/20 text-treeo-500 font-medium"
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
          <main className="flex-1 max-w-3xl md:ml-0">
            <h1 className="text-3xl font-bold mb-8 text-white">Terms and Conditions</h1>

            <section id="terms" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Terms and Conditions – Treeo</h2>
              
              <div className="mb-6 text-gray-300">
                <p className="mb-4">
                  Welcome to Treeo!
                </p>
                <p className="mb-4">
                  These Terms and Conditions ("Terms") govern your access to and use of Treeo ("we," "our," or "us"), a data analytics assistant that allows you to query your business data using natural language. By accessing or using our platform, you agree to be bound by these Terms.
                </p>
              </div>

              <div className="space-y-6 text-gray-300">
                <div id="use-of-platform">
                  <h3 className="text-xl font-semibold mb-3 text-white">1. Use of the Platform</h3>
                  <p>You agree to use Treeo in compliance with all applicable laws. You must not misuse, reverse-engineer, or attempt unauthorized access to any part of the platform.</p>
                </div>

                <div id="user-accounts">
                  <h3 className="text-xl font-semibold mb-3 text-white">2. User Accounts</h3>
                  <p>To use Treeo, you may be required to register an account. You are responsible for safeguarding your login credentials and all activity under your account.</p>
                </div>

                <div id="subscription-payment">
                  <h3 className="text-xl font-semibold mb-3 text-white">3. Subscription and Payment</h3>
                  <p>Treeo operates on a subscription model. By subscribing, you authorize us to charge your chosen payment method on a recurring basis. Pricing details are available on our website.</p>
                </div>

                <div id="data-privacy">
                  <h3 className="text-xl font-semibold mb-3 text-white">4. Data & Privacy</h3>
                  <p>Your data is yours. We do not sell or share your data with third parties without your consent. Please review our <a href="/privacy" className="text-treeo-500 hover:underline">Privacy Policy</a> for details on how we store and handle your information.</p>
                </div>

                <div id="intellectual-property">
                  <h3 className="text-xl font-semibold mb-3 text-white">5. Intellectual Property</h3>
                  <p>All content, code, trademarks, and services provided by Treeo are the intellectual property of Treeo or its licensors. You may not copy, distribute, or reproduce any part of the platform without written permission.</p>
                </div>

                <div id="limitations-liability">
                  <h3 className="text-xl font-semibold mb-3 text-white">6. Limitations of Liability</h3>
                  <p>Treeo is provided "as is" without warranties of any kind. We are not liable for any direct or indirect damages resulting from your use or inability to use the platform.</p>
                </div>

                <div id="changes-terms">
                  <h3 className="text-xl font-semibold mb-3 text-white">7. Changes to Terms</h3>
                  <p>We may update these Terms occasionally. Continued use of Treeo after changes constitutes acceptance of the new Terms.</p>
                </div>

                <div id="termination">
                  <h3 className="text-xl font-semibold mb-3 text-white">8. Termination</h3>
                  <p>We reserve the right to suspend or terminate your access if you violate these Terms or engage in behavior that could harm the platform or other users.</p>
                </div>

                <div id="contact">
                  <h3 className="text-xl font-semibold mb-3 text-white">9. Contact</h3>
                  <p>If you have any questions, reach out to us at:</p>
                  <p className="mt-2">📧 <a href="mailto:support@treeo.ai" className="text-treeo-500 hover:underline">support@treeo.ai</a></p>
                </div>
              </div>
            </section>

            <section id="refund-policy" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">💸 Refund Policy – Treeo</h2>
              
              <div className="mb-6 text-gray-300">
                <p className="mb-4">
                  We want you to love using Treeo. If for any reason you are not satisfied with your experience, please review our refund policy below.
                </p>
              </div>

              <div className="space-y-6 text-gray-300">
                <div id="subscription-plans">
                  <h3 className="text-xl font-semibold mb-3 text-white">1. Subscription Plans</h3>
                  <p>Treeo is a subscription-based service. Payments are collected upfront for the selected billing period (monthly or annually).</p>
                </div>

                <div id="free-trial">
                  <h3 className="text-xl font-semibold mb-3 text-white">2. Free Trial</h3>
                  <p>We may offer a free trial. If you cancel before the trial ends, you will not be charged. After the trial, the subscription automatically converts into a paid plan unless canceled.</p>
                </div>

                <div id="refund-eligibility">
                  <h3 className="text-xl font-semibold mb-3 text-white">3. Refund Eligibility</h3>
                  <p>Refunds will only be granted in the following cases:</p>
                  <ul className="mt-2 list-disc list-inside space-y-1 ml-4">
                    <li>You were charged in error.</li>
                    <li>You experienced a critical technical issue and contacted our support without resolution within 7 days.</li>
                    <li>Your request is made within 14 days of initial payment.</li>
                  </ul>
                  <p className="mt-3">We do not offer refunds for:</p>
                  <ul className="mt-2 list-disc list-inside space-y-1 ml-4">
                    <li>Partial use of the service</li>
                    <li>Downgrades or cancellations mid-billing cycle</li>
                    <li>Change of mind</li>
                  </ul>
                </div>

                <div id="request-refund">
                  <h3 className="text-xl font-semibold mb-3 text-white">4. How to Request a Refund</h3>
                  <p>Email us at <a href="mailto:support@treeo.ai" className="text-treeo-500 hover:underline">support@treeo.ai</a> with:</p>
                  <ul className="mt-2 list-disc list-inside space-y-1 ml-4">
                    <li>Your account email</li>
                    <li>Payment date and method</li>
                    <li>Reason for the refund request</li>
                  </ul>
                  <p className="mt-3">Our team will respond within 3 business days.</p>
                </div>

                <div id="refund-process">
                  <h3 className="text-xl font-semibold mb-3 text-white">5. Refund Process</h3>
                  <p>Approved refunds will be issued to your original payment method within 7–10 business days.</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <LandingFooter />
    </div>
  )
} 