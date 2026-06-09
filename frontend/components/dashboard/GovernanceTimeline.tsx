interface Company {
  company: string;
  stage: string;
}

interface Props {
  company: Company | null;
}

export default function GovernanceTimeline({
  company,
}: Props) {
  if (!company) return null;

  const stages = [
    "Seed",
    "Series A",
    "Series B",
    "IPO",
  ];

  return (
    <div className="glass-card p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">
        Governance Timeline
      </h2>

      <div className="space-y-2">
        {stages.map((stage, index) => (
          <div key={stage}>
            <div
              className={`p-2 rounded ${
                company.stage === stage
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-900"
              }`}
            >
              {stage}
            </div>

            {index < stages.length - 1 && (
              <div className="text-center text-slate-500 py-1">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-400">
        Current Stage: {company.stage}
      </p>
    </div>
  );
}