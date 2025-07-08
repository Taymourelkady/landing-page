"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown } from "lucide-react"

interface ScrollIndicatorProps {
  isVisible: boolean
  targetId: string
}

export function ScrollIndicator({ isVisible, targetId }: ScrollIndicatorProps) {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const target = document.getElementById(targetId)
    if (!target) return

    // Get the current scroll position and target position
    const start = window.scrollY
    const header = document.querySelector("header")
    const headerHeight = header ? header.getBoundingClientRect().height : 0
    const end = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20

    // Calculate the total distance
    const totalDistance = end - start

    // Function to update the indicator position during scrolling
    const updatePosition = () => {
      const current = window.scrollY
      const progress = Math.min(1, Math.max(0, (current - start) / totalDistance))
      setPosition(progress)
    }

    // Add scroll event listener
    window.addEventListener("scroll", updatePosition)

    // Clean up
    return () => {
      window.removeEventListener("scroll", updatePosition)
    }
  }, [isVisible, targetId])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
<<<<<<< HEAD
          <div className="bg-treeo-500/20 backdrop-blur-sm rounded-full p-3 border border-treeo-500/30">
            <div className="h-32 w-1 bg-gray-700 rounded-full relative">
              <div
                className="absolute top-0 left-0 w-full bg-treeo-500 rounded-full transition-all duration-100"
=======
          <div className="bg-emerald-500/20 backdrop-blur-sm rounded-full p-3 border border-emerald-500/30">
            <div className="h-32 w-1 bg-gray-700 rounded-full relative">
              <div
                className="absolute top-0 left-0 w-full bg-emerald-500 rounded-full transition-all duration-100"
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
                style={{ height: `${position * 100}%` }}
              />
            </div>
            <div className="flex justify-center mt-2">
<<<<<<< HEAD
              <ArrowDown className="h-4 w-4 text-treeo-500 animate-bounce" />
=======
              <ArrowDown className="h-4 w-4 text-emerald-500 animate-bounce" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
