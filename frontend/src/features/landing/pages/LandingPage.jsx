import { Link } from "react-router-dom";
import { Mail, LayoutDashboard, Pencil } from "lucide-react";

export default function LandingPage() {
  const handleLogin = () => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";
    window.location.href = `${apiUrl}/auth/google`;
  };

  return (
    <div className="min-h-screen bg-espresso-canvas">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <h1 className="font-serif text-2xl font-semibold text-caramel">kaptur</h1>
        <button
          onClick={handleLogin}
          className="text-sm font-medium bg-caramel text-white px-4 py-2 rounded-lg hover:bg-caramel-dark transition-colors"
        >
          Sign in
        </button>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 py-16 md:py-24 text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-espresso-textPrimary leading-tight mb-4">
          Your job search,
          <br />
          organized automatically.
        </h2>
        <p className="text-espresso-textSecondary text-base md:text-lg mb-8">
          Kaptur reads your Gmail, finds every application you've sent, and
          tracks its status so you don't have to update a spreadsheet ever
          again.
        </p>
        <button
          onClick={handleLogin}
          className="inline-flex items-center gap-2 bg-caramel text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-caramel-dark transition-colors"
        >
          Continue with Google
        </button>
        <p className="text-xs text-espresso-textSecondary mt-3">
          Free. Takes 30 seconds. Read-only Gmail access.
        </p>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 py-16 bg-espresso-card">
        <h3 className="font-serif text-2xl font-semibold text-espresso-textPrimary text-center mb-12">
          How it works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Mail,
              title: "Connect Gmail",
              desc: "Sign in with Google. Kaptur only reads emails, never sends or deletes anything.",
            },
            {
              icon: LayoutDashboard,
              title: "Auto-tracked",
              desc: "Application confirmations, interview invites, and offers get detected and organized automatically.",
            },
            {
              icon: Pencil,
              title: "Stay in control",
              desc: "Edit any detail, add applications manually, archive what you don't need.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-caramel/10 flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-caramel" />
              </div>
              <h4 className="font-medium text-espresso-textPrimary mb-2">{title}</h4>
              <p className="text-sm text-espresso-textSecondary">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-espresso-border">
        <p className="text-xs text-espresso-textSecondary">
          © {new Date().getFullYear()} Kaptur. Built by Aakriti Arya.
        </p>
        <div className="flex gap-6 text-xs text-espresso-textSecondary">
          <Link to="/privacy" className="hover:text-caramel">
            Privacy policy
          </Link>
          <Link to="/terms" className="hover:text-caramel">
            Terms of service
          </Link>
        </div>
      </footer>
    </div>
  );
}