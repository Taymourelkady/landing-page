"use client"

import type React from "react"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

export type ToastActionElement = React.ReactNode

export interface ToastProps {
  title: string
  description?: string
  variant?: "default" | "destructive"
  open: boolean
  onClose: () => void
}

export function Toast({ title, description, variant = "default", open, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (open) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300) // Match this with the CSS transition duration
      return () => clearTimeout(timer)
    }
  }, [open])

  if (!isVisible && !open) return null

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 max-w-md rounded-lg shadow-lg transition-all duration-300 ${
        open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } ${variant === "destructive" ? "bg-red-600" : "bg-emerald-600"}`}
    >
      <div className="flex items-start gap-4 p-4">
        <div className="flex-1">
          <h3 className="font-medium text-white">{title}</h3>
          {description && <p className="text-sm text-white/90 mt-1">{description}</p>}
        </div>
        <button onClick={onClose} className="rounded-full p-1 text-white/80 hover:bg-white/10 hover:text-white">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  )
}
