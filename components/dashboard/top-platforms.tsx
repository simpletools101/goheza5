"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Instagram", value: 35, color: "#E1306C" },
  { name: "Facebook", value: 25, color: "#4267B2" },
  { name: "Twitter", value: 20, color: "#1DA1F2" },
  { name: "TikTok", value: 15, color: "#000000" },
  { name: "YouTube", value: 5, color: "#FF0000" },
]

export function TopPlatforms() {
  return (
    <div className="flex flex-col gap-4">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              border: "none",
            }}
            formatter={(value) => [`${value}%`, "Percentage"]}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4">
        {data.map((platform) => (
          <div key={platform.name} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: platform.color }} />
            <div className="flex items-center justify-between w-full">
              <span className="text-sm">{platform.name}</span>
              <span className="text-sm font-medium">{platform.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
