"use client";

import { useState } from "react";

interface Company {
  founder_seats: number;
  investor_seats: number;
  independent_seats: number;
}

interface Props {
  company: Company | null;
}

export default function DecisionSimulator({
  company,
}: Props) {
  const [decision, setDecision] =
    useState("Budget Approval");

  if (!company) return null;

  const total =
    company.founder_seats +
    company.investor_seats +
    company.independent_seats;

  const threshold =
    Math.floor(total / 2) + 1;

  const votes =
    company.investor_seats +
    company.independent_seats;

  const approved =
    votes >= threshold;

  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        Decision Approval Simulator
      </h2>

      <select
        value={decision}
        onChange={(e) =>
          setDecision(e.target.value)
        }
        className="w-full bg-slate-900 border border-slate-700 rounded p-2 mb-4"
      >
        <option>Budget Approval</option>
        <option>New Financing</option>
        <option>Acquisition</option>
        <option>Board Expansion</option>
      </select>

      <p>Votes Needed: {threshold}</p>
      <p>Available Votes: {votes}</p>

      <p className="mt-3 font-semibold">
        Result: {approved ? "✓ Approved" : "✗ Rejected"}
      </p>
    </div>
  );
}