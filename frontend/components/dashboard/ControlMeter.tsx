export default function ControlMeter() {
  const founderControl = 45;
  const investorControl = 55;

  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">
        Founder vs Investor Control
      </h2>

      <div className="space-y-4">
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