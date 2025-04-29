import { ContactForm } from "@/components/contact-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ContactSidebar } from "@/components/contact-sidebar"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col dark">
      <header className="border-b border-border/40 py-4">
        <div className="container flex justify-between items-center">
          <Link href="/landing" className="flex items-center gap-2">
            <span className="font-bold text-xl">Treeo</span>
          </Link>
          <Link href="/landing">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex">
        <ContactSidebar
          title="Get in Touch"
          description="Contact our sales team to learn more about how Treeo can help your organization make better use of your data."
        />
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40 py-4">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Treeo. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
