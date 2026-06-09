interface Company {
  founder_seats: number;
  investor_seats: number;
  independent_seats: number;
}

interface Props {
  company: Company | null;
}

export default function VotingPowerBreakdown({
  company,
}: Props) {
  if (!company) return null;

  const total =
    company.founder_seats +
    company.investor_seats +
    company.independent_seats;

  return (
    <div className="glass-card p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">
        Voting Power Breakdown
      </h2>

      <p>
        Founder Voting Power:{" "}
        {Math.round((company.founder_seats / total) * 100)}%
      </p>

      <p>
        Investor Voting Power:{" "}
        {Math.round((company.investor_seats / total) * 100)}%
      </p>

      <p>
        Independent Voting Power:{" "}
        {Math.round((company.independent_seats / total) * 100)}%
      </p>
    </div>
  );
}