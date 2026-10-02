export default function DashboardPreview() {
  const rows = [
    { company: "Google", role: "SWE Intern", status: "Interview", statusColor: "bg-status-interview-bg text-status-interview-text" },
    { company: "Cvent", role: "SWE Intern", status: "Applied", statusColor: "bg-status-applied-bg text-status-applied-text" },
    { company: "Juspay", role: "SDE Intern", status: "OA", statusColor: "bg-status-oa-bg text-status-oa-text" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
      <div className="mb-7 flex flex-col justify-between gap-3 border-t border-espresso-border pt-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-caramel">The tracker</p>
          <h2 className="mt-2 max-w-md text-2xl font-medium tracking-tight text-espresso-textPrimary md:text-3xl">Every application, without the spreadsheet.</h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-espresso-textSecondary">A living view of where your applications stand, updated from the emails already in your inbox.</p>
      </div>
      <div className="border border-espresso-border bg-espresso-card p-4 shadow-2xl shadow-black/10 md:p-6">
        <div className="mb-5 flex flex-col justify-between gap-3 border-b border-espresso-border pb-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs text-espresso-textSecondary">Good morning, Aakriti</p>
            <p className="mt-1 text-sm font-medium text-espresso-textPrimary">Your application pipeline</p>
          </div>
          <span className="text-xs text-caramel">Last synced just now</span>
        </div>
        <div className="mb-5 grid grid-cols-3 gap-2 md:gap-3">
          {[
            { label: "Applied", value: "24" },
            { label: "Interviews", value: "3" },
            { label: "Offers", value: "1" },
          ].map((s) => (
            <div key={s.label} className="border border-espresso-border bg-espresso-canvas p-3 md:p-4">
              <p className="font-mono text-xl font-medium text-caramel">{s.value}</p>
              <p className="text-xs text-espresso-textSecondary">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-[1fr_0.7fr]">
          <div>
            <div className="mb-2 grid grid-cols-[1.2fr_1fr_auto] gap-3 px-2 text-[10px] uppercase tracking-[0.14em] text-espresso-textSecondary">
              <span>Company</span><span>Role</span><span>Status</span>
            </div>
            <div className="divide-y divide-espresso-border border-y border-espresso-border">
              {rows.map((r) => (
                <div key={r.company} className="grid grid-cols-[1.2fr_1fr_auto] items-center gap-3 px-2 py-4">
                  <p className="text-sm font-medium text-espresso-textPrimary">{r.company}</p>
                  <p className="text-xs text-espresso-textSecondary">{r.role}</p>
                  <span className={`whitespace-nowrap px-2 py-1 text-[10px] font-medium ${r.statusColor}`}>
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-espresso-border bg-espresso-canvas p-4">
            <p className="text-xs font-medium text-espresso-textPrimary">Next up</p>
            <div className="mt-5 border-l border-caramel pl-3">
              <p className="text-xs text-caramel">Interview</p>
              <p className="mt-1 text-sm font-medium text-espresso-textPrimary">Google · SWE Intern</p>
              <p className="mt-1 text-xs leading-5 text-espresso-textSecondary">Your calendar is clear tomorrow at 11:00 AM.</p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-espresso-border pt-3 text-[10px] text-espresso-textSecondary">
              <span>3 active interviews</span>
              <span className="text-caramel">Open →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}