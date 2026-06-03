export default function ProtectiveRights() {
  const rights = [
    "Budget Approval",
    "New Financing",
    "Board Approval",
    "Acquisition Approval",
  ];

  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">
        Protective Rights Checklist
      </h2>

      <div className="space-y-3">
        {rights.map((right) => (
          <div
            key={right}
            className="flex items-center gap-3"
          >
            <input
              type="checkbox"
              checked
              readOnly
            />

            <span>{right}</span>
          </div>
        ))}
      </div>
    </div>
  );
}