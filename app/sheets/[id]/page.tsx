import { AISpreadsheet } from "@/components/ai-spreadsheet"
import { AppSidebar } from "@/components/app-sidebar"

export default function SheetPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <AISpreadsheet sheetId={params.id} />
      </main>
    </div>
  )
}
