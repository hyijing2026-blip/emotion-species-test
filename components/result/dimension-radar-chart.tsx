"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { getDimensionChartData } from "@/lib/result-generator";
import { DimensionScores } from "@/types/quiz";

type DimensionRadarChartProps = {
  scores: DimensionScores;
};

export function DimensionRadarChart({ scores }: DimensionRadarChartProps) {
  const data = getDimensionChartData(scores);

  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="72%">
          <PolarGrid stroke="rgba(23,18,15,0.12)" />
          <PolarAngleAxis
            dataKey="label"
            tick={{ fill: "#5c514a", fontSize: 12 }}
          />
          <Radar
            dataKey="value"
            stroke="#ff6b4a"
            fill="rgba(255,107,74,0.28)"
            fillOpacity={1}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
