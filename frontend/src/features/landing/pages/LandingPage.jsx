import { useEffect, useState } from "react";
import Lenis from "lenis";
import "../components/LandingPage.css";
import { About, ApplyScene, CaptureScene, DashboardMock, FinalCta, Hero, InboxScene, Pipeline, Ribbon, Roadmap, SearchDemo, Trust } from "../components/LandingScenes";

export default function LandingPage() {
  const [light, setLight] = useState(() => localStorage.getItem("kaptur-landing-theme") === "light");
  useEffect(() => localStorage.setItem("kaptur-landing-theme", light ? "light" : "dark"), [light]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let frame;
    const tick = time => { lenis.raf(time); frame = requestAnimationFrame(tick); };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);
  const handleLogin = () => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";
    window.location.href = `${apiUrl}/auth/google`;
  };

  return (
    <div className={`kaptur-page ${light ? "light" : ""}`}>
      <header className="landing-nav">
        <div className="landing-nav-inner">
          <a className="wordmark" href="#top">kaptur</a>
          <nav className="nav-links">
            <a href="#pipeline">Pipeline</a>
            <a href="#about">About</a>
            <button className="theme-toggle" onClick={() => setLight(value => !value)} aria-label="Toggle theme">{light ? "☾" : "☼"}</button>
            <button className="primary-button" onClick={handleLogin}>Continue with Google</button>
          </nav>
        </div>
      </header>
      <main>
        <Ribbon />
        <Hero onLogin={handleLogin} onTheme={() => setLight(value => !value)} />
        <ApplyScene />
        <InboxScene />
        <CaptureScene />
        <Pipeline />
        <DashboardMock />
        <SearchDemo />
        <Trust onLogin={handleLogin} />
        <Roadmap />
        <About />
        <FinalCta onLogin={handleLogin} />
      </main>
    </div>
  );
}
