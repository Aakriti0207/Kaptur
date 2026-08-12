const STATUS_STYLES = {
  Applied: "bg-status-applied-bg text-status-applied-text",
  OA: "bg-status-oa-bg text-status-oa-text",
  Interview: "bg-status-interview-bg text-status-interview-text",
  Offer: "bg-status-offer-bg text-status-offer-text",
  Rejected: "bg-status-rejected-bg text-status-rejected-text",
  Stale: "bg-status-stale-bg text-status-stale-text",
};

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || STATUS_STYLES.Stale;
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${style}`}>
      {status}
    </span>
  );
}
