import { NoScrollContactForm } from "@/components/no-scroll-contact-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Logo } from "@/components/ui/logo"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#101827] flex items-center justify-center p-16 dark">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-7 gap-6 relative">
        {/* Back to home button */}
        <div className="absolute top-0 left-0 -mt-20">
          <Link href="/landing">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10 my-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Button>
          </Link>
        </div>

        {/* Left sidebar */}
        <div className="lg:col-span-3 bg-[#1A1F2E] rounded-lg p-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium mb-4">
              <span className="text-emerald-400">Contact Us</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-white">Get in Touch</h1>
            <p className="text-gray-300 mb-8">
              Contact our sales team to learn more about how Treeo can help your organization make better use of your
              data.
            </p>

            <div className="flex items-start gap-3 bg-[#101827] p-4 rounded-lg">
              <div className="mt-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-emerald-500"
                >
                  <path
                    d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-white">Chat with Your Data</h3>
                <p className="text-sm text-gray-300">Ask questions in plain English and get immediate answers.</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-gray-700/50 text-center">
            <div className="flex justify-center mb-2">
              <Logo />
            </div>
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Treeo. All rights reserved.</p>
          </div>
        </div>

        {/* Right column - Contact form */}
        <div className="lg:col-span-4">
          <NoScrollContactForm />
        </div>
      </div>
    </div>
  )
}
