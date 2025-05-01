"use client"

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface TransitionProviderProps {
  children: ReactNode
}

export function TransitionProvider({ children }: TransitionProviderProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  )
}
