"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/ui/logo"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dropdownItems = [
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
  ]

  const navItems = [
    { label: "Design Partners", href: "/design-partners" },
    { label: "About", href: "/about" },
  ]

  // Function to handle smooth scrolling for hash links
  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links on the current page
    if (href.startsWith("#")) {
      e.preventDefault()

      const targetId = href.substring(1)
      const element = document.getElementById(targetId)

      if (element) {
        // Get header height for offset
        const header = document.querySelector("header")
        const headerHeight = header ? header.getBoundingClientRect().height : 0

        // Calculate position
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerHeight - 20

        // Scroll
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })

        // Update URL without triggering a scroll
        window.history.pushState(null, "", href)

        // Close mobile menu if open
        if (isMenuOpen) {
          setIsMenuOpen(false)
        }
      }
    } else {
      // For non-hash links, ensure we scroll to top after navigation
      // This will be handled by the PageTransition component
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-700 bg-[#101827]/95 backdrop-blur supports-[backdrop-filter]:bg-[#101827]/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Home Link + Dropdown */}
          <div className="relative flex items-center">
            {/* Home text as a link */}
            <Link
              href="/landing"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white hover:bg-emerald-500/10 px-3 py-2 rounded-md"
            >
              Home
            </Link>

            {/* Dropdown for sections */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center ml-1 text-sm font-medium text-gray-300 transition-colors hover:text-white hover:bg-emerald-500/10 p-1 rounded-md">
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-[#1A1F2E] border-gray-700 text-white">
                {dropdownItems.map((item) => (
                  <DropdownMenuItem key={item.label} className="focus:bg-emerald-500/20 focus:text-white">
                    <a
                      href={item.href}
                      onClick={(e) => handleHashClick(e, item.href)}
                      className="w-full py-1 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Regular Nav Items */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white hover:bg-emerald-500/10 px-3 py-2 rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Sign In Link - Updated to open in new tab */}
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

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#1A1F2E] border-gray-700">
              <nav className="flex flex-col gap-4 mt-8">
                {/* Home section with nested links */}
                <div>
                  <div className="flex items-center">
                    <Link
                      href="/landing"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-medium text-white hover:text-emerald-500"
                    >
                      Home
                    </Link>
                  </div>
                  <div className="pl-4 border-l border-gray-700 space-y-2 mt-2">
                    {dropdownItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleHashClick(e, item.href)}
                        className="block text-base text-gray-300 hover:text-emerald-500"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Regular Nav Items */}
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-white hover:text-emerald-500"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Sign In Link (Mobile) - Updated to open in new tab */}
                <a
                  href="https://app.treeo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white hover:text-emerald-500"
                >
                  Sign In
                </a>

                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full mt-2 bg-emerald-500 hover:bg-emerald-600">Book a Demo</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
