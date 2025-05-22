import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const users = [
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    platform: "Instagram",
    followers: "125K",
    engagement: "4.2%",
  },
  {
    name: "Jackson Lee",
    email: "jackson@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    platform: "TikTok",
    followers: "450K",
    engagement: "5.8%",
  },
  {
    name: "Olivia Martinez",
    email: "olivia@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    platform: "YouTube",
    followers: "1.2M",
    engagement: "3.5%",
  },
  {
    name: "Liam Johnson",
    email: "liam@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    platform: "Twitter",
    followers: "89K",
    engagement: "2.7%",
  },
]

export function RecentUsers() {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.email} className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium leading-none">{user.name}</p>
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
                          : "#1DA1F220",
                  color:
                    user.platform === "Instagram"
                      ? "#E1306C"
                      : user.platform === "TikTok"
                        ? "#000000"
                        : user.platform === "YouTube"
                          ? "#FF0000"
                          : "#1DA1F2",
                }}
              >
                {user.platform}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-sm font-medium">{user.followers}</p>
            <p className="text-xs text-muted-foreground">{user.engagement} Engagement</p>
          </div>
        </div>
      ))}
    </div>
  )
}
