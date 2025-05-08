import { PageTransition } from "@/components/ui/page-transition"
import { TutorialsContent } from "@/components/tutorials/tutorials-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tutorials | Treeo",
  description: "Learn how to use Treeo with our comprehensive tutorials and guides.",
}

export default function TutorialsPage() {
  return (
    <PageTransition>
      <TutorialsContent />
    </PageTransition>
  )
}
