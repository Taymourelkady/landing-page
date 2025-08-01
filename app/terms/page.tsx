import { PageTransition } from "@/components/ui/page-transition"
import { TermsContent } from "@/components/terms/terms-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | Treeo",
  description: "Read Treeo's terms and conditions and refund policy.",
}

export default function TermsPage() {
  return (
    <PageTransition>
      <TermsContent />
    </PageTransition>
  )
} 