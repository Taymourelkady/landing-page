"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { SharedHeader } from "@/components/ui/shared-header"
import { navItems, dropdownItems, sharedHeaderOptions } from "@/components/ui/header-config"
import { LandingFooter } from "@/components/landing/landing-footer"

export function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("introduction")

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "data-collection", title: "Data Collection" },
    { id: "data-security", title: "Data Security" },
    { id: "encryption-methods", title: "Encryption Methods" },
    { id: "data-storage", title: "Data Storage" },
    { id: "data-access", title: "Data Access" },
    { id: "compliance", title: "Compliance" },
    { id: "your-rights", title: "Your Rights" },
    { id: "policy-updates", title: "Policy Updates" },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
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

      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block md:w-64 flex-shrink-0">
            <div className="fixed top-24 left-0 w-64 h-[calc(100vh-6rem)] overflow-y-auto px-4">
              <h2 className="text-xl font-bold mb-4 text-white">Privacy Policy</h2>
              <nav className="space-y-1">
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
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 max-w-3xl md:ml-0">
            <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>

            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
              <p className="mb-4 text-gray-300">
                At Treeo, we take your privacy and data security seriously. This Privacy Policy outlines our commitment to protecting your information and details the technical measures we implement to ensure your data remains secure.
              </p>
              <p className="mb-4 text-gray-300">
                This policy applies to all services offered by Treeo, including our website, analytics platform, and any other services we provide. By using our services, you consent to the collection and use of information as described in this policy.
              </p>
            </section>

            <section id="data-collection" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Collection</h2>
              <p className="mb-4 text-gray-300">
                We collect information to provide better services to our users. The types of information we collect include:
              </p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-2">
                <li><b>Account Information:</b> When you create an account, we collect your name, email address, and other contact information.</li>
                <li><b>Usage Data:</b> We collect information about how you use our services, including queries executed, features used, and interaction patterns.</li>
                <li><b>Data Sources:</b> When you connect data sources to our platform, we process the data contained within those sources to provide analytics capabilities.</li>
                <li><b>Technical Information:</b> We collect information about the devices and browsers you use to access our services.</li>
              </ul>
              <p className="mb-4 text-gray-300">
                All data collection is performed with explicit user consent and in compliance with applicable data protection regulations.
              </p>
            </section>

            <section id="data-security" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Security</h2>
              <p className="mb-4 text-gray-300">
                We implement a comprehensive security program that includes administrative, technical, and physical safeguards designed to protect your data from unauthorized access, disclosure, alteration, and destruction.
              </p>
              <p className="mb-4 text-gray-300">Our security infrastructure includes:</p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-2">
                <li><b>Network Security:</b> We employ firewalls, intrusion detection systems, and network segmentation to protect our infrastructure.</li>
                <li><b>Access Controls:</b> We implement strict access controls based on the principle of least privilege, ensuring that employees only have access to the data they need to perform their job functions.</li>
                <li><b>Security Monitoring:</b> Our systems are continuously monitored for suspicious activities and potential security breaches.</li>
                <li><b>Vulnerability Management:</b> We regularly conduct security assessments and penetration testing to identify and address potential vulnerabilities.</li>
              </ul>
            </section>

            <section id="encryption-methods" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Encryption Methods</h2>
              <p className="mb-4 text-gray-300">
                We use industry-standard encryption technologies to protect your data:
              </p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-2">
                <li><b>Data in Transit:</b> All data transmitted between your browser and our servers is encrypted using TLS 1.2+ with strong cipher suites. This ensures that your data cannot be intercepted during transmission.</li>
                <li><b>Data at Rest:</b> All data stored in our databases and file systems is encrypted using AES-256 encryption. This provides protection against unauthorized access to the underlying storage systems.</li>
                <li><b>Key Management:</b> Encryption keys are securely managed using a key management service that rotates keys regularly and implements strict access controls.</li>
              </ul>
              <p className="mb-4 text-gray-300">
                Our encryption practices are regularly reviewed and updated to ensure they meet or exceed industry standards.
              </p>
            </section>

            <section id="data-storage" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Storage</h2>
              <p className="mb-4 text-gray-300">
                We store your data in secure, SOC 2 compliant data centers with the following characteristics:
              </p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-2">
                <li><b>Physical Security:</b> Our data centers implement multiple layers of physical security, including 24/7 monitoring, biometric access controls, and video surveillance.</li>
                <li><b>Redundancy:</b> Data is stored redundantly across multiple locations to ensure availability and prevent data loss in case of hardware failures.</li>
                <li><b>Isolation:</b> Customer data is logically isolated to prevent unauthorized access between different customers.</li>
                <li><b>Backup Procedures:</b> Regular backups are performed and stored securely to enable recovery in case of data corruption or loss.</li>
              </ul>
              <p className="mb-4 text-gray-300">
                We retain your data only for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section id="data-access" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Access</h2>
              <p className="mb-4 text-gray-300">
                Access to your data is strictly controlled:
              </p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-2">
                <li><b>Authentication:</b> We implement multi-factor authentication for all access to our systems and your data.</li>
                <li><b>Authorization:</b> Access to customer data is granted on a need-to-know basis and is reviewed regularly.</li>
                <li><b>Audit Logging:</b> All access to customer data is logged and monitored for suspicious activities.</li>
                <li><b>Third-Party Access:</b> We do not provide third parties with access to your data unless explicitly authorized by you or required by law.</li>
              </ul>
            </section>

            <section id="compliance" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Compliance</h2>
              <p className="mb-4 text-gray-300">
                We comply with applicable data protection regulations and industry standards:
              </p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-2">
                <li><b>GDPR:</b> For users in the European Union, we comply with the General Data Protection Regulation (GDPR).</li>
                <li><b>CCPA:</b> For users in California, we comply with the California Consumer Privacy Act (CCPA).</li>
                <li><b>SOC 2:</b> Our security controls are designed to meet SOC 2 requirements for security, availability, and confidentiality.</li>
                <li><b>Regular Audits:</b> We conduct regular internal and external audits of our security practices to ensure compliance with our policies and applicable regulations.</li>
              </ul>
            </section>

            <section id="your-rights" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
              <p className="mb-4 text-gray-300">
                Depending on your location, you may have certain rights regarding your personal data:
              </p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-2">
                <li><b>Access:</b> You can request access to the personal data we hold about you.</li>
                <li><b>Correction:</b> You can request that we correct inaccurate or incomplete data.</li>
                <li><b>Deletion:</b> You can request that we delete your personal data under certain circumstances.</li>
                <li><b>Portability:</b> You can request a copy of your data in a structured, machine-readable format.</li>
                <li><b>Objection:</b> You can object to our processing of your personal data under certain circumstances.</li>
              </ul>
              <p className="mb-4 text-gray-300">
                To exercise these rights, please contact us at <a href="mailto:support@treeo.ai" className="text-treeo-500 hover:underline">support@treeo.ai</a>.
              </p>
            </section>

            <section id="policy-updates" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Policy Updates</h2>
              <p className="mb-4 text-gray-300">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
              </p>
              <ul className="mb-4 text-gray-300 list-disc list-inside space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Sending an email to the address associated with your account</li>
                <li>Displaying a notice on our platform</li>
              </ul>
              <p className="mb-4 text-gray-300">
                We encourage you to review this policy periodically to stay informed about our data protection practices.
              </p>
              <hr className="my-8 border-gray-700" />
              <div className="text-gray-400 text-sm mb-2">Last updated: May 8, 2023</div>
              <div className="text-gray-300 text-sm">
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@treeo.ai" className="text-treeo-500 hover:underline">support@treeo.ai</a>.
              </div>
            </section>
          </main>
        </div>
      </div>
      <LandingFooter />
    </div>
  )
}
