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
import { MessageSquare } from "lucide-react"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
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
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Work Email</Label>
              <Input id="email" type="email" placeholder="name@company.com" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Your Company" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select defaultValue="default">
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default" disabled>
                    Select your role
                  </SelectItem>
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
              <Label htmlFor="interest">I'm interested in</Label>
              <Select defaultValue="default">
                <SelectTrigger>
                  <SelectValue placeholder="Select your interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default" disabled>
                    Select your interest
                  </SelectItem>
                  <SelectItem value="demo">Getting a demo</SelectItem>
                  <SelectItem value="pricing">Pricing information</SelectItem>
                  <SelectItem value="technical">Technical questions</SelectItem>
                  <SelectItem value="partnership">Partnership opportunities</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your data needs and how we can help"
                className="min-h-[100px]"
              />
            </div>

            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
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
