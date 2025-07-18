"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-[#101827]">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-treeo-500/20 px-4 py-1.5 text-sm font-medium mb-6">
            <span className="text-treeo-400">AI-Powered</span>
            <span className="text-gray-300">Analytics Assistant</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            Your <span className="text-treeo-500">Chat-Based</span> Data Analyst
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Treeo connects to your database and analytics stack, allowing any team member to ask questions in natural
            language and receive immediate answers, charts, and insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?interest=design_partner">
              <Button size="lg" className="gap-2 text-base px-8 bg-treeo-500 hover:bg-treeo-600">
                Join our Design Partner Program
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Chat Interface Preview */}
          <div className="mt-16 md:mt-20 relative mx-auto max-w-5xl">
            <div className="relative rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-treeo-500/10 to-blue-500/10 z-0" />
              <div className="relative z-10 bg-[#1A1F2E] p-6 rounded-t-xl border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-treeo-500"
                  >
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-medium text-white">Analytics Chat</span>
                </div>
              </div>
              <div className="relative z-10 bg-[#1A1F2E] p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3 justify-end">
                    <div className="bg-treeo-500/20 p-3 rounded-lg max-w-[80%]">
                      <p className="text-treeo-500">
                        What was our revenue growth last quarter compared to the previous quarter?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-[#0c1420] p-3 rounded-lg max-w-[80%]">
                      <p className="text-gray-300">
                        Revenue grew by 23.5% last quarter compared to the previous quarter. Would you like to see a
                        breakdown by product category?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-12 -top-12 bg-[#1A1F2E] border border-gray-700 p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-treeo-500"
                >
                  <path
                    d="M21 5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5M21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5M21 5L12 13L3 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="font-medium text-white">Connected your Database</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
