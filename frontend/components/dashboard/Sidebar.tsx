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
  control_score: number;
}

interface Props {
  selectedCompany: Company | null;
}

export default function Sidebar({
  selectedCompany,
}: Props) {
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

      {selectedCompany && (
        <>
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
                Founder Seats:
                {" "}
                {selectedCompany.founder_seats}
              </p>

              <p>
                Investor Seats:
                {" "}
                {selectedCompany.investor_seats}
              </p>

              <p>
                Independent Seats:
                {" "}
                {selectedCompany.independent_seats}
              </p>

              <p className="mt-3">
                Control Score:
                {" "}
                {selectedCompany.control_score}
              </p>

              <div className="mt-3">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sm">
                  {selectedCompany.control_score >= 70
                    ? "Investor Dominated"
                    : selectedCompany.control_score >= 40
                    ? "Balanced Governance"
                    : "Founder Dominated"}
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
                Net Control Shift:
                {" "}
                {(selectedCompany.founder_seats + 1) -
                  Math.max(
                    selectedCompany.investor_seats - 1,
                    0
                  )}
              </p>

              <p className="mt-2 text-slate-400">
                Positive values indicate
                increased founder influence.
              </p>
            </CardContent>
          </Card>

          <GovernanceTimeline />

          <Card className="bg-slate-950 border-slate-800 text-white">
            <CardHeader>
              <CardTitle>
                Governance Intelligence
              </CardTitle>
            </CardHeader>

            <CardContent>
              {selectedCompany.control_score >= 70 && (
                <p>
                  Investor influence is dominant.
                  Governance approvals may require
                  significant investor participation.
                </p>
              )}

              {selectedCompany.control_score >= 40 &&
                selectedCompany.control_score < 70 && (
                  <p>
                    Governance influence is balanced.
                    Founders and investors share
                    decision-making power.
                  </p>
                )}

              {selectedCompany.control_score < 40 && (
                <p>
                  Founder influence remains strong.
                  Strategic governance leverage
                  largely stays with the founding team.
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

              Companies: 8

              <br />

              Founder Controlled: 3

              <br />

              Investor Controlled: 5

              <br />
              <br />

              Includes board compositions,
              protective rights, and governance
              control scenarios.
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

              Synthetic governance datasets are used for
              demonstration purposes.
            </CardContent>
          </Card>

          <DownloadData
            data={selectedCompany}
          />
        </>
      )}
    </div>
  );
}