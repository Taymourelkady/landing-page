"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send, Sparkles, User } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI assistant. I can help you analyze your data, generate insights, and answer questions about your spreadsheets. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("sales") && input.toLowerCase().includes("trend")) {
        response =
          "Based on your sales data, I can see an upward trend in the Electronics category, particularly in the North region. Sales have increased by approximately 15% month-over-month. Would you like me to create a visualization of this trend?"
      } else if (input.toLowerCase().includes("customer") && input.toLowerCase().includes("decline")) {
        response =
          "I've analyzed the customer data and found that the 2.3% decline is primarily in the Basic plan tier. The most common reason appears to be pricing concerns. I recommend reviewing the Basic plan pricing strategy or adding more features to increase perceived value."
      } else if (input.toLowerCase().includes("forecast") || input.toLowerCase().includes("predict")) {
        response =
          "Based on current trends and seasonality patterns, I predict next quarter's revenue will be approximately $85,000, representing a 15.6% increase from the current quarter. This forecast takes into account the strong performance of Electronics products and the typical Q3 seasonal boost."
      } else if (input.toLowerCase().includes("compare") || input.toLowerCase().includes("categories")) {
        response =
          "When comparing product categories:\n\n- Electronics: $22,750 (77.9% of total sales)\n- Furniture: $6,470 (22.1% of total sales)\n\nElectronics has a higher profit margin (42% vs 28%) and faster inventory turnover (14 days vs 32 days)."
      } else {
        response =
          "I'd be happy to help with that. Could you provide more details about what specific data or insights you're looking for? I can analyze sales trends, customer behavior, inventory levels, or generate custom reports based on your spreadsheet data."
      }

      const assistantMessage: Message = { role: "assistant", content: response }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-border/40 p-4">
        <h1 className="text-xl font-semibold">AI Chat Assistant</h1>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex gap-3 ${message.role === "assistant" ? "" : "justify-end"}`}>
            {message.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-4 w-4 text-emerald-500" />
              </div>
            )}

            <Card
              className={`p-3 max-w-[80%] ${
                message.role === "assistant"
                  ? "bg-muted/50"
                  : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
              }`}
            >
              <div className="whitespace-pre-line">{message.content}</div>
            </Card>

            {message.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4 text-emerald-500" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-4 w-4 text-emerald-500" />
            </div>
            <Card className="p-3 max-w-[80%] bg-muted/50">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500/50 animate-bounce"></div>
                <div
                  className="w-2 h-2 rounded-full bg-emerald-500/50 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-emerald-500/50 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </Card>
          </div>
        )}
      </div>

      <div className="border-t border-border/40 p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your data..."
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            disabled={isLoading}
          />
          <Button onClick={handleSendMessage} disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
