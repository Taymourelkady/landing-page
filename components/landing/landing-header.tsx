"use client"

import { SharedHeader } from "@/components/ui/shared-header"
import { navItems, dropdownItems, aboutDropdownItems, sharedHeaderOptions } from "@/components/ui/header-config"

export function LandingHeader() {
  return (
    <SharedHeader
      navItems={navItems}
      dropdownItems={dropdownItems}
      aboutDropdownItems={aboutDropdownItems}
      {...sharedHeaderOptions}
    />
  )
}
