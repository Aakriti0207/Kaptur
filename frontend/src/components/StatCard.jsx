export default function StatCard({ value, label }) {
  return (
    <div className="bg-cream-card dark:bg-espresso-card border border-cream-border dark:border-espresso-border rounded-card p-5 flex-1">
      <p className="font-serif text-3xl font-semibold text-caramel">{value}</p>
      <p className="text-sm text-cream-textSecondary dark:text-espresso-textSecondary mt-1">
        {label}
      </p>
    </div>
  );
}
