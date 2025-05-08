"use client"

import { useEffect } from "react"

interface FaviconManagerProps {
  themeColor?: string
}

export function FaviconManager({ themeColor = "#16A249" }: FaviconManagerProps) {
  useEffect(() => {
    // Update theme color
    const updateThemeColor = () => {
      const themeColorMeta = document.querySelector('meta[name="theme-color"]')
      if (themeColorMeta) {
        themeColorMeta.setAttribute("content", themeColor)
      } else {
        const meta = document.createElement("meta")
        meta.name = "theme-color"
        meta.content = themeColor
        document.head.appendChild(meta)
      }
    }

    // Ensure SVG favicon is prioritized in browsers that support it
    const ensureSvgFavicon = () => {
      // Check if SVG favicon link already exists
      const existingSvgLink = document.querySelector('link[rel="icon"][type="image/svg+xml"]')

      // If no SVG favicon link exists, add it with highest priority
      if (!existingSvgLink) {
        const link = document.createElement("link")
        link.rel = "icon"
        link.href = "/favicon.png"
        link.type = "image/svg+xml"

        // Insert at the beginning of head to give it highest priority
        const head = document.head
        head.insertBefore(link, head.firstChild)
      }
    }

    updateThemeColor()
    ensureSvgFavicon()

    return () => {
      // No cleanup needed for this implementation
    }
  }, [themeColor])

  return null
}
