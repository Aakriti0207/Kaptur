import { LockKeyhole, SlidersHorizontal } from "lucide-react";

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
      <div className="grid items-start gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-caramel">Your data, your call</p>
          <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-tight text-espresso-textPrimary md:text-4xl">Useful automation without giving up the steering wheel.</h2>
        </div>
        <div className="divide-y divide-espresso-border border-y border-espresso-border">
          <div className="grid gap-4 py-6 sm:grid-cols-[2rem_1fr]">
            <LockKeyhole size={20} className="text-caramel" strokeWidth={1.7} />
            <div>
              <h3 className="font-medium text-espresso-textPrimary">Read-only by design</h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-espresso-textSecondary">Kaptur reads the messages needed to find applications. It never sends, deletes, or modifies your emails.</p>
            </div>
          </div>
          <div className="grid gap-4 py-6 sm:grid-cols-[2rem_1fr]">
            <SlidersHorizontal size={20} className="text-caramel" strokeWidth={1.7} />
            <div>
              <h3 className="font-medium text-espresso-textPrimary">You can correct anything</h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-espresso-textSecondary">Review detected details, edit a status, add an application manually, or archive what no longer belongs in your view.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}