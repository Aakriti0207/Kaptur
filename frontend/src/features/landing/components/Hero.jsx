export default function Hero({ onLogin }) {
    return (
      <section className="px-6 md:px-12 pt-16 md:pt-24 pb-12 text-center max-w-2xl mx-auto">
        <span className="inline-block text-xs font-medium text-caramel bg-caramel/10 px-3 py-1 rounded-full mb-6">
          Built for students juggling 20+ applications a day!
        </span>
    
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-espresso-textPrimary leading-tight mb-4">
          Your job search,
          <br />
          organized automatically.
        </h1>
    
        <p className="text-espresso-textSecondary text-base md:text-lg mb-8">
          Kaptur reads your Gmail, finds every application you've sent, and
          tracks its status — so you don't have to update a spreadsheet ever
          again.
        </p>
    
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onLogin}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-caramel text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-caramel-dark transition-colors"
          >
            Continue with Google
          </button>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-espresso-textSecondary px-6 py-3 rounded-lg text-sm font-medium border border-espresso-border hover:border-caramel hover:text-caramel transition-colors"
          >
            See how it works
          </a>
        </div>
        <p className="text-xs text-espresso-textSecondary mt-3">
          Free. Takes 30 seconds. Read-only Gmail access.
        </p>
      </section>
    );
}