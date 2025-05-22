"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Download,
  ExternalLink,
  Flag,
  Globe,
  Hash,
  Heart,
  MessageSquare,
  Share2,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserEngagement } from "@/components/dashboard/user-engagement"
import { UserSentiment } from "@/components/dashboard/user-sentiment"

// Mock database of users
const usersDatabase = [
  {
    id: "1",
    name: "Emma Wilson",
    username: "@emmawilson",
    bio: "Digital content creator and lifestyle influencer. Passionate about travel, fashion, and sustainable living.",
    avatar: "/placeholder.svg?height=128&width=128",
    coverImage: "/placeholder.svg?height=300&width=1200",
    platform: "Instagram",
    accountType: "Individual",
    followers: "125K",
    following: "850",
    posts: "1,245",
    engagement: "4.2%",
    location: "New York, USA",
    website: "emmawilson.com",
    joinedDate: "January 2018",
    email: "emma@example.com",
    phone: "+1 (555) 123-4567",
    tags: ["Fashion", "Travel", "Lifestyle", "Sustainability", "Beauty"],
    stats: {
      followers: 125000,
      avgLikes: 8750,
      engagement: 4.2,
      reach: 250000,
      uploads: 1245,
      impressions: 450000,
      fakeFollowers: 12,
      bestTime: "6:00 PM",
    },
    content: [
      {
        id: "post1",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Exploring the streets of Paris #Travel #Fashion",
        likes: 12500,
        comments: 350,
        date: "2023-05-15",
      },
      {
        id: "post2",
        image: "/placeholder.svg?height=300&width=300",
        caption: "My favorite sustainable fashion brands #Sustainability #Fashion",
        likes: 9800,
        comments: 210,
        date: "2023-05-10",
      },
      {
        id: "post3",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Morning routine essentials #Beauty #Lifestyle",
        likes: 11200,
        comments: 280,
        date: "2023-05-05",
      },
    ],
  },
  {
    id: "2",
    name: "Jackson Lee",
    username: "@jacksonlee",
    bio: "Content creator specializing in tech reviews and digital lifestyle. Always on the lookout for the latest gadgets and trends.",
    avatar: "/placeholder.svg?height=128&width=128",
    coverImage: "/placeholder.svg?height=300&width=1200",
    platform: "TikTok",
    accountType: "Individual",
    followers: "450K",
    following: "1.2K",
    posts: "890",
    engagement: "5.8%",
    location: "San Francisco, USA",
    website: "jacksonlee.tech",
    joinedDate: "March 2020",
    email: "jackson@example.com",
    phone: "+1 (555) 987-6543",
    tags: ["Tech", "Gadgets", "Reviews", "Tutorials", "Lifestyle"],
    stats: {
      followers: 450000,
      avgLikes: 26100,
      engagement: 5.8,
      reach: 780000,
      uploads: 890,
      impressions: 1200000,
      fakeFollowers: 8,
      bestTime: "8:00 PM",
    },
    content: [
      {
        id: "post1",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Unboxing the latest smartphone #Tech #Gadgets",
        likes: 28500,
        comments: 950,
        date: "2023-05-18",
      },
      {
        id: "post2",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Top 5 tech accessories you need #Tech #Lifestyle",
        likes: 31200,
        comments: 1100,
        date: "2023-05-12",
      },
      {
        id: "post3",
        image: "/placeholder.svg?height=300&width=300",
        caption: "How to set up your home office #Tutorials #Lifestyle",
        likes: 25800,
        comments: 820,
        date: "2023-05-08",
      },
    ],
  },
  {
    id: "3",
    name: "Olivia Martinez",
    username: "@oliviamartinez",
    bio: "Business owner and marketing specialist. Sharing insights on digital marketing, entrepreneurship, and business growth strategies.",
    avatar: "/placeholder.svg?height=128&width=128",
    coverImage: "/placeholder.svg?height=300&width=1200",
    platform: "YouTube",
    accountType: "Business",
    followers: "1.2M",
    following: "450",
    posts: "320",
    engagement: "3.5%",
    location: "Chicago, USA",
    website: "oliviamartinez.biz",
    joinedDate: "June 2017",
    email: "olivia@example.com",
    phone: "+1 (555) 456-7890",
    tags: ["Business", "Marketing", "Entrepreneurship", "Strategy", "Growth"],
    stats: {
      followers: 1200000,
      avgLikes: 42000,
      engagement: 3.5,
      reach: 1800000,
      uploads: 320,
      impressions: 2500000,
      fakeFollowers: 5,
      bestTime: "12:00 PM",
    },
    content: [
      {
        id: "post1",
        image: "/placeholder.svg?height=300&width=300",
        caption: "5 marketing strategies for small businesses #Marketing #Business",
        likes: 45000,
        comments: 1800,
        date: "2023-05-20",
      },
      {
        id: "post2",
        image: "/placeholder.svg?height=300&width=300",
        caption: "How to scale your business in 2023 #Growth #Strategy",
        likes: 38500,
        comments: 1500,
        date: "2023-05-15",
      },
      {
        id: "post3",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Building a personal brand as an entrepreneur #Entrepreneurship #Marketing",
        likes: 41200,
        comments: 1650,
        date: "2023-05-10",
      },
    ],
  },
  {
    id: "4",
    name: "Liam Johnson",
    username: "@liamjohnson",
    bio: "Fitness enthusiast and personal trainer. Sharing workout tips, nutrition advice, and motivation for a healthier lifestyle.",
    avatar: "/placeholder.svg?height=128&width=128",
    coverImage: "/placeholder.svg?height=300&width=1200",
    platform: "Twitter",
    accountType: "Individual",
    followers: "89K",
    following: "1.5K",
    posts: "3,210",
    engagement: "2.7%",
    location: "Miami, USA",
    website: "liamfitness.com",
    joinedDate: "August 2019",
    email: "liam@example.com",
    phone: "+1 (555) 234-5678",
    tags: ["Fitness", "Health", "Nutrition", "Workout", "Motivation"],
    stats: {
      followers: 89000,
      avgLikes: 2400,
      engagement: 2.7,
      reach: 150000,
      uploads: 3210,
      impressions: 320000,
      fakeFollowers: 10,
      bestTime: "7:00 AM",
    },
    content: [
      {
        id: "post1",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Morning workout routine #Fitness #Workout",
        likes: 2800,
        comments: 180,
        date: "2023-05-21",
      },
      {
        id: "post2",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Healthy meal prep ideas for the week #Nutrition #Health",
        likes: 3100,
        comments: 210,
        date: "2023-05-18",
      },
      {
        id: "post3",
        image: "/placeholder.svg?height=300&width=300",
        caption: "5 tips to stay motivated on your fitness journey #Motivation #Fitness",
        likes: 2600,
        comments: 150,
        date: "2023-05-15",
      },
    ],
  },
  {
    id: "5",
    name: "Sophia Brown",
    username: "@sophiabrown",
    bio: "Fashion blogger and style consultant. Sharing outfit inspirations, fashion trends, and styling tips for all seasons.",
    avatar: "/placeholder.svg?height=128&width=128",
    coverImage: "/placeholder.svg?height=300&width=1200",
    platform: "Instagram",
    accountType: "Individual",
    followers: "275K",
    following: "950",
    posts: "1,820",
    engagement: "3.9%",
    location: "Los Angeles, USA",
    website: "sophiastyle.com",
    joinedDate: "April 2018",
    email: "sophia@example.com",
    phone: "+1 (555) 876-5432",
    tags: ["Fashion", "Style", "Trends", "Outfits", "Beauty"],
    stats: {
      followers: 275000,
      avgLikes: 10725,
      engagement: 3.9,
      reach: 420000,
      uploads: 1820,
      impressions: 680000,
      fakeFollowers: 7,
      bestTime: "5:00 PM",
    },
    content: [
      {
        id: "post1",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Summer outfit ideas #Fashion #Style",
        likes: 12500,
        comments: 380,
        date: "2023-05-22",
      },
      {
        id: "post2",
        image: "/placeholder.svg?height=300&width=300",
        caption: "How to style a basic white tee #Style #Outfits",
        likes: 10800,
        comments: 320,
        date: "2023-05-19",
      },
      {
        id: "post3",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Fashion trends to watch in 2023 #Trends #Fashion",
        likes: 11200,
        comments: 350,
        date: "2023-05-16",
      },
    ],
  },
  {
    id: "6",
    name: "Noah Garcia",
    username: "@noahgarcia",
    bio: "Digital marketing agency founder. Helping businesses grow their online presence through effective marketing strategies.",
    avatar: "/placeholder.svg?height=128&width=128",
    coverImage: "/placeholder.svg?height=300&width=1200",
    platform: "Facebook",
    accountType: "Business",
    followers: "520K",
    following: "350",
    posts: "980",
    engagement: "2.1%",
    location: "Austin, USA",
    website: "noahdigital.com",
    joinedDate: "January 2016",
    email: "noah@example.com",
    phone: "+1 (555) 345-6789",
    tags: ["Marketing", "Digital", "Business", "Strategy", "Growth"],
    stats: {
      followers: 520000,
      avgLikes: 10920,
      engagement: 2.1,
      reach: 780000,
      uploads: 980,
      impressions: 1500000,
      fakeFollowers: 6,
      bestTime: "1:00 PM",
    },
    content: [
      {
        id: "post1",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Digital marketing trends for 2023 #Marketing #Digital",
        likes: 12000,
        comments: 450,
        date: "2023-05-23",
      },
      {
        id: "post2",
        image: "/placeholder.svg?height=300&width=300",
        caption: "How to improve your social media strategy #Strategy #Marketing",
        likes: 9800,
        comments: 380,
        date: "2023-05-20",
      },
      {
        id: "post3",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Case study: How we helped a client grow by 200% #Business #Growth",
        likes: 11500,
        comments: 420,
        date: "2023-05-17",
      },
    ],
  },
  {
    id: "7",
    name: "Ava Rodriguez",
    username: "@avarodriguez",
    bio: "Dance instructor and choreographer. Sharing dance tutorials, performance videos, and behind-the-scenes content.",
    avatar: "/placeholder.svg?height=128&width=128",
    coverImage: "/placeholder.svg?height=300&width=1200",
    platform: "TikTok",
    accountType: "Individual",
    followers: "780K",
    following: "650",
    posts: "1,450",
    engagement: "6.3%",
    location: "Atlanta, USA",
    website: "avadance.com",
    joinedDate: "July 2020",
    email: "ava@example.com",
    phone: "+1 (555) 567-8901",
    tags: ["Dance", "Choreography", "Tutorials", "Performance", "Entertainment"],
    stats: {
      followers: 780000,
      avgLikes: 49140,
      engagement: 6.3,
      reach: 1200000,
      uploads: 1450,
      impressions: 1800000,
      fakeFollowers: 4,
      bestTime: "7:00 PM",
    },
    content: [
      {
        id: "post1",
        image: "/placeholder.svg?height=300&width=300",
        caption: "New dance tutorial #Dance #Tutorials",
        likes: 52000,
        comments: 1800,
        date: "2023-05-24",
      },
      {
        id: "post2",
        image: "/placeholder.svg?height=300&width=300",
        caption: "Behind the scenes of our latest performance #Performance #Dance",
        likes: 48500,
        comments: 1650,
        date: "2023-05-21",
      },
      {
        id: "post3",
        image: "/placeholder.svg?height=300&width=300",
        caption: "5 tips to improve your dance skills #Tutorials #Choreography",
        likes: 50200,
        comments: 1750,
        date: "2023-05-18",
      },
    ],
  },
  {
    id: "8",
    name: "Ethan Davis",
    username: "@ethandavis",
    bio: "Educational content creator and online course instructor. Helping people learn new skills and advance their careers.",
    avatar: "/placeholder.svg?height=128&width=128",
    coverImage: "/placeholder.svg?height=300&width=1200",
    platform: "YouTube",
    accountType: "Business",
    followers: "950K",
    following: "280",
    posts: "420",
    engagement: "4.7%",
    location: "Seattle, USA",
    website: "ethanlearns.com",
    joinedDate: "September 2017",
    email: "ethan@example.com",
    phone: "+1 (555) 678-9012",
    tags: ["Education", "Courses", "Learning", "Skills", "Career"],
    stats: {
      followers: 950000,
      avgLikes: 44650,
      engagement: 4.7,
      reach: 1500000,
      uploads: 420,
      impressions: 2200000,
      fakeFollowers: 3,
      bestTime: "4:00 PM",
    },
    content: [
      {
        id: "post1",
        image: "/placeholder.svg?height=300&width=300",
        caption: "New course announcement: Web Development Fundamentals #Education #Skills",
        likes: 48000,
        comments: 2200,
        date: "2023-05-25",
      },
      {
        id: "post2",
        image: "/placeholder.svg?height=300&width=300",
        caption: "5 skills to boost your career in 2023 #Career #Learning",
        likes: 42500,
        comments: 1950,
        date: "2023-05-22",
      },
      {
        id: "post3",
        image: "/placeholder.svg?height=300&width=300",
        caption: "How to stay motivated while learning online #Education #Skills",
        likes: 45200,
        comments: 2100,
        date: "2023-05-19",
      },
    ],
  },
]

export default async function UserProfilePage({ params }: { params: { id: string } }) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Simulate fetching user data
  useEffect(() => {
    const fetchUser = () => {
      setLoading(true)
      // Find user by ID
      const foundUser = usersDatabase.find((u) => u.id === params.id)

      if (foundUser) {
        setUser(foundUser)
      }

      setLoading(false)
    }

    fetchUser()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" disabled>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="h-8 w-40 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
        <div className="space-y-6">
          <div className="h-40 bg-gray-200 animate-pulse rounded-xl"></div>
          <div className="h-32 bg-gray-200 animate-pulse rounded-md"></div>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-200 animate-pulse rounded-md"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/zfx-admin/users">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">User Not Found</h1>
        </div>
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">User not found</h2>
              <p className="text-muted-foreground mb-6">
                The user you're looking for doesn't exist or has been removed.
              </p>
              <Button asChild>
                <Link href="/zfx-admin/users">Return to Users</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/zfx-admin/users">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">User Profile</h1>
      </div>

      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-40 rounded-t-xl bg-gradient-to-r from-primary-600/20 to-primary-600/40" />

        <div className="relative mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Avatar className="h-32 w-32 border-4 border-white shadow-md">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="flex flex-1 flex-col items-center gap-2 text-center md:items-start md:text-left">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">{user.name}</h2>
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
                </div>
                <p className="text-muted-foreground">{user.username}</p>
              </div>

              <p className="max-w-2xl text-sm text-muted-foreground">{user.bio}</p>

              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    {user.website}
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined {user.joinedDate}</span>
                </div>
              </div>
            </div>

         
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Followers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.followers}</div>
                <p className="text-xs text-muted-foreground">+2.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.engagement}</div>
                <p className="text-xs text-muted-foreground">+0.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.posts}</div>
                <p className="text-xs text-muted-foreground">+12 from last month</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="mt-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Average Likes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{user.stats.avgLikes.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">Per post</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Reach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{(user.stats.reach / 1000).toFixed(0)}K</div>
                    <p className="text-xs text-muted-foreground">Monthly average</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Impressions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {user.stats.impressions >= 1000000
                        ? (user.stats.impressions / 1000000).toFixed(1) + "M"
                        : (user.stats.impressions / 1000).toFixed(0) + "K"}
                    </div>
                    <p className="text-xs text-muted-foreground">Monthly average</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Best Posting Time</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <div className="text-2xl font-bold">{user.stats.bestTime}</div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Engagement Over Time</CardTitle>
                    <CardDescription>Last 6 months of engagement metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserEngagement />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Audience Sentiment</CardTitle>
                    <CardDescription>Analysis of comment sentiment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserSentiment />
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Fake Followers</CardTitle>
                    <CardDescription>Estimated percentage of inauthentic followers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-primary-600/20">
                        <div className="text-center">
                          <div className="text-3xl font-bold">{user.stats.fakeFollowers}%</div>
                          <div className="text-xs text-muted-foreground">Fake</div>
                        </div>
                      </div>
                      <div className="mt-2 w-full">
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Authentic</span>
                          <span>{100 - user.stats.fakeFollowers}%</span>
                        </div>
                        <Progress value={100 - user.stats.fakeFollowers} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Hashtags</CardTitle>
                    <CardDescription>Most frequently used hashtags</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {user.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                          <Hash className="h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Audience Demographics</CardTitle>
                    <CardDescription>Follower age and gender distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Female (68%)</span>
                          <span>68%</span>
                        </div>
                        <Progress value={68} className="h-2" />
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Male (30%)</span>
                          <span>30%</span>
                        </div>
                        <Progress value={30} className="h-2" />
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>Other (2%)</span>
                          <span>2%</span>
                        </div>
                        <Progress value={2} className="h-2" />
                      </div>
                      <Separator />
                      <div className="flex justify-between text-xs">
                        <div className="text-center">
                          <div className="font-medium">18-24</div>
                          <div className="text-muted-foreground">35%</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">25-34</div>
                          <div className="text-muted-foreground">42%</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">35-44</div>
                          <div className="text-muted-foreground">15%</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">45+</div>
                          <div className="text-muted-foreground">8%</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Private contact details for this user</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Email Address</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Phone Number</div>
                      <div className="text-sm text-muted-foreground">{user.phone}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Account Type</div>
                      <div className="text-sm text-muted-foreground">{user.accountType}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Joined Date</div>
                      <div className="text-sm text-muted-foreground">{user.joinedDate}</div>
                    </div>
                  </div>
                 
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Content</CardTitle>
                  <CardDescription>Latest posts from this user</CardDescription>
                </CardHeader>
                <CardContent>
                  {user.content && user.content.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-3">
                      {user.content.map((post: any) => (
                        <Card key={post.id} className="overflow-hidden">
                          <div className="aspect-square relative">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.caption}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <CardContent className="p-4">
                            <p className="text-sm line-clamp-2 mb-2">{post.caption}</p>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Heart className="h-3 w-3" />
                                <span>{post.likes.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-3 w-3" />
                                <span>{post.comments.toLocaleString()}</span>
                              </div>
                              <div>{new Date(post.date).toLocaleDateString()}</div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <Heart className="h-10 w-10 text-muted-foreground" />
                        <h3 className="text-lg font-medium">No Content Available</h3>
                        <p className="max-w-xs text-sm text-muted-foreground">
                          This user hasn't posted any content yet.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
