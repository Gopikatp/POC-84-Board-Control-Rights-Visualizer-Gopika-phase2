interface Props {
  companies: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function FilterBar({
  companies,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="glass-card p-6 text-white">
      <label className="block mb-2 text-sm text-slate-400">
        Filter Company
      </label>

      <select
         aria-label="Simulation scenario"
         title="Simulation scenario"
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