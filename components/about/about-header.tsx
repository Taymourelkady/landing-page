"use client"

import { SharedHeader } from "@/components/ui/shared-header"
import { navItems, dropdownItems, sharedHeaderOptions } from "@/components/ui/header-config"

export function AboutHeader() {
  const pageNavItems = [
    ...navItems,
    { label: "About", href: "/about", isActive: true },
  ]

  return (
    <SharedHeader 
      navItems={pageNavItems}
      dropdownItems={dropdownItems}
      {...sharedHeaderOptions}
    />
  )
}
