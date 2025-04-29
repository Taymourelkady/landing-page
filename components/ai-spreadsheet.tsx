"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowDownToLine,
  ArrowUpToLine,
  BarChart3,
  ChevronDown,
  Download,
  FileSpreadsheet,
  LineChart,
  PieChart,
  Save,
  Sparkles,
  Wand2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AIAssistantPanel } from "@/components/ai-assistant-panel"

// Sample data for the spreadsheet
const getInitialData = (sheetId: string) => {
  if (sheetId === "sales") {
    return {
      headers: ["Date", "Product", "Category", "Quantity", "Unit Price", "Total", "Region"],
      rows: [
        ["2025-04-01", "Laptop Pro", "Electronics", "5", "$1,200", "$6,000", "North"],
        ["2025-04-02", "Desk Chair", "Furniture", "10", "$150", "$1,500", "East"],
        ["2025-04-03", "Smart Watch", "Electronics", "15", "$250", "$3,750", "West"],
        ["2025-04-04", "Office Desk", "Furniture", "3", "$350", "$1,050", "South"],
        ["2025-04-05", "Wireless Earbuds", "Electronics", "20", "$120", "$2,400", "North"],
        ["2025-04-06", "Bookshelf", "Furniture", "7", "$200", "$1,400", "East"],
        ["2025-04-07", "Smartphone", "Electronics", "8", "$800", "$6,400", "West"],
        ["2025-04-08", "Filing Cabinet", "Furniture", "4", "$180", "$720", "South"],
        ["2025-04-09", "Tablet", "Electronics", "12", "$350", "$4,200", "North"],
        ["2025-04-10", "Office Chair", "Furniture", "15", "$120", "$1,800", "East"],
      ],
    }
  } else if (sheetId === "customers") {
    return {
      headers: ["Customer ID", "Name", "Email", "Sign-up Date", "Plan", "Monthly Value", "Status"],
      rows: [
        ["C001", "Alice Johnson", "alice@example.com", "2025-01-15", "Premium", "$49.99", "Active"],
        ["C002", "Bob Smith", "bob@example.com", "2025-02-03", "Basic", "$19.99", "Active"],
        ["C003", "Carol Williams", "carol@example.com", "2025-02-17", "Premium", "$49.99", "Inactive"],
        ["C004", "David Brown", "david@example.com", "2025-03-01", "Enterprise", "$99.99", "Active"],
        ["C005", "Eve Davis", "eve@example.com", "2025-03-10", "Basic", "$19.99", "Active"],
        ["C006", "Frank Miller", "frank@example.com", "2025-03-22", "Premium", "$49.99", "Active"],
        ["C007", "Grace Wilson", "grace@example.com", "2025-04-05", "Basic", "$19.99", "Inactive"],
        ["C008", "Henry Taylor", "henry@example.com", "2025-04-12", "Enterprise", "$99.99", "Active"],
        ["C009", "Ivy Anderson", "ivy@example.com", "2025-04-18", "Premium", "$49.99", "Active"],
        ["C010", "Jack Thomas", "jack@example.com", "2025-04-25", "Basic", "$19.99", "Active"],
      ],
    }
  } else {
    return {
      headers: ["Column A", "Column B", "Column C", "Column D", "Column E"],
      rows: [
        ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5"],
        ["Data 6", "Data 7", "Data 8", "Data 9", "Data 10"],
        ["Data 11", "Data 12", "Data 13", "Data 14", "Data 15"],
        ["Data 16", "Data 17", "Data 18", "Data 19", "Data 20"],
        ["Data 21", "Data 22", "Data 23", "Data 24", "Data 25"],
      ],
    }
  }
}

// AI suggestion prompts
const aiSuggestions = [
  "Analyze sales trends by region",
  "Predict next month's revenue",
  "Identify top-performing products",
  "Find correlations between categories and regions",
  "Summarize quarterly performance",
  "Generate a pivot table of sales by category",
  "Create a forecast model for next quarter",
  "Highlight outliers in the dataset",
]

export function AISpreadsheet({ sheetId }: { sheetId: string }) {
  const [data, setData] = useState(() => getInitialData(sheetId))
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null)
  const [editValue, setEditValue] = useState("")
  const [showAIPanel, setShowAIPanel] = useState(false)
  const [aiPrompt, setAiPrompt] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [activeTab, setActiveTab] = useState("data")

  const inputRef = useRef<HTMLInputElement>(null)
  const sheetTitle = sheetId.charAt(0).toUpperCase() + sheetId.slice(1) + " Metrics"

  useEffect(() => {
    if (selectedCell && inputRef.current) {
      inputRef.current.focus()
    }
  }, [selectedCell])

  const handleCellClick = (row: number, col: number) => {
    setSelectedCell({ row, col })
    if (row === -1) {
      // Header row
      setEditValue(data.headers[col])
    } else {
      setEditValue(data.rows[row][col])
    }
  }

  const handleCellChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value)
  }

  const handleCellBlur = () => {
    if (selectedCell) {
      const { row, col } = selectedCell
      if (row === -1) {
        // Update header
        const newHeaders = [...data.headers]
        newHeaders[col] = editValue
        setData({ ...data, headers: newHeaders })
      } else {
        // Update cell
        const newRows = [...data.rows]
        newRows[row] = [...newRows[row]]
        newRows[row][col] = editValue
        setData({ ...data, rows: newRows })
      }
      setSelectedCell(null)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCellBlur()
    }
  }

  const handleAIPromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAiPrompt(e.target.value)
  }

  const handleAIPromptSubmit = () => {
    if (!aiPrompt.trim()) return

    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      let response = ""

      if (aiPrompt.toLowerCase().includes("trend") || aiPrompt.toLowerCase().includes("analyze")) {
        response =
          "Based on your data, I've detected an upward trend in electronics sales, particularly in the North region. Sales have increased by approximately 15% month-over-month."
      } else if (aiPrompt.toLowerCase().includes("predict") || aiPrompt.toLowerCase().includes("forecast")) {
        response =
          "Based on current trends, I predict next month's revenue will be approximately $28,500, representing a 16.3% increase from the current month."
      } else if (aiPrompt.toLowerCase().includes("top") || aiPrompt.toLowerCase().includes("best")) {
        response =
          "The top-performing products are:\n1. Smartphone - $6,400\n2. Laptop Pro - $6,000\n3. Tablet - $4,200"
      } else if (aiPrompt.toLowerCase().includes("correlation") || aiPrompt.toLowerCase().includes("relationship")) {
        response =
          "I've found a strong correlation between Electronics category and North region sales (0.78 correlation coefficient), suggesting this is a particularly strong market for your electronics products."
      } else if (aiPrompt.toLowerCase().includes("summarize") || aiPrompt.toLowerCase().includes("summary")) {
        response =
          "Q1 2025 Summary:\n- Total Sales: $29,220\n- Top Category: Electronics ($22,750)\n- Top Region: North ($12,600)\n- Growth Rate: 14.2% compared to Q4 2024"
      } else if (aiPrompt.toLowerCase().includes("pivot") || aiPrompt.toLowerCase().includes("table")) {
        response =
          "I've created a pivot table analyzing sales by category:\n\nCategory | Total Sales | % of Total\n--- | --- | ---\nElectronics | $22,750 | 77.9%\nFurniture | $6,470 | 22.1%"
      } else {
        response =
          "I've analyzed your data and found some interesting insights. Would you like me to generate a specific report or visualization based on this data?"
      }

      setAiResponse(response)
      setIsProcessing(false)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setAiPrompt(suggestion)
  }

  const addRow = () => {
    const newRow = Array(data.headers.length).fill("")
    setData({
      ...data,
      rows: [...data.rows, newRow],
    })
  }

  const addColumn = () => {
    const newHeaders = [...data.headers, "New Column"]
    const newRows = data.rows.map((row) => [...row, ""])
    setData({
      headers: newHeaders,
      rows: newRows,
    })
  }

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-border/40 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FileSpreadsheet className="h-5 w-5 text-emerald-500" />
          <h1 className="text-xl font-semibold">{sheetTitle}</h1>
        </div>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2" onClick={() => setShowAIPanel(!showAIPanel)}>
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  <span className="hidden md:inline">AI Assistant</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Get AI insights and analysis</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden md:inline">Visualize</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>Bar Chart</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <LineChart className="h-4 w-4" />
                <span>Line Chart</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <PieChart className="h-4 w-4" />
                <span>Pie Chart</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                <span className="hidden md:inline">Export</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="gap-2">
                <FileSpreadsheet className="h-4 w-4" />
                <span>Export as CSV</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <FileSpreadsheet className="h-4 w-4" />
                <span>Export as Excel</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="default" size="sm" className="gap-2">
            <Save className="h-4 w-4" />
            <span className="hidden md:inline">Save</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className={`flex-1 overflow-auto ${showAIPanel ? "border-r border-border/40" : ""}`}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-border/40 px-4">
              <TabsList className="bg-transparent">
                <TabsTrigger value="data" className="data-[state=active]:bg-background/80">
                  Data
                </TabsTrigger>
                <TabsTrigger value="formulas" className="data-[state=active]:bg-background/80">
                  Formulas
                </TabsTrigger>
                <TabsTrigger value="insights" className="data-[state=active]:bg-background/80">
                  Insights
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="data" className="m-0 p-4">
              <div className="flex gap-2 mb-4">
                <Button variant="outline" size="sm" onClick={addRow} className="gap-1">
                  <ArrowDownToLine className="h-3 w-3" />
                  Add Row
                </Button>
                <Button variant="outline" size="sm" onClick={addColumn} className="gap-1">
                  <ArrowUpToLine className="h-3 w-3 rotate-90" />
                  Add Column
                </Button>
                <Button variant="outline" size="sm" className="gap-1 ml-auto">
                  <Wand2 className="h-3 w-3" />
                  Format
                </Button>
              </div>

              <div className="border rounded-md overflow-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      {data.headers.map((header, colIndex) => (
                        <th
                          key={colIndex}
                          className="border border-border/40 p-2 text-left font-medium min-w-[120px] relative"
                          onClick={() => handleCellClick(-1, colIndex)}
                        >
                          {selectedCell?.row === -1 && selectedCell?.col === colIndex ? (
                            <Input
                              ref={inputRef}
                              value={editValue}
                              onChange={handleCellChange}
                              onBlur={handleCellBlur}
                              onKeyDown={handleKeyDown}
                              className="absolute inset-0 border-2 border-primary p-1"
                            />
                          ) : (
                            header
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="hover:bg-muted/30">
                        {row.map((cell, colIndex) => (
                          <td
                            key={colIndex}
                            className="border border-border/40 p-2 relative"
                            onClick={() => handleCellClick(rowIndex, colIndex)}
                          >
                            {selectedCell?.row === rowIndex && selectedCell?.col === colIndex ? (
                              <Input
                                ref={inputRef}
                                value={editValue}
                                onChange={handleCellChange}
                                onBlur={handleCellBlur}
                                onKeyDown={handleKeyDown}
                                className="absolute inset-0 border-2 border-primary p-1"
                              />
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="formulas" className="m-0 p-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Formula Reference</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Basic Formulas</h4>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <code>=SUM(A1:A10)</code> - Sum values in range
                        </li>
                        <li>
                          <code>=AVERAGE(B1:B10)</code> - Average of values
                        </li>
                        <li>
                          <code>=COUNT(C1:C10)</code> - Count cells with values
                        </li>
                        <li>
                          <code>=MAX(D1:D10)</code> - Find maximum value
                        </li>
                        <li>
                          <code>=MIN(E1:E10)</code> - Find minimum value
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">AI-Enhanced Formulas</h4>
                      <ul className="mt-2 space-y-2">
                        <li>
                          <code>=AI.PREDICT(A1:F10, "next_month")</code> - Predict next month values
                        </li>
                        <li>
                          <code>=AI.TREND(B1:B20)</code> - Analyze and visualize trends
                        </li>
                        <li>
                          <code>=AI.ANOMALY(C1:C30)</code> - Detect anomalies in data
                        </li>
                        <li>
                          <code>=AI.CLUSTER(A1:E20)</code> - Group similar data points
                        </li>
                        <li>
                          <code>=AI.SUMMARIZE(A1:F30, "quarterly")</code> - Generate summary insights
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="m-0 p-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">AI-Generated Insights</h3>
                  <p className="text-muted-foreground mb-4">
                    Click "AI Assistant" to generate insights about your data.
                  </p>

                  <div className="space-y-4">
                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium text-emerald-500">Key Metrics</h4>
                      <ul className="mt-2 space-y-1">
                        <li>Total Sales: $29,220</li>
                        <li>Average Order Value: $2,922</li>
                        <li>Top Category: Electronics (77.9%)</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium text-emerald-500">Trends</h4>
                      <p className="mt-2">
                        Electronics sales show a consistent upward trend, with a 15% month-over-month increase.
                      </p>
                    </div>

                    <div className="p-3 bg-muted/30 rounded-md">
                      <h4 className="font-medium text-emerald-500">Recommendations</h4>
                      <ul className="mt-2 space-y-1">
                        <li>Focus marketing efforts on Electronics in the North region</li>
                        <li>Consider expanding Furniture offerings in the East region</li>
                        <li>Investigate declining customer numbers (-2.3%)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {showAIPanel && (
          <AIAssistantPanel
            aiPrompt={aiPrompt}
            aiResponse={aiResponse}
            isProcessing={isProcessing}
            onPromptChange={handleAIPromptChange}
            onPromptSubmit={handleAIPromptSubmit}
            onSuggestionClick={handleSuggestionClick}
            suggestions={aiSuggestions}
            onClose={() => setShowAIPanel(false)}
          />
        )}
      </div>
    </div>
  )
}
