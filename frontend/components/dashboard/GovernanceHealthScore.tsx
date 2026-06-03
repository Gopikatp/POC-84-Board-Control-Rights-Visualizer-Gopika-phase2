interface Company {
  founder_seats: number;
  investor_seats: number;
  independent_seats: number;
}

interface Props {
  company: Company | null;
}

export default function GovernanceHealthScore({
  company,
}: Props) {
  if (!company) return null;

  let score = 50;

  score += company.independent_seats * 10;

  const balance =
    Math.abs(
      company.founder_seats -
        company.investor_seats
    );

  score -= balance * 5;

  score = Math.max(
    0,
    Math.min(score, 100)
  );

  const status =
    score >= 75
      ? "Healthy Governance"
      : score >= 50
      ? "Moderate Governance"
      : "Concentrated Governance";

  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        Governance Health Score
      </h2>

      <p className="text-4xl font-bold text-cyan-400">
        {score}
      </p>

      <p className="mt-2 text-slate-400">
        {status}
      </p>
    </div>
  );
}