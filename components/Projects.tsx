"use client";

import { projectItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap-util";
import { useRef } from "react";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLDivElement>(".project-panel");
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section id="projects" ref={containerRef} className="mb-[100vh]">
      {/* ── Intro screen ── */}
      <div className="min-h-svh flex flex-col items-center justify-center gap-2 px-6 container">
        <span className="text-[11px] uppercase tracking-[.14em] text-white/30">
          Selected work
        </span>
        <h2 className="text-5xl md:text-7xl text-center leading-none tracking-tight">
          Recent
          <br className="sm:hidden" /> projects
        </h2>
        <p className="text-sm text-white/40 mt-1">scroll to explore</p>
      </div>

      {/* ── Panels (desktop pinned scroll) ── */}
      <div>
        {projectItems.map((item) => (
          <div
            key={item.id}
            className="project-panel w-full text-white"
            style={{ background: item.backgroundClr }}
          >
            {/* ── DESKTOP layout (unchanged pinned behaviour) ── */}
            <div className="hidden lg:grid h-screen lg:grid-cols-2 lg:items-center lg:gap-12 px-24">
              {/* left: text */}
              <div className="space-y-4">
                <span className="size-10 border rounded-full inline-flex items-center justify-center text-lg">
                  {item.id}
                </span>
                <p>{item.text}</p>
                <h3 className="text-6xl">{item.title}</h3>
                <Link
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 border border-white/25 rounded-full px-5 py-2.5 bg-white/5 hover:bg-white/15 hover:text-white hover:border-white/50 transition-all duration-200"
                >
                  View project
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M1 9L9 1M9 1H3M9 1v6" />
                  </svg>
                </Link>
              </div>

              {/* right: glass card */}
              <div className="flex items-center justify-center">
                <GlassCard item={item} />
              </div>
            </div>

            {/* ── MOBILE layout (new stacked card design) ── */}
            <div className="lg:hidden py-6 px-4">
              <MobileCard item={item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Desktop glass card (right column)
───────────────────────────────────────── */
function GlassCard({ item }: { item: (typeof projectItems)[number] }) {
  return (
    <div className="group relative w-full max-w-[420px] rounded-2xl overflow-hidden">
      <div className="overflow-hidden h-[240px]">
        <Image
          src={item.img}
          alt={item.title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="relative px-5 pt-4 pb-5 bg-white/10 backdrop-blur-md border-t border-white/20">
        <h4 className="text-lg font-semibold text-white leading-tight mb-1">
          {item.title}
        </h4>
        <p className="text-sm text-white mb-4 leading-relaxed line-clamp-2">
          {item.text}
        </p>
        <Link
          href={item.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 border border-white/25 rounded-full px-4 py-2 bg-white/5 hover:bg-white/15 hover:text-white transition-all duration-200"
        >
          Visit site
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M1 9L9 1M9 1H3M9 1v6" />
          </svg>
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
    </div>
  );
}

/* ─────────────────────────────────────────
   Mobile stacked card
───────────────────────────────────────── */
function MobileCard({ item }: { item: (typeof projectItems)[number] }) {
  return (
    <div className="relative rounded-[18px] overflow-hidden bg-[#111]">
      {/* index badge */}
      <span className="absolute top-3 left-3 z-10 text-[10px] font-black tracking-widest text-white/50 bg-black/40 backdrop-blur border border-white/10 rounded-full px-2.5 py-1">
        {String(item.id).padStart(2, "0")}
      </span>

      {/* stack badge (tech) */}
      {item.tech && (
        <span className="absolute top-3 right-3 z-10 text-[10px] tracking-wide text-white/50 bg-black/40 backdrop-blur border border-white/10 rounded-full px-2.5 py-1">
          {item.tech}
        </span>
      )}

      {/* image */}
      <div className="h-[200px] overflow-hidden">
        <Image
          src={item.img}
          alt={item.title}
          width={500}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* glass info */}
      <div className="px-[18px] pt-4 pb-5 bg-white/[0.07] backdrop-blur-[16px] border-t border-white/[0.13]">
        <h3 className="text-xl font-bold text-white leading-tight tracking-tight mb-1.5">
          {item.title}
        </h3>
        <p className="text-[0.8rem] font-light text-white leading-relaxed mb-4">
          {item.text}
        </p>
        <div className="flex items-center justify-between">
          <Link
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.75rem] uppercase tracking-widest text-white/65 border border-white/20 rounded-full px-3.5 py-1.5 bg-white/[0.06] hover:bg-white/[0.14] hover:text-white transition-all duration-200"
          >
            Visit site
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1 9L9 1M9 1H3M9 1v6" />
            </svg>
          </Link>
          <span className="text-[11px] italic text-white/25">2025</span>
        </div>
      </div>

      {/* edge glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-white/[0.09]" />
    </div>
  );
}
