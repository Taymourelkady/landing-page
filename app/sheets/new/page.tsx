import { NewSheet } from "@/components/new-sheet"
import { AppSidebar } from "@/components/app-sidebar"

export default function NewSheetPage() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <NewSheet />
      </main>
    </div>
  )
}
