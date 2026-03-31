"use client";

import {
  RiLinkedinBoxLine,
  RiWhatsappFill,
  RiGithubFill,
  RiArrowDownLine,
} from "@remixicon/react";
import { gsap, useGSAP, SplitText } from "@/lib/gsap-util";
import { useRef } from "react";

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
    {
      scope: containerRef,
    },
  );
  return (
    <section ref={containerRef} className="relative ">
      <div className="container flex items-center justify-center flex-col min-h-screen ">
        {/* wrapper */}
        <div className=" hero-wrapper text-center my-auto">
          <p className=" text  uppercase">hi, I&lsquo;m Drew</p>
          <h1 className=" text  text-4xl sm:text-5xl lg:text-9xl mt-1.5">
            Frontend Developer
          </h1>
          <h2 className=" text  text-4xl sm:text-5xl lg:text-9xl mt-1.5">
            I build modern web apps with React, Next.js, Clerk & Convex
          </h2>
        </div>
        {/* social links */}
        <div className="absolute bottom-32 left-8 gap-2 grid-2">
          {[RiLinkedinBoxLine, RiWhatsappFill, RiGithubFill].map((Icon, i) => (
            <a
              key={i}
              href="#"
              target="_blank"
              className="hover:scale-105 transition-transform"
            >
              <Icon size={30} />
            </a>
          ))}
        </div>
        {/* scroll down  */}
        <div className="flex items-center gap-2 mb-5 ">
          <span className=" animate-bounce">
            {" "}
            <RiArrowDownLine />{" "}
          </span>
          <span className="text-lg uppercase"> Scroll down</span>
        </div>
      </div>
    </section>
  );
}
