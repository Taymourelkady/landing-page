"use client"

import { useEffect, useState } from "react"

export function DebugSectionIds() {
  const [sections, setSections] = useState<string[]>([])

  useEffect(() => {
    // Find all sections with IDs
    const sectionElements = document.querySelectorAll("section[id]")
    const ids = Array.from(sectionElements).map((section) => section.id)
    setSections(ids)
  }, [])

  if (process.env.NODE_ENV !== "development") return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg z-50 text-sm">
      <h3 className="font-bold mb-2">Section IDs:</h3>
      <ul className="space-y-1">
        {sections.map((id) => (
          <li key={id}>
<<<<<<< HEAD
            <a href={`#${id}`} className="text-treeo-400 hover:underline">
=======
            <a href={`#${id}`} className="text-emerald-400 hover:underline">
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
              #{id}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
