import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../components/LandingPage.css";
import { About, ApplyScene, CaptureScene, DashboardMock, FinalCta, Hero, InboxScene, Pipeline, Roadmap, SearchDemo } from "../components/LandingScenes";

export default function LandingPage() {
  const [light, setLight] = useState(() => localStorage.getItem("kaptur-landing-theme") === "light");
  useEffect(() => localStorage.setItem("kaptur-landing-theme", light ? "light" : "dark"), [light]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.12, smoothWheel: true, syncTouch: false });
    const update = () => ScrollTrigger.update();
    const tick = time => lenis.raf(time * 1000);
    lenis.on("scroll", update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(1000, 16);
    return () => { lenis.off("scroll", update); gsap.ticker.remove(tick); lenis.destroy(); };
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
            <a href="https://github.com/Aakriti0207/kaptur" target="_blank" rel="noreferrer">GitHub</a>
            <button className="theme-toggle" onClick={() => setLight(value => !value)} aria-label="Toggle theme">{light ? "☾" : "☼"}</button>
            <button className="primary-button" onClick={handleLogin}>Continue with Google</button>
          </nav>
        </div>
      </header>
      <main>
        <Hero onLogin={handleLogin} onTheme={() => setLight(value => !value)} />
        <ApplyScene />
        <InboxScene />
        <CaptureScene />
        <Pipeline />
        <DashboardMock />
        <SearchDemo />
        <Roadmap />
        <About />
        <FinalCta onLogin={handleLogin} />
      </main>
    </div>
  );
}
