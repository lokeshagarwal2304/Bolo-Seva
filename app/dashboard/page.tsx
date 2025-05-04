import { Suspense } from "react"
import { Loader2 } from "lucide-react"
import DashboardStats from "@/components/dashboard-stats"
import ComplaintMap from "@/components/complaint-map"
import ComplaintList from "@/components/complaint-list"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold tracking-tighter mb-2">Dashboard</h1>
        <p className="text-gray-500 mb-6">Track and manage complaints and road issues</p>

        <Suspense
          fallback={
            <div className="flex justify-center items-center h-32">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          }
        >
          <DashboardStats />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Complaint Map</CardTitle>
              <CardDescription>Geographic distribution of complaints and road issues</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-96">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                }
              >
                <ComplaintMap />
              </Suspense>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest complaints and status updates</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense
                fallback={
                  <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                }
              >
                <ComplaintList limit={5} />
              </Suspense>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="mt-6">
          <TabsList>
            <TabsTrigger value="all">All Complaints</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="inprogress">In Progress</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>All Complaints</CardTitle>
                <CardDescription>Complete list of all registered complaints</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-64">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  }
                >
                  <ComplaintList />
                </Suspense>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pending" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Complaints</CardTitle>
                <CardDescription>Complaints waiting to be addressed</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-64">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  }
                >
                  <ComplaintList status="Pending" />
                </Suspense>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="inprogress" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>In Progress Complaints</CardTitle>
                <CardDescription>Complaints currently being addressed</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-64">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  }
                >
                  <ComplaintList status="In Progress" />
                </Suspense>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resolved" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Resolved Complaints</CardTitle>
                <CardDescription>Complaints that have been resolved</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center h-64">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  }
                >
                  <ComplaintList status="Resolved" />
                </Suspense>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
