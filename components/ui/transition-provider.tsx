"use client"

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, type ReactNode } from "react"

interface TransitionProviderProps {
  children: ReactNode
}

export function TransitionProvider({ children }: TransitionProviderProps) {
  const pathname = usePathname()

  // Scroll to top whenever the pathname changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant instead of smooth for immediate reset
    })
  }, [pathname])

  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  )
}
