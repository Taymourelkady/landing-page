"use client"

import { useToast } from "@/hooks/use-toast"
import { Toast } from "./toast"

export function Toaster() {
  const { toastProps, isOpen, hideToast } = useToast()

  if (!toastProps) return null

  return (
    <Toast
      title={toastProps.title}
      description={toastProps.description}
      variant={toastProps.variant}
      open={isOpen}
      onClose={hideToast}
    />
  )
}
