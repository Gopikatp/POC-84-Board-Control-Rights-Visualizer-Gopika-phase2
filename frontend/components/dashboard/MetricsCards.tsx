interface Props {
  companies: number;
  founderControlled: number;
  investorControlled: number;
}

export default function MetricsCards({
  companies,
  founderControlled,
  investorControlled,
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-4">
        <h3 className="text-slate-400">Companies</h3>
        <p className="text-3xl font-bold text-cyan-400">{companies}</p>
      </div>

      <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-4">
        <h3 className="text-slate-400">Founder Controlled</h3>
        <p className="text-3xl font-bold text-green-400">
          {founderControlled}
        </p>
      </div>

      <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-4">
        <h3 className="text-slate-400">Investor Controlled</h3>
        <p className="text-3xl font-bold text-yellow-400">
          {investorControlled}
        </p>
      </div>
    </div>
  );
}