import { Link } from "react-router-dom";

export default function MarketingFooter() {
  return (
    <footer className="px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-espresso-border">
      <p className="text-xs text-espresso-textSecondary">
        © {new Date().getFullYear()} Kaptur. Built by Aakriti Arya.
      </p>
      <div className="flex gap-6 text-xs text-espresso-textSecondary">
        <Link to="/privacy" className="hover:text-caramel">Privacy policy</Link>
        <Link to="/terms" className="hover:text-caramel">Terms of service</Link>
      </div>
    </footer>
  );
}