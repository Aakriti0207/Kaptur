export default function SkeletonCard({ className = "" }) {
  return (
    <div
      className={`animate-pulse bg-cream-border/50 dark:bg-espresso-border/50 rounded-card ${className}`}
    />
  );
}