import { SignupForm } from "@/components/signup-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2 } from "lucide-react"
import { AuthSidebar } from "@/components/auth-sidebar"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/40 py-4">
        <div className="container flex justify-between items-center">
          <Link href="/landing" className="flex items-center gap-2">
            <Share2 className="h-6 w-6 text-emerald-500" />
            <span className="font-bold text-xl">TreeBI</span>
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
        <AuthSidebar
          title="Join TreeBI"
          description="Create your account and start transforming your data experience with AI-powered analytics."
        />
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <SignupForm />
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40 py-4">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TreeBI. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
