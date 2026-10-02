import "./Hero.css";

export default function Hero({ onLogin }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-14 pt-14 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:pb-20 md:pt-20">
      <div className="max-w-xl">
        <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-caramel">
          <span className="h-px w-8 bg-caramel" />
          Your search, in one place
        </p>
        <h1 className="max-w-lg font-sans text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-espresso-textPrimary lg:text-6xl">
          <span className="block">Your job search.</span>
          <span className="block text-caramel">One clear view.</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-espresso-textSecondary md:text-lg">
          Kaptur finds your job applications in Gmail and turns them into a tracker you can actually trust.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <button
            onClick={onLogin}
            className="inline-flex w-full items-center justify-center rounded-lg bg-caramel px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-caramel-dark focus:outline-none focus:ring-2 focus:ring-caramel-light focus:ring-offset-2 focus:ring-offset-espresso-canvas active:translate-y-px sm:w-auto"
          >
            Continue with Google
          </button>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-espresso-textSecondary transition-colors hover:text-caramel"
          >
            See how it works <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="mt-5 text-xs text-espresso-textSecondary">
          Read-only Gmail access. You stay in control.
        </p>
      </div>

      <div className="relative min-w-0 md:pl-4">
        <div className="hero-glow absolute -inset-10 bg-caramel/5 blur-3xl" aria-hidden="true" />
        <div className="hero-product relative border border-espresso-border bg-espresso-card p-3 shadow-2xl shadow-black/20 md:p-4">
          <div className="flex items-center justify-between border-b border-espresso-border px-2 pb-3">
            <div className="flex items-center gap-2 text-xs text-espresso-textSecondary">
              <span className="hero-pulse h-2 w-2 rounded-full bg-caramel" />
              Kaptur is reading your inbox
            </div>
            <span className="font-mono text-[10px] text-espresso-textSecondary"><span className="hero-sync-number" aria-label="Sync status" /></span>
          </div>
          <div className="grid gap-3 py-3 md:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-2">
              <p className="px-2 text-[10px] font-medium uppercase tracking-[0.16em] text-espresso-textSecondary">Recent email</p>
              <div className="hero-email relative border border-caramel/50 bg-caramel/10 p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-espresso-textPrimary">Cvent careers</span>
                  <span className="text-[10px] text-espresso-textSecondary">9:42 AM</span>
                </div>
                <p className="mt-3 text-xs leading-5 text-espresso-textSecondary">Your application for Software Engineer Intern</p>
                <div className="mt-3 flex items-center gap-2 text-[10px] text-caramel">
                  <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
                  Application detected
                </div>
              </div>
              <div className="hero-email-ghost border border-espresso-border p-3 opacity-60">
                <div className="h-2 w-20 bg-espresso-border" />
                <div className="mt-2 h-2 w-full bg-espresso-border/70" />
                <div className="mt-2 h-2 w-3/4 bg-espresso-border/70" />
              </div>
            </div>
            <div className="hero-application relative border border-espresso-border bg-espresso-canvas p-3 md:p-4">
              <span className="hero-flow-line" aria-hidden="true" />
              <div className="flex items-start justify-between gap-4 border-b border-espresso-border pb-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-caramel">New application</p>
                  <h2 className="mt-1 text-base font-medium text-espresso-textPrimary">Software Engineer Intern</h2>
                  <p className="text-xs text-espresso-textSecondary">Cvent · New Delhi</p>
                </div>
                <span className="border border-caramel/40 px-2 py-1 text-[10px] font-medium text-caramel">Applied</span>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4 text-xs">
                <div>
                  <p className="text-espresso-textSecondary">Detected from</p>
                  <p className="mt-1 text-espresso-textPrimary">Gmail</p>
                </div>
                <div>
                  <p className="text-espresso-textSecondary">Added</p>
                  <p className="mt-1 text-espresso-textPrimary">Today</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-espresso-border pt-3 text-[10px] text-espresso-textSecondary">
                <span className="hero-ready-dot h-1.5 w-1.5 rounded-full bg-caramel" />
                <span className="hero-ready-copy">Ready for your review</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-espresso-border px-2 pt-3 text-[10px] text-espresso-textSecondary">
            <span>24 applications organized</span>
            <span className="text-caramel">View tracker →</span>
          </div>
        </div>
      </div>
    </section>
  );
}