"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Loader2 } from "lucide-react"
import { type ContactFormData, sendContactFormEmail } from "@/app/actions/email-actions"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    interest: "",
    message: "",
  })
  const { toast } = useToast()

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
      <Card className="border-border/40 shadow-lg w-full">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Thank You!</CardTitle>
          <CardDescription>We've received your inquiry and will get back to you shortly.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-10">
          <div className="rounded-full bg-emerald-500/20 p-3 mb-4">
            <MessageSquare className="h-6 w-6 text-emerald-500" />
          </div>
          <p className="text-center text-muted-foreground mb-6">
            One of our team members will contact you within 24 hours to discuss how Treeo can help your organization.
          </p>
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
            <Link href="/landing">Return to Home</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border/40 shadow-lg w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Contact Sales</CardTitle>
        <CardDescription>Fill out the form below to learn more about Treeo or to schedule a demo.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName" className="text-white">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-muted border-border/60 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName" className="text-white">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-muted border-border/60 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white">
                Work Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-muted border-border/60 focus:border-emerald-500/50 focus:ring-emerald-500/20"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="company" className="text-white">
                Company
              </Label>
              <Input
                id="company"
                placeholder="Your Company"
                required
                value={formData.company}
                onChange={handleChange}
                className="bg-muted border-border/60 focus:border-emerald-500/50 focus:ring-emerald-500/20"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="role" className="text-white">
                Role
              </Label>
              <Select value={formData.role} onValueChange={(value) => handleSelectChange("role", value)}>
                <SelectTrigger className="bg-muted border-border/60 focus:ring-emerald-500/20">
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

            <div className="grid gap-2">
              <Label htmlFor="interest" className="text-white">
                I'm interested in
              </Label>
              <Select value={formData.interest} onValueChange={(value) => handleSelectChange("interest", value)}>
                <SelectTrigger className="bg-muted border-border/60 focus:ring-emerald-500/20">
                  <SelectValue placeholder="Select your interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="demo">Getting a demo</SelectItem>
                  <SelectItem value="pricing">Pricing information</SelectItem>
                  <SelectItem value="technical">Technical questions</SelectItem>
                  <SelectItem value="partnership">Partnership opportunities</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message" className="text-white">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your data needs and how we can help"
                className="min-h-[100px] bg-muted border-border/60 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600" disabled={isLoading}>
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
      </CardContent>
      <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
        <p>By submitting this form, you agree to our Terms of Service and Privacy Policy.</p>
      </CardFooter>
    </Card>
  )
}
