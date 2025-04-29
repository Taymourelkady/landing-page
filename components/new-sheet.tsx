"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSpreadsheet, Plus, Upload } from "lucide-react"
import { useRouter } from "next/navigation"

export function NewSheet() {
  const [sheetName, setSheetName] = useState("")
  const router = useRouter()

  const handleCreateSheet = () => {
    if (!sheetName.trim()) return
    // In a real app, you would create the sheet in your database
    router.push(`/sheets/${sheetName.toLowerCase().replace(/\s+/g, "-")}`)
  }

  const templates = [
    { id: "sales", name: "Sales Tracker", description: "Track product sales and revenue" },
    { id: "customers", name: "Customer Database", description: "Manage customer information and status" },
    { id: "inventory", name: "Inventory Management", description: "Track stock levels and product details" },
    { id: "marketing", name: "Marketing Analytics", description: "Track campaign performance and metrics" },
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Sheet</h1>

      <div className="grid gap-6">
        <div className="flex gap-4 items-end">
          <div className="flex-1 space-y-2">
            <label htmlFor="sheet-name" className="text-sm font-medium">
              Sheet Name
            </label>
            <Input
              id="sheet-name"
              value={sheetName}
              onChange={(e) => setSheetName(e.target.value)}
              placeholder="Enter sheet name..."
            />
          </div>
          <Button onClick={handleCreateSheet} disabled={!sheetName.trim()} className="gap-2">
            <Plus className="h-4 w-4" />
            Create Blank Sheet
          </Button>
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Import Data
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Start from a template</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => router.push(`/sheets/${template.id}`)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <FileSpreadsheet className="h-5 w-5 text-emerald-500" />
                    {template.name}
                  </CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="w-full">
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
