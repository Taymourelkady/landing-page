import Link from "next/link"
import { Logo } from "@/components/ui/logo"

export function LandingFooter() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Demo", href: "#demo" },
        { label: "Roadmap", href: "/roadmap" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Tutorials", href: "/tutorials" },
        { label: "Blog", href: "/blog" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Treeo is an AI-powered analytics assistant that acts like a chat-based data analyst, making data
              accessible to everyone in your organization.
            </p>
            <div className="flex gap-4">
              <Link href="" className="text-muted-foreground hover:text-foreground">
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/company/107068809/admin/dashboard/"
                className="text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="font-medium mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/40 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Treeo. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
