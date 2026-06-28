"use client";

import { useState } from "react";

interface Company {
  founder_seats: number;
  investor_seats: number;
  independent_seats: number;
  protective_rights: string[];
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
  let supportingGroup = "";
  let requiredRight = "";

  switch (decision) {
    case "Budget Approval":
      threshold = Math.ceil(totalSeats * 0.5);

      availableVotes =
        company.founder_seats +
        company.independent_seats;

      supportingGroup =
        "Founders + Independent Directors";

      requiredRight = "budget_approval";
      break;

    case "New Financing":
      threshold = Math.ceil(totalSeats * 0.6);

      availableVotes =
        company.investor_seats +
        company.independent_seats;

      supportingGroup =
        "Investors + Independent Directors";

      requiredRight = "new_financing";
      break;

    case "Acquisition":
      threshold = Math.ceil(totalSeats * 0.75);

      availableVotes =
        company.founder_seats +
        company.investor_seats;

      supportingGroup =
        "Founders + Investors";

      requiredRight = "acquisition_approval";
      break;

    case "Board Expansion":
      threshold = totalSeats;

      availableVotes = totalSeats;

      supportingGroup =
        "Entire Board";

      requiredRight = "board_approval";
      break;

    default:
      threshold = Math.ceil(totalSeats * 0.5);
      availableVotes =
        company.founder_seats +
        company.independent_seats;
  }

  const approved =
    availableVotes >= threshold;

  const rightAvailable =
    company.protective_rights.includes(
      requiredRight
    );

  return (
    <div 
      id="decision-simulator"
      data-testid="decision-simulator"
      className="glass-card p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">
        Decision Approval Simulator
      </h2>

      <select
        aria-label="Simulation scenario"
        title="Simulation scenario"
        value={decision}
        onChange={(e) =>
          setDecision(e.target.value)
        }
        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 mb-4"
      >
        <option>Budget Approval</option>
        <option>New Financing</option>
        <option>Acquisition</option>
        <option>Board Expansion</option>
      </select>

      <div className="space-y-3">
        <p>
          <strong>Total Board Seats:</strong>{" "}
          {totalSeats}
        </p>

        <p>
          <strong>Votes Needed:</strong>{" "}
          {threshold}
        </p>

        <p>
          <strong>Supporting Group:</strong>{" "}
          {supportingGroup}
        </p>

        <p>
          <strong>Available Votes:</strong>{" "}
          {availableVotes}
        </p>

        <p>
          <strong>Required Right:</strong>{" "}
          {requiredRight.replaceAll(
            "_",
            " "
          )}
        </p>
      </div>

      <div className="mt-4">
        {rightAvailable ? (
          <div className="border border-green-500/40 bg-green-950/30 rounded-lg p-3 text-green-300">
            ✓ Required governance right available
          </div>
        ) : (
          <div className="border border-yellow-500/40 bg-yellow-950/30 rounded-lg p-3 text-yellow-300">
            ⚠ Required governance right not present
          </div>
        )}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-slate-900 border border-slate-700">
        <p
          className={`font-semibold ${
            approved
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {approved
            ? "✓ Decision Approved"
            : "✗ Decision Rejected"}
        </p>
      </div>
    </div>
  );
}