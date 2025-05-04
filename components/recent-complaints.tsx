import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This would normally be fetched from an API
const recentComplaints = [
  {
    id: 1,
    title: "Water supply issue in Rampur village",
    category: "Water",
    status: "Pending",
    location: "Rampur, Uttar Pradesh",
    date: "2023-04-15",
    user: "Ramesh Kumar",
  },
  {
    id: 2,
    title: "Large pothole on main road to Ganeshpur",
    category: "Road",
    status: "In Progress",
    location: "Ganeshpur, Maharashtra",
    date: "2023-04-14",
    user: "Priya Singh",
  },
  {
    id: 3,
    title: "Electricity outage for 3 days",
    category: "Electricity",
    status: "Resolved",
    location: "Lakshmipur, Tamil Nadu",
    date: "2023-04-10",
    user: "Vijay Reddy",
  },
  {
    id: 4,
    title: "Bridge damaged after heavy rain",
    category: "Infrastructure",
    status: "Escalated",
    location: "Krishnapur, Kerala",
    date: "2023-04-08",
    user: "Ananya Nair",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-500"
    case "In Progress":
      return "bg-blue-500"
    case "Resolved":
      return "bg-green-500"
    case "Escalated":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Water":
      return "bg-blue-100 text-blue-800"
    case "Road":
      return "bg-amber-100 text-amber-800"
    case "Electricity":
      return "bg-yellow-100 text-yellow-800"
    case "Infrastructure":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function RecentComplaints() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {recentComplaints.map((complaint) => (
        <Card key={complaint.id} className="overflow-hidden">
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <Badge className={getCategoryColor(complaint.category)}>{complaint.category}</Badge>
              <div className={`h-2 w-2 rounded-full ${getStatusColor(complaint.status)}`} />
            </div>
            <CardTitle className="line-clamp-1 text-lg">{complaint.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex flex-col space-y-2">
              <div className="text-sm text-gray-500">{complaint.location}</div>
              <div className="text-sm text-gray-500">Status: {complaint.status}</div>
              <div className="text-sm text-gray-500">Date: {new Date(complaint.date).toLocaleDateString()}</div>
              <div className="flex items-center pt-2">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarFallback className="text-xs">
                    {complaint.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm">{complaint.user}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
