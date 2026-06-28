import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  companies: number;
  founderControlled: number;
  investorControlled: number;
  balancedGovernance: number;
}

export default function MetricsCards({
  companies,
  founderControlled,
  investorControlled,
  balancedGovernance,
}: Props) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div 
        id="metrics-cards"
        className="glass-card p-4"
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <h3 className="text-slate-400 cursor-help">
              Companies
            </h3>
          </TooltipTrigger>

          <TooltipContent>
            Total companies represented in the governance dataset.
          </TooltipContent>
        </Tooltip>

        <p className="text-3xl font-bold text-cyan-400">
          {companies}
        </p>
      </div>

      <div 
        id="founder-card" 
        className="glass-card p-4"
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <h3 className="text-slate-400 cursor-help">
              Founder Controlled
            </h3>
          </TooltipTrigger>

          <TooltipContent>
            Companies where founders hold more board influence.
          </TooltipContent>
        </Tooltip>

        <p className="text-3xl font-bold text-green-400">
          {founderControlled}
        </p>
      </div>

      <div 
        id="investor-card"
        className="glass-card p-4"
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <h3 className="text-slate-400 cursor-help">
              Investor Controlled
            </h3>
          </TooltipTrigger>

          <TooltipContent>
            Companies where investors hold more board influence.
          </TooltipContent>
        </Tooltip>

        <p className="text-3xl font-bold text-yellow-400">
          {investorControlled}
        </p>
      </div>

      <div 
        id="balanced-card" 
        className="glass-card p-4"
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <h3 className="text-slate-400 cursor-help">
              Balanced Governance
            </h3>
          </TooltipTrigger>

          <TooltipContent>
            Companies where founders and investors hold equal board influence.
          </TooltipContent>
        </Tooltip>

        <p className="text-3xl font-bold text-blue-400">
          {balancedGovernance}
        </p>
      </div>
    </div>
  );
}