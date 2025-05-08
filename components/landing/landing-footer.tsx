"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/ui/logo"

export function LandingFooter() {
  const pathname = usePathname()
  const isAboutPage = pathname === "/about"
  const currentYear = new Date().getFullYear()

  // Determine the base path for links
  const basePath = isAboutPage ? "/landing" : ""

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: `${basePath}#features` },
        { label: "Pricing", href: `${basePath}#pricing` },
        { label: "Demo", href: `${basePath}#demo` },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/documentation" },
        { label: "Tutorials", href: "/tutorials" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ]

  return (
    <footer className="bg-[#0c1420] border-t border-gray-700">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Treeo is an AI-powered analytics assistant that acts like a chat-based data analyst, making data
              accessible to everyone in your organization.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/107068809/admin/dashboard/"
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="font-medium mb-4 text-white">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-400 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {currentYear} Treeo. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-gray-400 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
