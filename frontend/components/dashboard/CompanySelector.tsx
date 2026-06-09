"use client";

interface Props {
  companies: string[];
  selected: string;
  onSelect: (company: string) => void;
}

export default function CompanySelector({
  companies,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm text-slate-400">
        Select Company
      </label>

      <select
        aria-label="Select company"
        title="Select company"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="w-full bg-[#0B1117] border border-slate-700 rounded-lg p-3"
      >
        {companies.map((company) => (
          <option
            key={company}
            value={company}
          >
            {company}
          </option>
        ))}
      </select>
    </div>
  );
}