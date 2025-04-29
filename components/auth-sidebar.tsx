import { Sparkles } from "lucide-react"

interface AuthSidebarProps {
  title: string
  description: string
}

export function AuthSidebar({ title, description }: AuthSidebarProps) {
  return (
    <div className="hidden lg:flex flex-col justify-between bg-muted/30 border-r border-border/40 p-10 w-1/3">
      <div>
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="bg-emerald-500/20 p-2 rounded-full">
            <Sparkles className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h3 className="font-medium">AI-Powered Analytics</h3>
            <p className="text-sm text-muted-foreground">
              Transform your data into actionable insights with our AI assistant.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-emerald-500/20 p-2 rounded-full">
            <Sparkles className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h3 className="font-medium">Natural Language Queries</h3>
            <p className="text-sm text-muted-foreground">
              Ask questions about your data in plain English and get instant answers.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-emerald-500/20 p-2 rounded-full">
            <Sparkles className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h3 className="font-medium">Smart Visualizations</h3>
            <p className="text-sm text-muted-foreground">Automatically generate the perfect charts for your data.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
