"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Founder Seats",
    value: 2,
  },
  {
    name: "Investor Seats",
    value: 3,
  },
  {
    name: "Independent Seats",
    value: 1,
  },
];

const COLORS = [
  "#22C55E",
  "#EAB308",
  "#38BDF8",
];

export default function BoardSeatMap() {
  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">
        Board Seat Map
      </h2>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}