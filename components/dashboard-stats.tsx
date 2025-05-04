"use client"

import { MessageSquare, AlertTriangle, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardStats() {
  // This would normally be fetched from an API
  const stats = [
    {
      title: "Total Complaints",
      value: 248,
      icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
      change: "+12% from last month",
      trend: "up",
    },
    {
      title: "Road Issues",
      value: 86,
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
      change: "+5% from last month",
      trend: "up",
    },
    {
      title: "Resolved",
      value: 142,
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      change: "+18% from last month",
      trend: "up",
    },
    {
      title: "Pending",
      value: 106,
      icon: <Clock className="h-5 w-5 text-red-500" />,
      change: "-3% from last month",
      trend: "down",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
