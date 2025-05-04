"use client"

import { useState } from "react"
import { MoreHorizontal, CheckCircle, AlertTriangle, Clock, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// This would normally be fetched from an API
const allComplaints = [
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
  {
    id: 5,
    title: "School building needs repair",
    category: "Education",
    status: "Pending",
    location: "Shivpur, Gujarat",
    date: "2023-04-07",
    user: "Rajesh Patel",
  },
  {
    id: 6,
    title: "Garbage not collected for a week",
    category: "Sanitation",
    status: "In Progress",
    location: "Ganganagar, Rajasthan",
    date: "2023-04-05",
    user: "Sunita Sharma",
  },
  {
    id: 7,
    title: "Primary health center lacks medicines",
    category: "Healthcare",
    status: "Resolved",
    location: "Bhimpur, Bihar",
    date: "2023-04-03",
    user: "Manoj Kumar",
  },
  {
    id: 8,
    title: "Street lights not working",
    category: "Electricity",
    status: "Pending",
    location: "Chandpur, Haryana",
    date: "2023-04-01",
    user: "Kavita Singh",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Pending":
      return <Clock className="h-4 w-4 text-yellow-500" />
    case "In Progress":
      return <AlertTriangle className="h-4 w-4 text-blue-500" />
    case "Resolved":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "Escalated":
      return <AlertTriangle className="h-4 w-4 text-red-500" />
    default:
      return null
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-800"
    case "In Progress":
      return "bg-blue-100 text-blue-800"
    case "Resolved":
      return "bg-green-100 text-green-800"
    case "Escalated":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
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
    case "Education":
      return "bg-green-100 text-green-800"
    case "Sanitation":
      return "bg-teal-100 text-teal-800"
    case "Healthcare":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

interface ComplaintListProps {
  status?: string
  limit?: number
}

export default function ComplaintList({ status, limit }: ComplaintListProps) {
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  // Filter complaints by status if provided
  let filteredComplaints = status ? allComplaints.filter((complaint) => complaint.status === status) : allComplaints

  // Sort complaints if sortField is set
  if (sortField) {
    filteredComplaints = [...filteredComplaints].sort((a, b) => {
      const aValue = a[sortField as keyof typeof a]
      const bValue = b[sortField as keyof typeof b]

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
      }

      return 0
    })
  }

  // Limit the number of complaints if limit is provided
  if (limit) {
    filteredComplaints = filteredComplaints.slice(0, limit)
  }

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">
              <Button
                variant="ghost"
                size="sm"
                className="-ml-3 h-8 data-[state=open]:bg-accent"
                onClick={() => handleSort("title")}
              >
                Complaint
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                size="sm"
                className="-ml-3 h-8 data-[state=open]:bg-accent"
                onClick={() => handleSort("category")}
              >
                Category
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                size="sm"
                className="-ml-3 h-8 data-[state=open]:bg-accent"
                onClick={() => handleSort("status")}
              >
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="hidden md:table-cell">
              <Button
                variant="ghost"
                size="sm"
                className="-ml-3 h-8 data-[state=open]:bg-accent"
                onClick={() => handleSort("date")}
              >
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="hidden md:table-cell">
              <Button
                variant="ghost"
                size="sm"
                className="-ml-3 h-8 data-[state=open]:bg-accent"
                onClick={() => handleSort("location")}
              >
                Location
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredComplaints.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                No complaints found
              </TableCell>
            </TableRow>
          ) : (
            filteredComplaints.map((complaint) => (
              <TableRow key={complaint.id}>
                <TableCell className="font-medium">{complaint.title}</TableCell>
                <TableCell>
                  <Badge className={getCategoryColor(complaint.category)}>{complaint.category}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {getStatusIcon(complaint.status)}
                    <Badge className={`ml-2 ${getStatusColor(complaint.status)}`}>{complaint.status}</Badge>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">{new Date(complaint.date).toLocaleDateString()}</TableCell>
                <TableCell className="hidden md:table-cell">{complaint.location}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Update Status</DropdownMenuItem>
                      <DropdownMenuItem>Assign to Authority</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
