"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Sidebar from "@/components/dashboard/Sidebar";
import MetricsCards from "@/components/dashboard/MetricsCards";

import BoardSeatMap from "@/components/dashboard/BoardSeatMap";
import ControlMeter from "@/components/dashboard/ControlMeter";
import ScenarioCompare from "@/components/dashboard/ScenarioCompare";
import ProtectiveRights from "@/components/dashboard/ProtectiveRights";

import api from "@/lib/api";

interface Metrics {
  companies: number;
  founder_controlled: number;
  investor_controlled: number;
}

export default function Home() {
  const [metrics, setMetrics] = useState<Metrics>({
    companies: 0,
    founder_controlled: 0,
    investor_controlled: 0,
  });

  useEffect(() => {
    loadMetrics();
  }, []);

  async function loadMetrics() {
    try {
      const response = await api.get("/metrics");
      setMetrics(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <DashboardLayout sidebar={<Sidebar />}>
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Board Control Rights Visualizer
        </h1>

        <p className="text-slate-400 mb-8">
          Real Rails Intelligence Dashboard
        </p>

        <MetricsCards
          companies={metrics.companies}
          founderControlled={metrics.founder_controlled}
          investorControlled={metrics.investor_controlled}
        />

        <div className="space-y-6">
          <BoardSeatMap />

          <ControlMeter />

          <ScenarioCompare />

          <ProtectiveRights />
        </div>
      </div>
    </DashboardLayout>
  );
}