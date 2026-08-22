import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import HowItWorks from "../components/HowItWorks";
import FeatureGrid from "../components/FeatureGrid";
import MarketingFooter from "../components/Footer";

export default function LandingPage() {
  const handleLogin = () => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";
    window.location.href = `${apiUrl}/auth/google`;
  };

  return (
    <div className="min-h-screen bg-espresso-canvas">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <h1 className="font-serif text-2xl font-semibold text-caramel">kaptur</h1>
        <button
          onClick={handleLogin}
          className="text-sm font-medium bg-caramel text-white px-4 py-2 rounded-lg hover:bg-caramel-dark transition-colors"
        >
          Sign in
        </button>
      </nav>

      <Hero onLogin={handleLogin} />
      <DashboardPreview />
      <HowItWorks />
      <FeatureGrid />
      <MarketingFooter />
    </div>
  );
}