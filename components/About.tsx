// "use client";
// import { aboutStatusItems } from "@/data/data";
// import Button from "./Button";
// import { gsap, useGSAP, SplitText } from "@/lib/gsap-util";
// import { useRef } from "react";

// export default function About() {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const wrapperRef = useRef<HTMLDivElement | null>(null);

//   useGSAP(
//     () => {
//       const textSplit = SplitText.create(".text", {
//         type: "words, lines",
//         linesClass: "text-line",
//       });

//       const textSplitT1 = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".about-wrapper",
//           start: "top 50%",
//         },
//       });

//       textSplitT1.from(textSplit.words, {
//         yPercent: 100,

//         duration: 1,
//         stagger: 0.02,
//         ease: "power2.inOut",
//       });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: wrapperRef.current,
//           start: "top center",
//           end: "bottom center",
//           scrub: 1,
//         },
//       });

//       tl.to(wrapperRef.current, {
//         maxWidth: "100%",
//         duration: 1,
//         ease: "power3.out",
//       });
//     },
//     {
//       scope: containerRef,
//     },
//   );
//   return (
//     <section
//       id="about"
//       ref={containerRef}
//       className="bg-black min-h-svh pt-14 "
//     >
//       <div className="text-center space-y-5 sm:space-y-7">
//         {/* wrapper */}
//         <div
//           ref={wrapperRef}
//           className=" about-wrapper bg-stone-100 mx-auto max-w-[90%] px-8  space-y-5 py-20 h-dvh rounded-t-md sm:max-w-[70%] "
//         >
//           <h2 className=" text  text-4xl sm:text-5xl lg:text-7xl">About me </h2>
//           <p className=" text text-lg lg:text-xl max-w-3xl mx-auto">
//             I’m Drew, a Frontend Developer building modern, fast, and
//             interactive web applications where design meets code.
//           </p>
//           <p className="text max-w-3xl mx-auto">
//             I specialize in React, Next.js, Clerk authentication, and Convex,
//             creating products that are not only functional but also clean,
//             intuitive, and enjoyable to use. Every line of code I write is
//             focused on solving real problems while delivering smooth and
//             engaging user experiences.
//           </p>

//           {/* btn */}
//           <Button label="View Projects" />

//           {/* status*/}
//           <div className="grid gap-4 sm:grid-cols-2 mt-10 max-w-4xl mx-auto">
//             {aboutStatusItems.map((item) => (
//               <div className="border border-stone-300 p-4" key={item.id}>
//                 <span className=" text text-xl sm:text-2xl md:text-3xl font-bebasNeue">
//                   {item.value}
//                 </span>
//                 <p className=" text text-stone-600">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { aboutStatusItems } from "@/data/data";
import Button from "./Button";
import { gsap, useGSAP, SplitText } from "@/lib/gsap-util";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const textSplit = SplitText.create(".text", {
        type: "words, lines",
        linesClass: "text-line",
      });

      const textSplitT1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-wrapper",
          start: "top 50%",
        },
      });

      textSplitT1.from(textSplit.words, {
        yPercent: 100,
        duration: 1,
        stagger: 0.02,
        ease: "power2.inOut",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.to(wrapperRef.current, {
        maxWidth: "100%",
        duration: 1,
        ease: "power3.out",
      });
    },
    {
      scope: containerRef,
    },
  );

  return (
    <section id="about" ref={containerRef} className="bg-black min-h-svh pt-14">
      <div className="text-center space-y-5 sm:space-y-7">
        {/* wrapper */}
        <div
          ref={wrapperRef}
          className="about-wrapper bg-stone-100 mx-auto max-w-[90%] px-8 space-y-5 py-20 h-dvh rounded-t-md sm:max-w-[70%]"
        >
          <h2 className="text text-4xl sm:text-5xl lg:text-7xl">About me</h2>
          <p className="text text-lg lg:text-xl max-w-3xl mx-auto">
            I&apos;m Drew — a self-taught frontend developer building real
            products that solve real problems.
          </p>
          <p className="text max-w-3xl mx-auto">
            I specialize in Next.js, Convex, and Clerk — shipping full-stack
            applications with authentication, real-time databases, and
            production-grade architecture. From KYC verification systems to live
            video matching platforms, I focus on building things that actually
            work at scale, not just demos.
          </p>

          {/* btn */}
          <Button label="View Projects" />

          {/* status */}
          <div className="grid gap-4 sm:grid-cols-2 mt-10 max-w-4xl mx-auto">
            {aboutStatusItems.map((item) => (
              <div className="border border-stone-300 p-4" key={item.id}>
                <span className="text text-xl sm:text-2xl md:text-3xl font-bebasNeue">
                  {item.value}
                </span>
                <p className="text text-stone-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
