import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollScene(setup) {
  const scope = useRef(null);
  const setupRef = useRef(setup);
  setupRef.current = setup;
  useEffect(() => {
    if (!scope.current) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => setupRef.current({ reduced, gsap, ScrollTrigger }), scope);
    return () => context.revert();
  }, []);
  return scope;
}