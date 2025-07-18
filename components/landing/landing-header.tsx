"use client"

import { SharedHeader } from "@/components/ui/shared-header"
import { navItems, dropdownItems, sharedHeaderOptions } from "@/components/ui/header-config"

export function LandingHeader() {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Design Partners", href: "/design-partners" },
  ]

  const dropdownItems = [
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
  ]

  return (
    <SharedHeader 
      navItems={navItems}
      dropdownItems={dropdownItems}
      {...sharedHeaderOptions}
    />
  )
}
