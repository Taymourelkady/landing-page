"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, X } from "lucide-react"
import { Card } from "@/components/ui/card"

interface AIAssistantPanelProps {
  aiPrompt: string
  aiResponse: string
  isProcessing: boolean
  onPromptChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPromptSubmit: () => void
  onSuggestionClick: (suggestion: string) => void
  suggestions: string[]
  onClose: () => void
}

export function AIAssistantPanel({
  aiPrompt,
  aiResponse,
  isProcessing,
  onPromptChange,
  onPromptSubmit,
  onSuggestionClick,
  suggestions,
  onClose,
}: AIAssistantPanelProps) {
  return (
    <div className="w-80 lg:w-96 flex flex-col h-full border-l border-border/40">
      <div className="border-b border-border/40 p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          <h3 className="font-medium">AI Assistant</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto p-3 space-y-3">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Ask AI about your data</h4>
          <div className="flex gap-2">
            <Input
              value={aiPrompt}
              onChange={onPromptChange}
              placeholder="Ask a question about your data..."
              className="flex-1"
              onKeyDown={(e) => e.key === "Enter" && onPromptSubmit()}
            />
            <Button onClick={onPromptSubmit} disabled={isProcessing || !aiPrompt.trim()} size="sm">
              {isProcessing ? "Processing..." : "Ask"}
            </Button>
          </div>
        </div>

        {!aiResponse && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Suggested prompts</h4>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => onSuggestionClick(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        )}

        {aiResponse && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">AI Response</h4>
            <Card className="p-3 text-sm whitespace-pre-line">{aiResponse}</Card>
          </div>
        )}

        <div className="space-y-2 mt-4">
          <h4 className="text-sm font-medium">What can AI do?</h4>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Analyze trends and patterns in your data</li>
            <li>• Generate forecasts and predictions</li>
            <li>• Create pivot tables and summaries</li>
            <li>• Identify correlations between data points</li>
            <li>• Suggest visualizations for your data</li>
            <li>• Generate formulas for complex calculations</li>
            <li>• Detect anomalies and outliers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
