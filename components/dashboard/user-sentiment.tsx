"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Positive", value: 65, color: "#16a34a" },
  { name: "Neutral", value: 25, color: "#6b7280" },
  { name: "Negative", value: 10, color: "#dc2626" },
]

export function UserSentiment() {
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

      <div className="grid grid-cols-3 gap-4">
        {data.map((sentiment) => (
          <div key={sentiment.name} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: sentiment.color }} />
            <div className="flex items-center justify-between w-full">
              <span className="text-sm">{sentiment.name}</span>
              <span className="text-sm font-medium">{sentiment.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
