"use client"

import { useEffect } from "react"

export function useScrollToHash() {
  useEffect(() => {
    // Function to handle hash links
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        // Wait a bit for any transitions to complete
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            // Get the height of the sticky header
            const header = document.querySelector("header")
            const headerHeight = header ? header.getBoundingClientRect().height : 0

            // Calculate the element's position and adjust for the header
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - headerHeight - 20 // 20px extra padding

            // Scroll to the element
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }, 100)
      }
    }

    // Handle initial hash on page load
    if (window.location.hash) {
      handleHashChange()
    }

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange)

    // Clean up
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])
}
