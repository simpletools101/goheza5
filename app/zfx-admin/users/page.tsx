"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Search } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialUsers = [
  {
    id: "1",
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    platform: "Instagram",
    accountType: "Individual",
    followers: "125K",
    engagement: "4.2%",
    followersCount: 125000,
    engagementRate: 4.2,
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    platform: "TikTok",
    accountType: "Individual",
    followers: "450K",
    engagement: "5.8%",
    followersCount: 450000,
    engagementRate: 5.8,
  },
  {
    id: "3",
    name: "Olivia Martinez",
    email: "olivia@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    platform: "YouTube",
    accountType: "Business",
    followers: "1.2M",
    engagement: "3.5%",
    followersCount: 1200000,
    engagementRate: 3.5,
  },
  {
    id: "4",
    name: "Liam Johnson",
    email: "liam@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    platform: "Twitter",
    accountType: "Individual",
    followers: "89K",
    engagement: "2.7%",
    followersCount: 89000,
    engagementRate: 2.7,
  },
  {
    id: "5",
    name: "Sophia Brown",
    email: "sophia@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    platform: "Instagram",
    accountType: "Individual",
    followers: "275K",
    engagement: "3.9%",
    followersCount: 275000,
    engagementRate: 3.9,
  },
  {
    id: "6",
    name: "Noah Garcia",
    email: "noah@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    platform: "Facebook",
    accountType: "Business",
    followers: "520K",
    engagement: "2.1%",
    followersCount: 520000,
    engagementRate: 2.1,
  },
  {
    id: "7",
    name: "Ava Rodriguez",
    email: "ava@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    platform: "TikTok",
    accountType: "Individual",
    followers: "780K",
    engagement: "6.3%",
    followersCount: 780000,
    engagementRate: 6.3,
  },
  {
    id: "8",
    name: "Ethan Davis",
    email: "ethan@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    platform: "YouTube",
    accountType: "Business",
    followers: "950K",
    engagement: "4.7%",
    followersCount: 950000,
    engagementRate: 4.7,
  },
]

type SortField = "name" | "platform" | "followers" | "engagement"
type SortDirection = "asc" | "desc"

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [platformFilter, setPlatformFilter] = useState<string | null>(null)
  const [accountTypeFilter, setAccountTypeFilter] = useState<string | null>(null)
  const [sortField, setSortField] = useState<SortField>("followers")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")

  // Handle sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  // Filter and sort users
  const filteredUsers = initialUsers
    .filter((user) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query) ||
          user.platform.toLowerCase().includes(query) ||
          user.accountType.toLowerCase().includes(query)
        )
      }
      return true
    })
    .filter((user) => {
      // Platform filter
      if (platformFilter) {
        return user.platform === platformFilter
      }
      return true
    })
    .filter((user) => {
      // Account type filter
      if (accountTypeFilter) {
        return user.accountType === accountTypeFilter
      }
      return true
    })
    .sort((a, b) => {
      // Sorting
      if (sortField === "name") {
        return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      } else if (sortField === "platform") {
        return sortDirection === "asc" ? a.platform.localeCompare(b.platform) : b.platform.localeCompare(a.platform)
      } else if (sortField === "followers") {
        return sortDirection === "asc" ? a.followersCount - b.followersCount : b.followersCount - a.followersCount
      } else if (sortField === "engagement") {
        return sortDirection === "asc" ? a.engagementRate - b.engagementRate : b.engagementRate - a.engagementRate
      }
      return 0
    })

  // Get unique platforms for filter
  const platforms = Array.from(new Set(initialUsers.map((user) => user.platform)))

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">Manage and analyze your social media users.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-1">
            <CardTitle>All Users</CardTitle>
            <CardDescription>A list of all users across your social media platforms.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  className="w-full pl-8 bg-gray-50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-1 w-full sm:w-auto">
                    {platformFilter || "All Platforms"}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setPlatformFilter(null)}>All Platforms</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {platforms.map((platform) => (
                    <DropdownMenuItem key={platform} onClick={() => setPlatformFilter(platform)}>
                      {platform}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-1 w-full sm:w-auto">
                    {accountTypeFilter || "All Account Types"}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setAccountTypeFilter(null)}>All Types</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setAccountTypeFilter("Individual")}>Individual</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setAccountTypeFilter("Business")}>Business</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
           
          </div>

          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">
                    <button
                      className="flex items-center gap-1 hover:text-primary-600 transition-colors"
                      onClick={() => handleSort("name")}
                    >
                      Name
                      <ArrowUpDown
                        className={`h-3 w-3 ${sortField === "name" ? "text-primary-600" : "text-muted-foreground"}`}
                      />
                    </button>
                  </TableHead>
                  <TableHead>
                    <button
                      className="flex items-center gap-1 hover:text-primary-600 transition-colors"
                      onClick={() => handleSort("platform")}
                    >
                      Platform
                      <ArrowUpDown
                        className={`h-3 w-3 ${sortField === "platform" ? "text-primary-600" : "text-muted-foreground"}`}
                      />
                    </button>
                  </TableHead>
                  <TableHead>Account Type</TableHead>
                  <TableHead className="text-right">
                    <button
                      className="flex items-center justify-end gap-1 hover:text-primary-600 transition-colors ml-auto"
                      onClick={() => handleSort("followers")}
                    >
                      Followers
                      <ArrowUpDown
                        className={`h-3 w-3 ${
                          sortField === "followers" ? "text-primary-600" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  </TableHead>
                  <TableHead className="text-right">
                    <button
                      className="flex items-center justify-end gap-1 hover:text-primary-600 transition-colors ml-auto"
                      onClick={() => handleSort("engagement")}
                    >
                      Engagement
                      <ArrowUpDown
                        className={`h-3 w-3 ${
                          sortField === "engagement" ? "text-primary-600" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  </TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No users found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell>
                        <Link href={`/zfx-admin/users/${user.id}`} className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="text-xs"
                          style={{
                            backgroundColor:
                              user.platform === "Instagram"
                                ? "#E1306C20"
                                : user.platform === "TikTok"
                                  ? "#00000020"
                                  : user.platform === "YouTube"
                                    ? "#FF000020"
                                    : user.platform === "Twitter"
                                      ? "#1DA1F220"
                                      : "#4267B220",
                            color:
                              user.platform === "Instagram"
                                ? "#E1306C"
                                : user.platform === "TikTok"
                                  ? "#000000"
                                  : user.platform === "YouTube"
                                    ? "#FF0000"
                                    : user.platform === "Twitter"
                                      ? "#1DA1F2"
                                      : "#4267B2",
                          }}
                        >
                          {user.platform}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.accountType}</TableCell>
                      <TableCell className="text-right font-medium">{user.followers}</TableCell>
                      <TableCell className="text-right font-medium">{user.engagement}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem asChild>
                              <Link href={`/users/${user.id}`}>View Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit User</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Delete User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredUsers.length} of {initialUsers.length} users
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
