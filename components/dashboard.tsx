import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, BarChart3, Clock, DollarSign, Users } from "lucide-react"

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Sales Overview</h1>
          <p className="text-muted-foreground">Real-time Analytics & insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <DollarSign className="h-4 w-4" />
            USD
          </Button>
          <Button variant="default" className="gap-2">
            <ArrowUpRight className="h-4 w-4" />
            Add Chart
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <BarChart3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Clock className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <DollarSign className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$24,500</div>
            <div className="text-xs text-emerald-500">+12.5% from last month</div>
            <div className="h-[200px] mt-4 bg-gradient-to-r from-emerald-500/10 to-emerald-500/20 rounded-md"></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <BarChart3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Clock className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <DollarSign className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$73,500</div>
            <div className="text-xs text-emerald-500">+8.2% from last month</div>
            <div className="h-[200px] mt-4 bg-gradient-to-r from-emerald-500/10 to-emerald-500/20 rounded-md"></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,234</div>
            <div className="text-xs text-red-500">-2.3% from last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">856</div>
            <div className="text-xs text-emerald-500">+5.7% from last month</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
