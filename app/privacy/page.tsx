import { PageTransition } from "@/components/ui/page-transition"
import { PrivacyContent } from "@/components/privacy/privacy-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Treeo",
  description: "Learn about Treeo's data security measures and privacy policies.",
}

export default function PrivacyPage() {
  return (
    <PageTransition>
      <PrivacyContent />
    </PageTransition>
  )
}
