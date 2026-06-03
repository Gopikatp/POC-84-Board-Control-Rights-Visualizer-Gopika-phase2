import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sidebar() {
  return (
    <div className="space-y-4">
      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>Why This Matters</CardTitle>
        </CardHeader>
        <CardContent>
          Board control rights determine who can influence strategic decisions,
          financing events, and governance outcomes.
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>Who Controls The Rail</CardTitle>
        </CardHeader>
        <CardContent>
          Founders, investors, board members, and protective-right holders
          collectively shape governance control.
        </CardContent>
      </Card>

      <Card className="bg-slate-950 border-slate-800 text-white">
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          Company
          <br />
          Board Composition
          <br />
          Control Status
        </CardContent>
      </Card>
    </div>
  );
}