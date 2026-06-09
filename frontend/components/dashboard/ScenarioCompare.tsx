interface Company {
  founder_seats: number;
  investor_seats: number;
}

interface Props {
  company: Company | null;
}

export default function ScenarioCompare({
  company,
}: Props) {
  if (!company) return null;

  const founderProposal =
    company.founder_seats <
    company.investor_seats;

  const proposedFounderSeats =
    founderProposal
      ? company.founder_seats + 1
      : company.founder_seats;

  const proposedInvestorSeats =
    founderProposal
      ? Math.max(
          company.investor_seats - 1,
          0
        )
      : company.investor_seats + 1;

  const proposedOutcome =
    proposedFounderSeats >
    proposedInvestorSeats
      ? "Founder Controlled"
      : proposedInvestorSeats >
        proposedFounderSeats
      ? "Investor Controlled"
      : "Balanced Governance";

  return (
    <div className="glass-card p-6 text-white">
      <h2 className="text-xl font-semibold mb-6">
        Scenario Compare
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-700 rounded-lg p-4">
          <h3 className="font-semibold mb-2">
            Current Governance
          </h3>

          <p>
            Founder Seats: {company.founder_seats}
          </p>

          <p>
            Investor Seats: {company.investor_seats}
          </p>
        </div>

        <div className="border border-slate-700 rounded-lg p-4">
          <h3 className="font-semibold mb-2">
            Proposed Governance
          </h3>

          <p>
            Founder Seats: {proposedFounderSeats}
          </p>

          <p>
            Investor Seats: {proposedInvestorSeats}
          </p>
        </div>
      </div>

      <div className="mt-4 border border-cyan-500/30 bg-cyan-950/20 rounded-lg p-4">
        <p className="font-medium">
          Proposed Control Outcome
        </p>

        <p className="text-cyan-400 mt-1">
          {proposedOutcome}
        </p>
      </div>
    </div>
  );
}