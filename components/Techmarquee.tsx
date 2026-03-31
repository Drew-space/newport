// "use client";

// import Image from "next/image";

// const LOGOS = [
//   { name: "React", src: "/icons/react.svg" },
//   { name: "Next.js", src: "/icons/Next.svg" },
//   { name: "Clerk", src: "/icons/clerk.svg" },
//   { name: "Convex", src: "/icons/Convex.png" },
//   { name: "HTML", src: "/icons/html5.png" },
//   { name: "CSS", src: "/icons/css3.svg" },
//   { name: "JavaScript", src: "/icons/javascript.svg" },
//   { name: "shadcn/ui", src: "/icons/shadcn.svg" },
//   { name: "Tailwind", src: "/icons/tailwindcss.svg" },
// ];

// export default function TechMarquee() {
//   const items = [...LOGOS, ...LOGOS];

//   return (
//     <section className="relative w-full overflow-hidden py-12">
//       {/* fog left */}
//       <div
//         className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
//         style={{
//           background: "linear-gradient(to right, #f5f5f4, transparent)",
//         }}
//       />
//       {/* fog right */}
//       <div
//         className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
//         style={{ background: "linear-gradient(to left, #f5f5f4, transparent)" }}
//       />

//       <div className="flex">
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "3rem",
//             animation: "marquee-left 25s linear infinite",
//             willChange: "transform",
//           }}
//         >
//           {items.map((logo, i) => (
//             <div key={i} className="flex items-center gap-2.5 shrink-0">
//               <div className="w-8 h-8 relative opacity-60 hover:opacity-100 transition-opacity">
//                 <Image
//                   src={logo.src}
//                   alt={logo.name}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <span className="text-base font-semibold text-neutral-400 hover:text-neutral-700 transition-colors whitespace-nowrap">
//                 {logo.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

const LOGOS = [
  { name: "React", src: "/icons/react.svg" },
  { name: "Next.js", src: "/icons/Next.svg" },
  { name: "Clerk", src: "/icons/clerk.svg" },
  { name: "Convex", src: "/icons/Convex.png" },
  { name: "HTML", src: "/icons/html5.png" },
  { name: "CSS", src: "/icons/css3.svg" },
  { name: "JavaScript", src: "/icons/javascript.svg" },
  { name: "shadcn/ui", src: "/icons/shadcn.png" },
  { name: "Tailwind", src: "/icons/tailwindcss.svg" },
];

export default function TechMarquee() {
  const items = [...LOGOS, ...LOGOS]; // duplicate for seamless loop

  return (
    <section className="relative w-full overflow-hidden py-12 tranparent  ">
      {/* fog left */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
        // style={{
        //   background: "linear-gradient(to right, #f5f5f4, transparent)",
        // }}
      />
      {/* fog right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
        style={{ background: "linear-gradient(to left, #f5f5f4, transparent)" }}
      />

      <div className="overflow-hidden">
        <div
          className="flex gap-12 animate-marquee"
          style={{ willChange: "transform" }}
        >
          {items.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 shrink-0  hover:opacity-100 transition-opacity"
            >
              <div className="w-10 h-10 relative">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-base font-semibold text-neutral-600 hover:text-neutral-900 whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
