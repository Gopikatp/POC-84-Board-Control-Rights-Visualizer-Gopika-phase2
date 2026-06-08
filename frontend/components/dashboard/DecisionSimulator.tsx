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

  const totalSeats =
    company.founder_seats +
    company.investor_seats +
    company.independent_seats;

  let threshold = 0;
  let availableVotes = 0;

  switch (decision) {
    case "Budget Approval":
      threshold = Math.ceil(totalSeats * 0.5);

      availableVotes =
        company.founder_seats +
        company.independent_seats;
      break;

    case "New Financing":
      threshold = Math.ceil(totalSeats * 0.6);

      availableVotes =
        company.investor_seats +
        company.independent_seats;
      break;

    case "Acquisition":
      threshold = Math.ceil(totalSeats * 0.75);

      availableVotes =
        company.investor_seats +
        company.founder_seats;
      break;

    case "Board Expansion":
      threshold = totalSeats;

      availableVotes =
        company.founder_seats +
        company.investor_seats +
        company.independent_seats;
      break;

    default:
      threshold = Math.ceil(totalSeats * 0.5);

      availableVotes =
        company.founder_seats +
        company.independent_seats;
  }

  const approved =
    availableVotes >= threshold;

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

      <div className="space-y-2">
        <p>
          Total Board Seats: {totalSeats}
        </p>

        <p>
          Votes Needed: {threshold}
        </p>

        <p>
          Available Votes: {availableVotes}
        </p>
      </div>

      <div className="mt-4">
        <p
          className={`font-semibold ${
            approved
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          Result:{" "}
          {approved
            ? "✓ Approved"
            : "✗ Rejected"}
        </p>
      </div>
    </div>
  );
}