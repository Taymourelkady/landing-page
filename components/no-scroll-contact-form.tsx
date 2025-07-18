"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Loader2 } from "lucide-react"
import { type ContactFormData, sendContactFormEmail } from "@/app/actions/email-actions"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export function NoScrollContactForm({ defaultInterest }: { defaultInterest?: string } = {}) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    interest: defaultInterest || "",
    message: "",
  })
  const { toast } = useToast()
  const [redirectCountdown, setRedirectCountdown] = useState(10);
  const router = useRouter();

  useEffect(() => {
    setFormData((prev) => ({ ...prev, interest: defaultInterest || "" }));
  }, [defaultInterest]);

  useEffect(() => {
    if (isSubmitted) {
      const interval = setInterval(() => {
        setRedirectCountdown((prev) => prev - 1);
      }, 1000);
      const timeout = setTimeout(() => {
        router.push("/landing");
      }, 10000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isSubmitted, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await sendContactFormEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
        toast({
          title: "Form submitted successfully",
          description: "We'll get back to you shortly.",
          variant: "default",
        })
      } else {
        toast({
          title: "Error submitting form",
          description: result.error || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error submitting form",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-[350px] w-full">
        <div className="bg-[#101827] rounded-2xl p-10 text-center flex flex-col items-center justify-center w-full max-w-md shadow-xl animate-fade-in">
          <div className="rounded-full bg-treeo-500/20 p-4 mb-6 flex items-center justify-center">
            <svg className="animate-bounce h-12 w-12 text-treeo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4" /></svg>
          </div>
          <h2 className="text-3xl font-extrabold mb-3 text-white">Thank you for reaching out!</h2>
          <p className="text-lg text-gray-300 mb-4">We've received your message and a member of our team will get back to you soon.<br/>You will be redirected to the home page in <span className="font-bold text-treeo-500">{redirectCountdown}</span> seconds.</p>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Redirecting</span>
              <span className="inline-block h-4 w-4 border-2 border-treeo-500 border-t-transparent rounded-full animate-spin"></span>
            </div>
            <Button asChild className="bg-treeo-500 hover:bg-treeo-600 mt-4">
              <Link href="/landing">Return to Home Now</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#1A1F2E] rounded-lg p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2 text-white">Contact Sales</h2>
        <p className="text-gray-300">Fill out the form below to learn more about Treeo or to schedule a demo.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-white mb-1 block">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="John"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="bg-[#101827] border-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-white mb-1 block">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Doe"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="bg-[#101827] border-gray-700 text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="text-white mb-1 block">
              Work Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-[#101827] border-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="company" className="text-white mb-1 block">
              Company
            </Label>
            <Input
              id="company"
              placeholder="Your Company"
              required
              value={formData.company}
              onChange={handleChange}
              className="bg-[#101827] border-gray-700 text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="role" className="text-white mb-1 block">
              Role
            </Label>
            <Select value={formData.role} onValueChange={(value) => handleSelectChange("role", value)}>
              <SelectTrigger className="bg-[#101827] border-gray-700 text-white">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="executive">Executive</SelectItem>
                <SelectItem value="data_analyst">Data Analyst</SelectItem>
                <SelectItem value="data_scientist">Data Scientist</SelectItem>
                <SelectItem value="data_engineer">Data Engineer</SelectItem>
                <SelectItem value="product_manager">Product Manager</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="interest" className="text-white mb-1 block">
              I'm interested in
            </Label>
            <Select value={formData.interest} onValueChange={(value) => handleSelectChange("interest", value)}>
              <SelectTrigger className="bg-[#101827] border-gray-700 text-white">
                <SelectValue placeholder="Select your interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="demo">Getting a demo</SelectItem>
                <SelectItem value="pricing">Pricing information</SelectItem>
                <SelectItem value="technical">Technical questions</SelectItem>
                <SelectItem value="partnership">Partnership opportunities</SelectItem>
                <SelectItem value="design_partner">Joining the design partner program</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-white mb-1 block">
            Message (Optional)
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your data needs and how we can help"
            className="min-h-[120px] bg-[#101827] border-gray-700 text-white"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-gray-400">By submitting, you agree to our Terms of Service.</p>
          <Button type="submit" className="bg-treeo-500 hover:bg-treeo-600 text-white px-8" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
