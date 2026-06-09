interface Company {
  company: string;
  founder_seats: number;
  investor_seats: number;
  independent_seats: number;
}

interface Props {
  company: Company | null;
}

export default function ControlMeter({
  company,
}: Props) {
  if (!company) return null;

  const totalSeats =
  company.founder_seats +
  company.investor_seats +
  company.independent_seats;

const founderControl = Math.round(
  (company.founder_seats / totalSeats) * 100
);

const investorControl = Math.round(
  (company.investor_seats / totalSeats) * 100
);

  return (
    <div className="glass-card p-6 text-white">
      <h2 className="text-xl font-semibold mb-6">
        Founder vs Investor Control
      </h2>

      <div className="space-y-5">
        <div>
          <div className="flex justify-between mb-2">
            <span>Founder</span>
            <span>{founderControl}%</span>
          </div>

          <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500"
              style={{
                width: `${founderControl}%`,
              }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Investor</span>
            <span>{investorControl}%</span>
          </div>

          <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-500"
              style={{
                width: `${investorControl}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}