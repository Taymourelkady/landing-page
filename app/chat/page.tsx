import { AIChat } from "@/components/ai-chat"
import { AppSidebar } from "@/components/app-sidebar"

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <AIChat />
      </main>
    </div>
  )
}
