// "use client";

// import {
//   RiLinkedinBoxLine,
//   RiGithubFill,
//   RiArrowDownLine,
//   RiMailLine,
//   RiTwitterXLine,
// } from "@remixicon/react";
// import { gsap, useGSAP, SplitText } from "@/lib/gsap-util";
// import { useRef } from "react";
// import TechMarquee from "./Techmarquee";
// import { socialLinks } from "@/data/data";
// import Image from "next/image";
// import { MarqueeScroll } from "infinite-marquee-scroll";

// const iconMap = {
//   github: RiGithubFill,
//   linkedin: RiLinkedinBoxLine,
//   twitter: RiTwitterXLine,
//   email: RiMailLine,
// };

// // small helper to convert images → icon components

// const marqueeItems = [
//   { text: "React", image: { src: "/icons/react.svg" } },
//   { text: "Next.js", image: { src: "/icons/Next.svg" } },
//   { text: "Clerk", image: { src: "/icons/clerk.svg" } },
//   { text: "Convex", image: { src: "/icons/convex.png" } },
//   { text: "HTML", image: { src: "/icons/html.png" } },
//   { text: "CSS", image: { src: "/icons/css3.svg" } },
//   { text: "JavaScript", image: { src: "/icons/javascript.svg" } },
//   { text: "shadcn/ui", image: { src: "/icons/shadcn.png" } },
//   { text: "Tailwind", image: { src: "/icons/tailwindcss.svg" } },
// ];

// export default function Hero() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useGSAP(
//     () => {
//       const textSplit = SplitText.create(".text", {
//         type: "words, lines",
//         linesClass: "text-line",
//       });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".hero-wrapper",
//           start: "top center",
//         },
//       });

//       tl.from(textSplit.words, {
//         yPercent: 100,
//         autoAlpha: 0,
//         duration: 1,
//         stagger: 0.1,
//         ease: "power2.inOut",
//       });
//     },
//     { scope: containerRef },
//   );

//   return (
//     <section ref={containerRef} id="home" className="relative">
//       <div className="container flex items-center justify-center flex-col min-h-screen">
//         {/* Hero text */}
//         <div className="hero-wrapper text-center my-auto">
//           <p className="text uppercase">hi, I&lsquo;m Drew</p>
//           <h1 className="text text-4xl sm:text-5xl lg:text-7xl mt-1.5">
//             Frontend Developer
//           </h1>
//           <h2 className="text text-4xl sm:text-5xl lg:text-7xl mt-1.5">
//             I build modern web apps with React, Next.js, Clerk & Convex
//           </h2>
//         </div>

//         {/* Social links */}
//         <div className="absolute max-sm:bottom-48 bottom-32 left-8 flex flex-col gap-3">
//           {socialLinks.map(({ id, label, href, icon }) => {
//             const Icon = iconMap[icon as keyof typeof iconMap];
//             return (
//               <a
//                 key={id}
//                 href={href}
//                 target={href.startsWith("mailto") ? "_self" : "_blank"}
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="hover:scale-105 transition-transform"
//               >
//                 <Icon size={30} />
//               </a>
//             );
//           })}
//         </div>

//         <div className="mx-auto w-full mt-16">
//           <MarqueeScroll
//             items={marqueeItems}
//             speed={22}
//             imageSize={28}
//             iconClassName="flex items-center justify-center"
//             textClassName="text-neutral-700 text-sm sm:text-base font-semibold"
//           />
//         </div>

//         {/* Scroll down */}
//         <div className="flex items-center gap-2 mb-5">
//           <span className="animate-bounce">
//             <RiArrowDownLine />
//           </span>
//           <span className="text-lg uppercase">Scroll down</span>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  RiLinkedinBoxLine,
  RiGithubFill,
  RiArrowDownLine,
  RiMailLine,
  RiTwitterXLine,
} from "@remixicon/react";
import { gsap, useGSAP, SplitText } from "@/lib/gsap-util";
import { useRef } from "react";
import TechMarquee from "./Techmarquee";
import { socialLinks } from "@/data/data";
import Image from "next/image";
import { MarqueeScroll } from "infinite-marquee-scroll";

const iconMap = {
  github: RiGithubFill,
  linkedin: RiLinkedinBoxLine,
  twitter: RiTwitterXLine,
  email: RiMailLine,
};

const marqueeItems = [
  { text: "React", image: { src: "/icons/react.svg" } },
  { text: "Next.js", image: { src: "/icons/Next.svg" } },
  { text: "Clerk", image: { src: "/icons/clerk.svg" } },
  { text: "Convex", image: { src: "/icons/convex.jpg" } },
  { text: "HTML", image: { src: "/icons/html.png" } },
  { text: "CSS", image: { src: "/icons/css3.svg" } },
  { text: "JavaScript", image: { src: "/icons/javascript.svg" } },
  { text: "shadcn/ui", image: { src: "/icons/shadcn.png" } },
  { text: "Tailwind", image: { src: "/icons/tailwindcss.svg" } },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const textSplit = SplitText.create(".text", {
        type: "words, lines",
        linesClass: "text-line",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-wrapper",
          start: "top center",
        },
      });

      tl.from(textSplit.words, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} id="home" className="relative">
      <div className="container flex items-center justify-center flex-col min-h-screen">
        {/* Hero text */}
        <div className="hero-wrapper text-center my-auto">
          <p className="text uppercase">hi, I&lsquo;m Drew</p>
          <h1 className="text text-4xl sm:text-5xl lg:text-7xl mt-1.5">
            Frontend Developer
          </h1>
          <h2 className="text text-4xl sm:text-5xl lg:text-7xl mt-1.5">
            I ship production-ready web apps with Next.js, Convex & Clerk
          </h2>
        </div>

        {/* Social links */}
        <div className="absolute max-sm:bottom-48 bottom-32 left-8 flex flex-col gap-3">
          {socialLinks.map(({ id, label, href, icon }) => {
            const Icon = iconMap[icon as keyof typeof iconMap];
            return (
              <a
                key={id}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:scale-105 transition-transform"
              >
                <Icon size={30} />
              </a>
            );
          })}
        </div>

        <div className="mx-auto w-full mt-16">
          <MarqueeScroll
            items={marqueeItems}
            speed={22}
            imageSize={28}
            iconClassName="flex items-center justify-center"
            textClassName="text-neutral-700 text-sm sm:text-base font-semibold"
          />
        </div>

        {/* Scroll down */}
        <div className="flex items-center gap-2 mb-5">
          <span className="animate-bounce">
            <RiArrowDownLine />
          </span>
          <span className="text-lg uppercase">Scroll down</span>
        </div>
      </div>
    </section>
  );
}
