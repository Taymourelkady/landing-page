import { PageTransition } from "@/components/ui/page-transition"
import { DocumentationContent } from "@/components/documentation/documentation-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation | Treeo",
  description: "Technical documentation and integration guides for Treeo.",
}

export default function DocumentationPage() {
  return (
    <PageTransition>
      <DocumentationContent />
    </PageTransition>
  )
}
