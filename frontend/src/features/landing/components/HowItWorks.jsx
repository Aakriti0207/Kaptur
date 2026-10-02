import { Mail, LayoutDashboard, Pencil } from "lucide-react";

const steps = [
  { icon: Mail, title: "Connect Gmail", desc: "Sign in with Google. Kaptur only reads emails, never sends or deletes anything." },
  { icon: LayoutDashboard, title: "Auto-tracked", desc: "Application confirmations, interview invites, and offers get detected and organized automatically." },
  { icon: Pencil, title: "Stay in control", desc: "Edit any detail, add applications manually, archive what you don't need." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-y border-espresso-border bg-espresso-card px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-caramel">From signal to system</p>
          <h2 className="mt-4 max-w-sm text-3xl font-medium leading-tight tracking-tight text-espresso-textPrimary md:text-4xl">Three small steps. No spreadsheet maintenance.</h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-espresso-textSecondary">Kaptur does the repetitive sorting. You decide what matters and what happens next.</p>
        </div>
        <div className="relative">
          <div className="absolute bottom-6 left-5 top-6 w-px bg-espresso-border" aria-hidden="true" />
          <div className="space-y-8">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative grid grid-cols-[2.5rem_1fr] gap-4">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-caramel bg-espresso-card text-caramel">
                  <Icon size={18} strokeWidth={1.7} />
                </div>
                <div className="border-b border-espresso-border pb-8">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-caramel">0{i + 1}</p>
                  <h3 className="text-base font-medium text-espresso-textPrimary">{title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-espresso-textSecondary">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}