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

  const majority =
    Math.floor(total / 2) + 1;

  return (
    <div className="space-y-2">

      {company.investor_seats >= majority && (
        <p>
          ⚠ Investor majority detected
        </p>
      )}

      {company.founder_seats >= majority && (
        <p>
          ⚠ Founder majority detected
        </p>
      )}

      {company.protective_rights &&
        company.protective_rights.length > 0 && (
          <p>
            ⚠ Protective rights require review
          </p>
        )}

      {company.independent_seats > 0 ? (
        <p>
          ✓ Independent directors present
        </p>
      ) : (
        <p>
          ⚠ No independent directors
        </p>
      )}
    </div>
  );
}