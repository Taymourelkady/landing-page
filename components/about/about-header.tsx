"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/ui/logo"

export function AboutHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { label: "Features", href: "/landing#features" },
    { label: "Demo", href: "/landing#demo" },
    { label: "Pricing", href: "/landing#pricing" },
    { label: "About", href: "/about" },
  ]

  // Function to handle navigation to landing page with hash
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }

    // Navigate to the landing page with the hash
    router.push(href)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-700 bg-[#101827]/95 backdrop-blur supports-[backdrop-filter]:bg-[#101827]/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.href === "/about" ? (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  item.href === "/about" ? "text-white" : "text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
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
                {navItems.map((item) =>
                  item.href === "/about" ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`text-lg font-medium hover:text-emerald-500 ${
                        item.href === "/about" ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavigation(e, item.href)}
                      className="text-lg font-medium text-white hover:text-emerald-500"
                    >
                      {item.label}
                    </a>
                  ),
                )}
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
