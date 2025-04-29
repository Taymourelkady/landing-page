"use client"

import { LayoutGrid, Share2, FileSpreadsheet, Plus, MessageSquare } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function AppSidebar() {
  const router = useRouter()

  const sheets = [
    { id: "sales", name: "Sales Metrics" },
    { id: "customers", name: "Customer Metrics" },
    { id: "inventory", name: "Inventory Metrics" },
    { id: "marketing", name: "Marketing Metrics" },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border/40">
        <div className="flex items-center gap-2 px-4 py-2">
          <Share2 className="h-5 w-5" />
          <span className="font-semibold text-lg">Tree</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="px-3 py-2">
            <Button
              variant="secondary"
              className="w-full justify-start gap-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-500"
              onClick={() => router.push("/chat")}
            >
              <MessageSquare className="h-4 w-4" />
              New Chat
            </Button>
          </div>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>RECENT CHATS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <MessageSquare className="h-4 w-4" />
                  <span>On time Fulfillment</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between">
            DASHBOARDS
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <Plus className="h-3 w-3" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <LayoutGrid className="h-4 w-4" />
                  <span>Sales Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between">
            SHEETS
            <Button variant="ghost" size="icon" className="h-4 w-4" onClick={() => router.push("/sheets/new")}>
              <Plus className="h-3 w-3" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sheets.map((sheet) => (
                <SidebarMenuItem key={sheet.id}>
                  <SidebarMenuButton asChild onClick={() => router.push(`/sheets/${sheet.id}`)}>
                    <button>
                      <FileSpreadsheet className="h-4 w-4" />
                      <span>{sheet.name}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="outline" className="w-full justify-start gap-2 mx-3 mb-3">
          <Share2 className="h-4 w-4" />
          Switch to Scientist Mode
        </Button>
      </SidebarFooter>
      <SidebarTrigger className="absolute top-3 right-3" />
    </Sidebar>
  )
}
