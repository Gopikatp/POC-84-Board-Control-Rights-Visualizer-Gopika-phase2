import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      <div className="glass-card p-4">
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

      <div className="glass-card p-4">
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

      <div className="glass-card p-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <h3 className="text-slate-400 cursor-help">
              Investor Controlled
            </h3>
          </TooltipTrigger>

          <TooltipContent>
            Companies where investors hold equal or greater influence.
          </TooltipContent>
        </Tooltip>

        <p className="text-3xl font-bold text-yellow-400">
          {investorControlled}
        </p>
      </div>
    </div>
  );
}