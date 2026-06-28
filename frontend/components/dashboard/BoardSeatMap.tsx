"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Company {
  company: string;
  founder_seats: number;
  investor_seats: number;
  independent_seats: number;
}

interface Props {
  company: Company | null;
}

const COLORS = [
  "#22C55E",
  "#EAB308",
  "#38BDF8",
];

export default function BoardSeatMap({
  company,
}: Props) {
  if (!company) return null;

  const data = [
    {
      name: "Founder Seats",
      value: company.founder_seats,
    },
    {
      name: "Investor Seats",
      value: company.investor_seats,
    },
    {
      name: "Independent Seats",
      value: company.independent_seats,
    },
  ];

  return (
    <div 
      id="board-seat-map"
      data-testid="board-seat-map"
      className="glass-card p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">
        Board Seat Map
      </h2>

      <p className="text-slate-400 mb-4">
        {company.company}
      </p>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
              label
            >
              {data.map((_, index) => (
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