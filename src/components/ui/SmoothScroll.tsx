"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Handle hash links correctly in Lenis using event delegation
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
          const targetEl = document.querySelector(href) as HTMLElement;
          if (targetEl) {
            e.preventDefault();
            // scrollTo handles offset for sticky headers easily
            lenis.scrollTo(targetEl, { offset: -100 });
          }
        }
      }
    };

    document.documentElement.addEventListener('click', handleHashClick);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      document.documentElement.removeEventListener('click', handleHashClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
