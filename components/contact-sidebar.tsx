import { MessageSquare, Database, Hash } from "lucide-react"

interface ContactSidebarProps {
  title: string
  description: string
}

export function ContactSidebar({ title, description }: ContactSidebarProps) {
  return (
    <div className="hidden lg:flex flex-col justify-between bg-muted/50 border-r border-border/40 p-10 w-1/3 relative">
      {/* Add a subtle gradient background for better contrast */}
<<<<<<< HEAD
      <div className="absolute inset-0 bg-gradient-to-b from-treeo-900/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-treeo-500/20 px-4 py-1.5 text-sm font-medium mb-4">
          <span className="text-treeo-400">Contact Us</span>
=======
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium mb-4">
          <span className="text-emerald-400">Contact Us</span>
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
        </div>
        <h1 className="text-3xl font-bold mb-6 text-white">{title}</h1>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="flex items-start gap-3">
<<<<<<< HEAD
          <div className="bg-treeo-500/30 p-2 rounded-full">
            <MessageSquare className="h-5 w-5 text-treeo-400" />
=======
          <div className="bg-emerald-500/30 p-2 rounded-full">
            <MessageSquare className="h-5 w-5 text-emerald-400" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
          </div>
          <div>
            <h3 className="font-medium text-white">Chat with Your Data</h3>
            <p className="text-sm text-gray-300">
              Ask questions in plain English and get immediate answers and visualizations.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
<<<<<<< HEAD
          <div className="bg-treeo-500/30 p-2 rounded-full">
            <Database className="h-5 w-5 text-treeo-400" />
=======
          <div className="bg-emerald-500/30 p-2 rounded-full">
            <Database className="h-5 w-5 text-emerald-400" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
          </div>
          <div>
            <h3 className="font-medium text-white">Connect to Your Data Sources</h3>
            <p className="text-sm text-gray-300">Easily connect to your existing databases and analytics tools.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
<<<<<<< HEAD
          <div className="bg-treeo-500/30 p-2 rounded-full">
            <Hash className="h-5 w-5 text-treeo-400" />
=======
          <div className="bg-emerald-500/30 p-2 rounded-full">
            <Hash className="h-5 w-5 text-emerald-400" />
>>>>>>> 40857736cfc8826d837473da2ec33c9cf282ff9c
          </div>
          <div>
            <h3 className="font-medium text-white">Ensure Data Consistency</h3>
            <p className="text-sm text-gray-300">
              Use our metrics dictionary to maintain consistent definitions across your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
