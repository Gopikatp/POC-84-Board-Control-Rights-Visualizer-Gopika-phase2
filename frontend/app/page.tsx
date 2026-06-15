"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Sidebar from "@/components/dashboard/Sidebar";
import MetricsCards from "@/components/dashboard/MetricsCards";

import BoardSeatMap from "@/components/dashboard/BoardSeatMap";
import ControlMeter from "@/components/dashboard/ControlMeter";
import ScenarioCompare from "@/components/dashboard/ScenarioCompare";
import ProtectiveRights from "@/components/dashboard/ProtectiveRights";
import DecisionSimulator from "@/components/dashboard/DecisionSimulator";

import FilterBar from "@/components/dashboard/FilterBar";

import api from "@/lib/api";

interface Company {
  company: string;
  founder_seats: number;
  investor_seats: number;
  independent_seats: number;
  stage: string;
  protective_rights: string[];
}

interface Metrics {
  companies: number;
  founder_controlled: number;
  investor_controlled: number;
  balanced_governance: number;
}

export default function Home() {
  const [metrics, setMetrics] = useState<Metrics>({
    companies: 0,
    founder_controlled: 0,
    investor_controlled: 0,
    balanced_governance: 0,
  });

  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] =
    useState<Company | null>(null);
  const [panelOpen, setPanelOpen] =
  useState(false);

  useEffect(() => {
    loadDashboardData();
  }, []);

  async function loadDashboardData() {
    try {
      const metricsResponse =
        await api.get("/metrics");

      setMetrics(metricsResponse.data);

      const companyResponse =
        await api.get("/companies");

      setCompanies(companyResponse.data);

      if (companyResponse.data.length > 0) {
        setSelectedCompany(
          companyResponse.data[0]
        );
          setPanelOpen(true);
      }
    } catch (error) {
      console.error(
        "Dashboard load failed:",
        error
      );
    }
  }

  return (
    <DashboardLayout
      isPanelOpen={panelOpen}
      onClosePanel={() => setPanelOpen(false)}
      sidebar={
        <Sidebar
          selectedCompany={selectedCompany}
          metrics={metrics}
        />
      }
    >
      <div>
        <h1 className="text-3xl font-bold mb-2 ml-2">
          Board Control Rights Visualizer
        </h1>

        <span
          className="
            px-2 py-1 rounded-full text-xs font-medium
            bg-amber-500/20 text-amber-300
            border border-amber-500/30 ml-2
          "
        >
          MOCK DATA
        </span>

        <p className="text-slate-400 mb-2 mt-3 ml-2"> 
          Board Governance Analytics & Control Rights Intelligence
        </p>

        <MetricsCards
          companies={metrics.companies}
          founderControlled={
            metrics.founder_controlled
          }
          investorControlled={
            metrics.investor_controlled
          }
          balancedGovernance={
            metrics.balanced_governance
          }
        />

        {companies.length > 0 && (
          <FilterBar
            companies={companies.map(
    (c) => c.company
  )}
  selected={
    selectedCompany?.company || ""
  }
  onSelect={(companyName) => {
    const company = companies.find(
      (c) =>
        c.company === companyName
    );

    if (company) {
      setSelectedCompany(company);
      setPanelOpen(true);
    }
  }}
/>
        )}

        <div className="space-y-6">
          <BoardSeatMap
            company={selectedCompany}
          />

          <ControlMeter
            company={selectedCompany}
          />

          <DecisionSimulator
            company={selectedCompany}
          />

          <ScenarioCompare
            company={selectedCompany}
          />

          <ProtectiveRights
            company={selectedCompany}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}