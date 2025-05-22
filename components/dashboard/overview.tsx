"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    followers: 2500,
    engagement: 1400,
  },
  {
    name: "Feb",
    followers: 3000,
    engagement: 1600,
  },
  {
    name: "Mar",
    followers: 3500,
    engagement: 1900,
  },
  {
    name: "Apr",
    followers: 4200,
    engagement: 2100,
  },
  {
    name: "May",
    followers: 4800,
    engagement: 2400,
  },
  {
    name: "Jun",
    followers: 5500,
    engagement: 2800,
  },
  {
    name: "Jul",
    followers: 6000,
    engagement: 3200,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            border: "none",
          }}
        />
        <Line
          type="monotone"
          dataKey="followers"
          stroke="#2563eb"
          strokeWidth={2}
          activeDot={{ r: 6, fill: "#2563eb" }}
        />
        <Line
          type="monotone"
          dataKey="engagement"
          stroke="#16a34a"
          strokeWidth={2}
          activeDot={{ r: 6, fill: "#16a34a" }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
