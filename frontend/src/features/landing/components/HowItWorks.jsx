import { Mail, LayoutDashboard, Pencil } from "lucide-react";

const steps = [
  { icon: Mail, title: "Connect Gmail", desc: "Sign in with Google. Kaptur only reads emails, never sends or deletes anything." },
  { icon: LayoutDashboard, title: "Auto-tracked", desc: "Application confirmations, interview invites, and offers get detected and organized automatically." },
  { icon: Pencil, title: "Stay in control", desc: "Edit any detail, add applications manually, archive what you don't need." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 md:px-12 py-16 bg-espresso-card scroll-mt-16">
      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-espresso-textPrimary text-center mb-3">
        How it works
      </h2>
      <p className="text-espresso-textSecondary text-center text-sm mb-12">
        Three steps, then it runs itself.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="text-center relative">
            <div className="w-12 h-12 rounded-full bg-caramel/10 flex items-center justify-center mx-auto mb-4 relative">
              <Icon size={22} className="text-caramel" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-caramel text-white text-[10px] font-medium flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="font-medium text-espresso-textPrimary mb-2">{title}</h3>
            <p className="text-sm text-espresso-textSecondary">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}