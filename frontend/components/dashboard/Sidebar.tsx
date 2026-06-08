import DownloadData from "./DownloadData";
import GovernanceAlerts from "./GovernanceAlerts";

import VotingPowerBreakdown from "./VotingPowerBreakdown";
import BoardMajority from "./BoardMajority";
import GovernanceHealthScore from "./GovernanceHealthScore";
import GovernanceTimeline from "./GovernanceTimeline";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
}

interface Props {
  selectedCompany: Company | null;
  metrics: Metrics;
}

export default function Sidebar({
  selectedCompany,
  metrics,
}: Props) {
  if (!selectedCompany) {
    return null;
  }

  const founderProposal =
    selectedCompany.founder_seats <
    selectedCompany.investor_seats;

  const proposedFounderSeats =
    founderProposal
      ? selectedCompany.founder_seats + 1
      : selectedCompany.founder_seats;

  const proposedInvestorSeats =
    founderProposal
      ? Math.max(
          selectedCompany.investor_seats - 1,
          0
        )
      : selectedCompany.investor_seats + 1;

  const controlShift =
    proposedFounderSeats -
    proposedInvestorSeats;

  return (
    <div className="space-y-4">
      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Why This Matters
          </CardTitle>
        </CardHeader>

        <CardContent>
          Board control rights determine who can approve
          financings, acquisitions, leadership changes,
          and governance decisions. Small shifts in board
          composition can significantly alter company control.
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Who Controls The Rail
          </CardTitle>
        </CardHeader>

        <CardContent>
          Founders, investors, directors, and
          protective-right holders collectively shape
          governance outcomes and strategic decision-making
          authority.
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Selected Company
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="font-semibold mb-3">
            {selectedCompany.company}
          </p>

          <p>
            Founder Seats:{" "}
            {selectedCompany.founder_seats}
          </p>

          <p>
            Investor Seats:{" "}
            {selectedCompany.investor_seats}
          </p>

          <p>
            Independent Seats:{" "}
            {selectedCompany.independent_seats}
          </p>

          <p className="mt-3">
            Total Seats:{" "}
            {selectedCompany.founder_seats +
              selectedCompany.investor_seats +
              selectedCompany.independent_seats}
          </p>

          <div className="mt-3">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm">
              {selectedCompany.investor_seats >
              selectedCompany.founder_seats
                ? "Investor Dominated"
                : selectedCompany.founder_seats >
                  selectedCompany.investor_seats
                ? "Founder Dominated"
                : "Balanced Governance"}
            </span>
          </div>
        </CardContent>
      </Card>

      <VotingPowerBreakdown
        company={selectedCompany}
      />

      <BoardMajority
        company={selectedCompany}
      />

      <GovernanceHealthScore
        company={selectedCompany}
      />

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Governance Impact
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p>
            Net Control Shift:{" "}
            {controlShift}
          </p>

          <p className="mt-2 text-slate-400">
            Positive values indicate
            increased founder influence.
          </p>
        </CardContent>
      </Card>

      <GovernanceTimeline
        company={selectedCompany}
      />

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Governance Intelligence
          </CardTitle>
        </CardHeader>

        <CardContent>
          {selectedCompany.investor_seats >
            selectedCompany.founder_seats && (
            <p>
              Investor influence is dominant.
              Strategic approvals may require
              significant investor participation.
            </p>
          )}

          {selectedCompany.founder_seats >
            selectedCompany.investor_seats && (
            <p>
              Founder influence remains strong.
              Governance leverage largely stays
              with the founding team.
            </p>
          )}

          {selectedCompany.founder_seats ===
            selectedCompany.investor_seats && (
            <p>
              Governance influence is balanced.
              Founders and investors share
              decision-making authority.
            </p>
          )}
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Governance Alerts
          </CardTitle>
        </CardHeader>

        <CardContent>
          <GovernanceAlerts
            company={selectedCompany}
          />
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Dataset Summary
          </CardTitle>
        </CardHeader>

        <CardContent>
          Synthetic governance dataset.

          <br />
          <br />

          Companies: {metrics.companies}

          <br />

          Founder Controlled:{" "}
          {metrics.founder_controlled}

          <br />

          Investor Controlled:{" "}
          {metrics.investor_controlled}

          <br />
          <br />

          Includes board compositions,
          protective rights, governance
          stages, and control scenarios.
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>
            Source Context
          </CardTitle>
        </CardHeader>

        <CardContent>
          Governance concepts are inspired by
          board-control disclosures and governance
          structures commonly referenced in SEC EDGAR filings.

          <br />
          <br />

          The dashboard attempts data retrieval through
          an adapter layer and falls back to synthetic
          governance datasets when public event-level
          governance data is unavailable.
        </CardContent>
      </Card>

      <DownloadData
        data={selectedCompany}
      />
    </div>
  );
}