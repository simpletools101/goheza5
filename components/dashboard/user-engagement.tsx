"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    likes: 4200,
    comments: 2400,
    shares: 1200,
  },
  {
    name: "Feb",
    likes: 5800,
    comments: 3100,
    shares: 1800,
  },
  {
    name: "Mar",
    likes: 7500,
    comments: 4000,
    shares: 2500,
  },
  {
    name: "Apr",
    likes: 8900,
    comments: 4800,
    shares: 3200,
  },
  {
    name: "May",
    likes: 9200,
    comments: 5100,
    shares: 3500,
  },
  {
    name: "Jun",
    likes: 8750,
    comments: 4700,
    shares: 3100,
  },
]

export function UserEngagement() {
  return (
    <ResponsiveContainer width="100%" height={300}>
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
        <Line type="monotone" dataKey="likes" stroke="#2563eb" strokeWidth={2} activeDot={{ r: 6, fill: "#2563eb" }} />
        <Line
          type="monotone"
          dataKey="comments"
          stroke="#16a34a"
          strokeWidth={2}
          activeDot={{ r: 6, fill: "#16a34a" }}
        />
        <Line type="monotone" dataKey="shares" stroke="#ea580c" strokeWidth={2} activeDot={{ r: 6, fill: "#ea580c" }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
