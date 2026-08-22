export default function DashboardPreview() {
  const rows = [
    { company: "Google", role: "SWE Intern", status: "Interview", statusColor: "bg-status-interview-bg text-status-interview-text" },
    { company: "Cvent", role: "SWE Intern", status: "Applied", statusColor: "bg-status-applied-bg text-status-applied-text" },
    { company: "Juspay", role: "SDE Intern", status: "OA", statusColor: "bg-status-oa-bg text-status-oa-text" },
  ];

  return (
    <div className="px-6 md:px-12 pb-16 max-w-3xl mx-auto">
      <div className="bg-espresso-card border border-espresso-border rounded-card p-4 md:p-6 shadow-2xl">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "Applied", value: "24" },
            { label: "Interviews", value: "3" },
            { label: "Offers", value: "1" },
          ].map((s) => (
            <div key={s.label} className="bg-espresso-canvas rounded-lg p-3 text-center">
              <p className="font-serif text-xl font-semibold text-caramel">{s.value}</p>
              <p className="text-xs text-espresso-textSecondary">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col divide-y divide-espresso-border">
          {rows.map((r) => (
            <div key={r.company} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-espresso-textPrimary">{r.company}</p>
                <p className="text-xs text-espresso-textSecondary">{r.role}</p>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${r.statusColor}`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}