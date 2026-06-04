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

  const controlShift =
    (company.founder_seats + 1) -
    Math.max(company.investor_seats - 1, 0);

  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6">
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
            Founder Seats: {company.founder_seats + 1}
          </p>

          <p>
            Investor Seats: {Math.max(
              company.investor_seats - 1,
              0
            )}
          </p>
        </div>
      </div>

    </div>
  );
}