import { Sparkles, ShieldCheck, LayoutGrid } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Smart detection",
    desc: "AI reads each email and figures out the company, role, and status — even filters out newsletters and spam.",
  },
  {
    icon: LayoutGrid,
    title: "One dashboard",
    desc: "Every application, every stage, one place. No more digging through your inbox to remember where you stand.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first",
    desc: "Read-only Gmail access. Kaptur never sends, deletes, or modifies your emails.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-espresso-card border border-espresso-border rounded-card p-6"
          >
            <Icon size={22} className="text-caramel mb-3" />
            <h3 className="font-medium text-espresso-textPrimary mb-2">{title}</h3>
            <p className="text-sm text-espresso-textSecondary">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}