import { Link } from "react-router-dom";

export default function MarketingFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-espresso-border px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
      <div>
        <p className="font-serif text-lg font-semibold text-caramel">kaptur</p>
        <p className="mt-1 text-xs text-espresso-textSecondary">© {new Date().getFullYear()} Kaptur. Built by Aakriti Arya.</p>
      </div>
      <div className="flex gap-6 text-xs text-espresso-textSecondary">
        <Link to="/privacy" className="transition-colors hover:text-caramel">Privacy policy</Link>
        <Link to="/terms" className="transition-colors hover:text-caramel">Terms of service</Link>
      </div>
    </footer>
  );
}