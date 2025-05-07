// This script handles dynamic favicon behavior
;(() => {
  // Check if the browser supports SVG favicons
  function supportsSvgFavicons() {
    const link = document.createElement("link")
    const supportsSvg = link.relList && link.relList.supports && link.relList.supports("icon")
    return supportsSvg
  }

  // Set the appropriate favicon based on browser support
  function setFavicon() {
    const head = document.getElementsByTagName("head")[0]
    const existingIcons = document.querySelectorAll('link[rel="icon"]')

    // Remove any existing favicons
    existingIcons.forEach((icon) => {
      head.removeChild(icon)
    })

    // Create new favicon link
    const link = document.createElement("link")
    link.rel = "icon"

    if (supportsSvgFavicons()) {
      // Use SVG if supported
      link.href = "/favicon.png"
      link.type = "image/svg+xml"
    } else {
      // Fall back to PNG for browsers that don't support SVG favicons
      const pixelRatio = window.devicePixelRatio || 1
      const size = pixelRatio > 1 ? "32x32" : "16x16"
      link.href = `/favicon-${size}.png`
      link.type = "image/png"
    }

    head.appendChild(link)
  }

  // Set favicon when the page loads
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setFavicon)
  } else {
    setFavicon()
  }

  // Update favicon if the page visibility changes (useful for tabs that have been inactive)
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      setFavicon()
    }
  })
})()
