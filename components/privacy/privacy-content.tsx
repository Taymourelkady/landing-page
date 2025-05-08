"use client"

import { useState } from "react"
import { Logo } from "@/components/ui/logo"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("introduction")

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "data-collection", title: "Data Collection" },
    { id: "data-security", title: "Data Security" },
    { id: "encryption", title: "Encryption Methods" },
    { id: "storage", title: "Data Storage" },
    { id: "access", title: "Data Access" },
    { id: "compliance", title: "Compliance" },
    { id: "rights", title: "Your Rights" },
    { id: "updates", title: "Policy Updates" },
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
              href="/privacy"
              className="text-sm font-medium text-white transition-colors hover:bg-emerald-500/10 px-3 py-2 rounded-md"
            >
              Privacy
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
                At Treeo, we take your privacy and data security seriously. This Privacy Policy outlines our commitment
                to protecting your information and details the technical measures we implement to ensure your data
                remains secure.
              </p>
              <p className="text-gray-300">
                This policy applies to all services offered by Treeo, including our website, analytics platform, and any
                other services we provide. By using our services, you consent to the collection and use of information
                as described in this policy.
              </p>
            </section>

            <section id="data-collection" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Collection</h2>
              <p className="mb-4 text-gray-300">
                We collect information to provide better services to our users. The types of information we collect
                include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
                <li>
                  <strong className="text-white">Account Information:</strong> When you create an account, we collect
                  your name, email address, and other contact information.
                </li>
                <li>
                  <strong className="text-white">Usage Data:</strong> We collect information about how you use our
                  services, including queries executed, features used, and interaction patterns.
                </li>
                <li>
                  <strong className="text-white">Data Sources:</strong> When you connect data sources to our platform,
                  we process the data contained within those sources to provide analytics capabilities.
                </li>
                <li>
                  <strong className="text-white">Technical Information:</strong> We collect information about the
                  devices and browsers you use to access our services.
                </li>
              </ul>
              <p className="text-gray-300">
                All data collection is performed with explicit user consent and in compliance with applicable data
                protection regulations.
              </p>
            </section>

            <section id="data-security" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Security</h2>
              <p className="mb-4 text-gray-300">
                We implement a comprehensive security program that includes administrative, technical, and physical
                safeguards designed to protect your data from unauthorized access, disclosure, alteration, and
                destruction.
              </p>
              <p className="mb-4 text-gray-300">Our security infrastructure includes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
                <li>
                  <strong className="text-white">Network Security:</strong> We employ firewalls, intrusion detection
                  systems, and network segmentation to protect our infrastructure.
                </li>
                <li>
                  <strong className="text-white">Access Controls:</strong> We implement strict access controls based on
                  the principle of least privilege, ensuring that employees only have access to the data they need to
                  perform their job functions.
                </li>
                <li>
                  <strong className="text-white">Security Monitoring:</strong> Our systems are continuously monitored
                  for suspicious activities and potential security breaches.
                </li>
                <li>
                  <strong className="text-white">Vulnerability Management:</strong> We regularly conduct security
                  assessments and penetration testing to identify and address potential vulnerabilities.
                </li>
              </ul>
            </section>

            <section id="encryption" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Encryption Methods</h2>
              <p className="mb-4 text-gray-300">
                We use industry-standard encryption technologies to protect your data:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
                <li>
                  <strong className="text-white">Data in Transit:</strong> All data transmitted between your browser and
                  our servers is encrypted using TLS 1.2+ with strong cipher suites. This ensures that your data cannot
                  be intercepted during transmission.
                </li>
                <li>
                  <strong className="text-white">Data at Rest:</strong> All data stored in our databases and file
                  systems is encrypted using AES-256 encryption. This provides protection against unauthorized access to
                  the underlying storage systems.
                </li>
                <li>
                  <strong className="text-white">Key Management:</strong> Encryption keys are securely managed using a
                  key management service that rotates keys regularly and implements strict access controls.
                </li>
              </ul>
              <p className="text-gray-300">
                Our encryption practices are regularly reviewed and updated to ensure they meet or exceed industry
                standards.
              </p>
            </section>

            <section id="storage" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Storage</h2>
              <p className="mb-4 text-gray-300">
                We store your data in secure, SOC 2 compliant data centers with the following characteristics:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
                <li>
                  <strong className="text-white">Physical Security:</strong> Our data centers implement multiple layers
                  of physical security, including 24/7 monitoring, biometric access controls, and video surveillance.
                </li>
                <li>
                  <strong className="text-white">Redundancy:</strong> Data is stored redundantly across multiple
                  locations to ensure availability and prevent data loss in case of hardware failures.
                </li>
                <li>
                  <strong className="text-white">Isolation:</strong> Customer data is logically isolated to prevent
                  unauthorized access between different customers.
                </li>
                <li>
                  <strong className="text-white">Backup Procedures:</strong> Regular backups are performed and stored
                  securely to enable recovery in case of data corruption or loss.
                </li>
              </ul>
              <p className="text-gray-300">
                We retain your data only for as long as necessary to provide our services and fulfill the purposes
                outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section id="access" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Access</h2>
              <p className="mb-4 text-gray-300">Access to your data is strictly controlled:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
                <li>
                  <strong className="text-white">Authentication:</strong> We implement multi-factor authentication for
                  all access to our systems and your data.
                </li>
                <li>
                  <strong className="text-white">Authorization:</strong> Access to customer data is granted on a
                  need-to-know basis and is reviewed regularly.
                </li>
                <li>
                  <strong className="text-white">Audit Logging:</strong> All access to customer data is logged and
                  monitored for suspicious activities.
                </li>
                <li>
                  <strong className="text-white">Third-Party Access:</strong> We do not provide third parties with
                  access to your data unless explicitly authorized by you or required by law.
                </li>
              </ul>
            </section>

            <section id="compliance" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Compliance</h2>
              <p className="mb-4 text-gray-300">
                We comply with applicable data protection regulations and industry standards:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
                <li>
                  <strong className="text-white">GDPR:</strong> For users in the European Union, we comply with the
                  General Data Protection Regulation (GDPR).
                </li>
                <li>
                  <strong className="text-white">CCPA:</strong> For users in California, we comply with the California
                  Consumer Privacy Act (CCPA).
                </li>
                <li>
                  <strong className="text-white">SOC 2:</strong> Our security controls are designed to meet SOC 2
                  requirements for security, availability, and confidentiality.
                </li>
                <li>
                  <strong className="text-white">Regular Audits:</strong> We conduct regular internal and external
                  audits of our security practices to ensure compliance with our policies and applicable regulations.
                </li>
              </ul>
            </section>

            <section id="rights" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
              <p className="mb-4 text-gray-300">
                Depending on your location, you may have certain rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
                <li>
                  <strong className="text-white">Access:</strong> You can request access to the personal data we hold
                  about you.
                </li>
                <li>
                  <strong className="text-white">Correction:</strong> You can request that we correct inaccurate or
                  incomplete data.
                </li>
                <li>
                  <strong className="text-white">Deletion:</strong> You can request that we delete your personal data
                  under certain circumstances.
                </li>
                <li>
                  <strong className="text-white">Portability:</strong> You can request a copy of your data in a
                  structured, machine-readable format.
                </li>
                <li>
                  <strong className="text-white">Objection:</strong> You can object to our processing of your personal
                  data under certain circumstances.
                </li>
              </ul>
              <p className="text-gray-300">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@treeo.ai" className="text-emerald-500 hover:underline">
                  privacy@treeo.ai
                </a>
                .
              </p>
            </section>

            <section id="updates" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Policy Updates</h2>
              <p className="mb-4 text-gray-300">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
                <li>Posting the updated policy on our website</li>
                <li>Sending an email to the address associated with your account</li>
                <li>Displaying a notice on our platform</li>
              </ul>
              <p className="text-gray-300">
                We encourage you to review this policy periodically to stay informed about our data protection
                practices.
              </p>
            </section>

            <div className="border-t border-gray-700 pt-8 mt-12">
              <p className="text-gray-400">Last updated: May 8, 2023</p>
              <p className="mt-4 text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@treeo.ai" className="text-emerald-500 hover:underline">
                  privacy@treeo.ai
                </a>
                .
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
