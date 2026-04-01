// // components/SmoothScrollProvider.tsx
// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";
// import "lenis/dist/lenis.css";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";

// export default function SmoothScrollProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useEffect(() => {
//     const lenis = new Lenis();

//     // Hook Lenis into GSAP's ticker so ScrollTrigger stays in sync
//     lenis.on("scroll", ScrollTrigger.update);

//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return <>{children}</>;
// }

// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import gsap from "gsap";

// export default function SmoothScrollProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     });

//     lenis.on("scroll", ScrollTrigger.update);

//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);

//     return () => {
//       gsap.ticker.remove((time) => lenis.raf(time * 1000));
//       lenis.destroy();
//     };
//   }, []);

//   return <>{children}</>;
// }

"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // ✅ expose lenis globally so any component can scroll
    (window as any).lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return <>{children}</>;
}
