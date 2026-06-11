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
  balanced_governance: number;
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

  

  return (
    <div className="space-y-4">
      <Card className="glass-card text-white">
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

      <Card className="glass-card text-white">
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

      <Card className="glass-card text-white">
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

     

      <Card className="glass-card text-white">
        <CardHeader>
          <CardTitle>
            Governance Impact
          </CardTitle>
        </CardHeader>

        <CardContent>
  <p>
    Proposed Founder Seats:
    {" "}
    {proposedFounderSeats}
  </p>

  <p>
    Proposed Investor Seats:
    {" "}
    {proposedInvestorSeats}
  </p>

  <p className="mt-3 text-slate-400">
    Simulates how adding or removing
    board seats may alter governance
    control and voting influence.
  </p>
</CardContent>
      </Card>

      <GovernanceTimeline
        company={selectedCompany}
      />

      <Card className="glass-card text-white">
        <CardHeader>
          <CardTitle>
            Governance Intelligence
          </CardTitle>
        </CardHeader>

        <CardContent>
  {selectedCompany.investor_seats >
    selectedCompany.founder_seats && (
    <>
      <p>
        Investor influence is dominant.
        Strategic approvals may require
        significant investor participation.
      </p>

      <p className="mt-3 text-slate-400 text-sm">
        Investors hold a board advantage of{" "}
        {selectedCompany.investor_seats -
          selectedCompany.founder_seats}{" "}
        seat(s).
      </p>
    </>
  )}

  {selectedCompany.founder_seats >
    selectedCompany.investor_seats && (
    <>
      <p>
        Founder influence remains strong.
        Governance leverage largely stays
        with the founding team.
      </p>

      <p className="mt-3 text-slate-400 text-sm">
        Founders control{" "}
        {selectedCompany.founder_seats -
          selectedCompany.investor_seats}{" "}
        additional board seat(s).
      </p>
    </>
  )}

  {selectedCompany.founder_seats ===
    selectedCompany.investor_seats && (
    <>
      <p>
        Governance influence is balanced.
        Founders and investors share
        decision-making authority.
      </p>

      <p className="mt-3 text-slate-400 text-sm">
        Independent directors may act as
        deciding votes in key approvals.
      </p>
    </>
  )}
</CardContent>
      </Card>

      <Card className="glass-card text-white">
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

     <Card className="glass-card text-white">
  <CardHeader>
    <CardTitle>
      Data Source Status
    </CardTitle>
  </CardHeader>

  <CardContent>
    <span className="inline-block px-3 py-1 rounded-full bg-yellow-600 text-xs">
      Synthetic Fallback Active
    </span>

    <p className="mt-3 text-slate-400 text-sm">
      Governance data is currently served
      from the synthetic governance dataset
      through the adapter layer.
    </p>

    <p className="mt-2 text-slate-500 text-xs">
      Live SEC EDGAR integration is not
      currently available.
    </p>
  </CardContent>
</Card>

      <Card className="glass-card text-white">
        <CardHeader>
          <CardTitle>
            Dataset Summary
          </CardTitle>
        </CardHeader>

        <CardContent>
          Synthetic governance dataset used for visualization and governance scenario analysis.

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

          Balanced Governance:{" "}
          {metrics.balanced_governance}

          <br />
          <br />

          Includes board compositions,
          protective rights, governance
          stages, and control scenarios.
        </CardContent>
      </Card>

      <Card className="glass-card text-white">
        <CardHeader>
          <CardTitle>
            Source Context
          </CardTitle>
        </CardHeader>

        <CardContent>
           Governance concepts are inspired by
           board-control disclosures, proxy statements,
           voting structures, and governance frameworks
           commonly referenced in SEC EDGAR filings.

          <br />
          <br />

          The visualization layer translates these
          governance concepts into simplified board
          composition, voting power, and control-rights
          analytics for educational and demonstration
          purposes.
        </CardContent>
      </Card>

      <DownloadData
        data={selectedCompany}
      />
    </div>
  );
}