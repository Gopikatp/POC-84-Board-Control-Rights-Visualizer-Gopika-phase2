interface Company {
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

  return (
    <div className="space-y-2">
      {company.investor_seats >= 3 && (
        <p>⚠ Investor majority detected</p>
      )}

      <p>
        ⚠ Protective rights require governance review
      </p>

      {company.independent_seats > 0 && (
        <p>✓ Independent directors present</p>
      )}
    </div>
  );
}