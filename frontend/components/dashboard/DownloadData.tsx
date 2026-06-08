interface Props {
  data: any;
}

export default function DownloadData({
  data,
}: Props) {
  function downloadJSON() {
    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      {
        type: "application/json",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download =
      `${data.company}-governance-report.json`;

    link.click();
  }

  function downloadCSV() {
    if (!data) return;

    const totalSeats =
      data.founder_seats +
      data.investor_seats +
      data.independent_seats;

    const founderVotingPower = Math.round(
      (data.founder_seats / totalSeats) * 100
    );

    const investorVotingPower = Math.round(
      (data.investor_seats / totalSeats) * 100
    );

    const independentVotingPower = Math.round(
      (data.independent_seats / totalSeats) * 100
    );

    const majorityThreshold =
      Math.floor(totalSeats / 2) + 1;

    const governanceType =
      data.investor_seats >
      data.founder_seats
        ? "Investor Dominated"
        : data.founder_seats >
          data.investor_seats
        ? "Founder Dominated"
        : "Balanced Governance";

    const csvContent =
`Field,Value
Company,${data.company}
Stage,${data.stage}
Founder Seats,${data.founder_seats}
Investor Seats,${data.investor_seats}
Independent Seats,${data.independent_seats}
Total Seats,${totalSeats}
Founder Voting Power,${founderVotingPower}%
Investor Voting Power,${investorVotingPower}%
Independent Voting Power,${independentVotingPower}%
Majority Threshold,${majorityThreshold}
Governance Classification,${governanceType}
Protective Rights,"${data.protective_rights.join("; ")}"
Data Source,Synthetic Governance Dataset`;

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download =
      `${data.company}-governance-report.csv`;

    link.click();
  }

  return (
    <div className="space-y-2">
      <button
        onClick={downloadJSON}
        className="w-full bg-cyan-600 hover:bg-cyan-700 rounded-lg p-3"
      >
        Download JSON
      </button>

      <button
        onClick={downloadCSV}
        className="w-full bg-green-600 hover:bg-green-700 rounded-lg p-3"
      >
        Download CSV Report
      </button>
    </div>
  );
}