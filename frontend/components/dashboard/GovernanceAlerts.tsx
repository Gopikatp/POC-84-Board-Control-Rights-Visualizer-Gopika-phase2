interface Company {
  founder_seats: number;
  investor_seats: number;
  independent_seats: number;
  protective_rights?: string[];
}

interface Props {
  company: Company | null;
}

export default function GovernanceAlerts({
  company,
}: Props) {
  if (!company) return null;

  const total =
    company.founder_seats +
    company.investor_seats +
    company.independent_seats;

  const majority = Math.floor(total / 2) + 1;

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
        Governance Alerts
      </h3>

      {company.investor_seats >= majority && (
        <div className="border border-red-500/40 bg-red-950/30 rounded-lg p-3 transition-all hover:border-red-400">
          <p className="text-red-300 font-medium">
            ⚠ Investor majority detected
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Investors can independently approve most board decisions.
          </p>
        </div>
      )}

      {company.founder_seats >= majority && (
        <div className="border border-yellow-500/40 bg-yellow-950/30 rounded-lg p-3 transition-all hover:border-yellow-400">
          <p className="text-yellow-300 font-medium">
            ⚠ Founder majority detected
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Founders retain significant board control.
          </p>
        </div>
      )}

      {company.protective_rights &&
        company.protective_rights.length > 0 && (
          <div className="border border-orange-500/40 bg-orange-950/30 rounded-lg p-3 transition-all hover:border-orange-400">
            <p className="text-orange-300 font-medium">
              ⚠ Protective rights require review
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Certain strategic actions may require special approvals.
            </p>
          </div>
        )}

      {company.independent_seats > 0 ? (
        <div className="border border-green-500/40 bg-green-950/30 rounded-lg p-3 transition-all hover:border-green-400">
          <p className="text-green-300 font-medium">
            ✓ Independent directors present
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Board includes independent oversight.
          </p>
        </div>
      ) : (
        <div className="border border-red-500/40 bg-red-950/30 rounded-lg p-3 transition-all hover:border-red-400">
          <p className="text-red-300 font-medium">
            ⚠ No independent directors
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Governance risk due to lack of independent representation.
          </p>
        </div>
      )}
    </div>
  );
}