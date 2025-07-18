"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/contact")
    }, 1500)
  }

  return (
    <Card className="border-border/40 shadow-lg w-full">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>Log in to your Treeo account</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="google">Google</TabsTrigger>
          </TabsList>
          <TabsContent value="email">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/contact" className="text-xs text-treeo-500 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>
                <Button type="submit" className="w-full mt-2 bg-treeo-500 hover:bg-treeo-600" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Log in"}
                </Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="google">
            <div className="grid gap-4">
              <Button variant="outline" className="w-full" onClick={() => setIsLoading(true)}>
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/40"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Don't have an account?</span>
            <Link href="/contact" className="text-sm text-treeo-500 hover:underline">
              Contact Sales
            </Link>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/30 border-t border-border/40 flex flex-col p-4">
        <div className="flex items-center gap-2 text-sm">
          <Sparkles className="h-4 w-4 text-treeo-500" />
          <span>Unlock the power of your data with Treeo</span>
        </div>
      </CardFooter>
    </Card>
  )
}
