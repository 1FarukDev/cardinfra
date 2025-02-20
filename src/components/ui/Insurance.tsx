"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

const chartData = [
  { date: "2024-05-15", running: 450, swimming: 300 },
  { date: "2024-06-16", running: 380, swimming: 420 },
  { date: "2024-07-17", running: 520, swimming: 120 },
  { date: "2024-08-18", running: 140, swimming: 550 },
  { date: "2024-09-19", running: 600, swimming: 350 },
  { date: "2024-10-20", running: 480, swimming: 400 },
  { date: "2024-11-21", running: 500, swimming: 450 },
]

const chartConfig = {
  running: {
    label: "Running",
    color: "#014DAF",
  },
  swimming: {
    label: "Swimming",
    color: "#CCE2FF",
  },
} satisfies ChartConfig

export function InsuaranceChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Monthly Insurance</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                })
              }}
            />
            <YAxis
              domain={[20, 'dataMax']}
              tickLine={false}
              axisLine={false}
            />
            <Bar
              dataKey="running"
              stackId="a"
              fill={chartConfig.running.color}
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="swimming"
              stackId="a"
              fill={chartConfig.swimming.color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}