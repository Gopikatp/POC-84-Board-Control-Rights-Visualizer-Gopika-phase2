interface Company {
  protective_rights: string[];
}

interface Props {
  company: Company | null;
}

export default function ProtectiveRights({
  company,
}: Props) {
  if (!company) return null;

  return (
    <div className="glass-card p-6 text-white">
      <h2 className="text-xl font-semibold mb-6">
        Protective Rights Checklist
      </h2>

      <div className="space-y-3">
        {company.protective_rights.map(
          (right) => (
            <div
              key={right}
              className="flex items-center gap-3"
            >
              <input
                type="checkbox"
                checked
                readOnly
              />

              <span>
                {right.replaceAll(
                  "_",
                  " "
                )}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}