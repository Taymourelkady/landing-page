import { MessageSquare, Database, Hash } from "lucide-react"

interface ContactSidebarProps {
  title: string
  description: string
}

export function ContactSidebar({ title, description }: ContactSidebarProps) {
  return (
    <div className="hidden lg:flex flex-col justify-between bg-muted/30 border-r border-border/40 p-10 w-1/3">
      <div>
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="bg-emerald-500/20 p-2 rounded-full">
            <MessageSquare className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h3 className="font-medium">Chat with Your Data</h3>
            <p className="text-sm text-muted-foreground">
              Ask questions in plain English and get immediate answers and visualizations.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-emerald-500/20 p-2 rounded-full">
            <Database className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h3 className="font-medium">Connect to Your Data Sources</h3>
            <p className="text-sm text-muted-foreground">
              Easily connect to your existing databases and analytics tools.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-emerald-500/20 p-2 rounded-full">
            <Hash className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h3 className="font-medium">Ensure Data Consistency</h3>
            <p className="text-sm text-muted-foreground">
              Use our metrics dictionary to maintain consistent definitions across your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
