"use client"

import { SharedHeader } from "@/components/ui/shared-header"
import { navItems, dropdownItems, sharedHeaderOptions } from "@/components/ui/header-config"

export function AboutHeader() {
  const pageNavItems = [
    ...navItems,

  ]

  return (
    <SharedHeader 
      navItems={pageNavItems}
      dropdownItems={dropdownItems}
      {...sharedHeaderOptions}
    />
  )
}
