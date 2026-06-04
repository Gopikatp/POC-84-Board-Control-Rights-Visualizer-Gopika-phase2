interface Company {
  founder_seats: number;
  investor_seats: number;
  independent_seats: number;
}

interface Props {
  company: Company | null;
}

export default function BoardMajority({
  company,
}: Props) {
  if (!company) return null;

  const total =
    company.founder_seats +
    company.investor_seats +
    company.independent_seats;

  const threshold =
    Math.floor(total / 2) + 1;

  const majority =
    company.investor_seats >= threshold
      ? "Investor Controlled"
      : company.founder_seats >= threshold
      ? "Founder Controlled"
      : "Shared Governance";

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">
        Board Majority Analysis
      </h2>

      <p>Total Seats: {total}</p>
      <p>Majority Threshold: {threshold}</p>
      <p>Current Majority: {majority}</p>
    </div>
  );
}