"use client";

import { navItems } from "@/data/data";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "./Button";
import { useState, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-util";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const MenuRef = useRef<HTMLUListElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // useGSAP(() => {
  //   if (!MenuRef.current) return;

  //   tlRef.current = gsap.timeline({ paused: true });
  //   tlRef.current
  //     .fromTo(
  //       MenuRef.current,
  //       {
  //         y: -20,
  //         autoAlpha: 0,
  //       },
  //       {
  //         y: 30,
  //         opacity: 0,
  //         duration: 0.5,
  //         stagger: 0.1,
  //         ease: "power3.out",
  //       },
  //     )
  //     .from(".link", { y: 20, duration: 0, stagger: 0.08 }, "-=0.2");
  // }, []);

  useGSAP(() => {
    if (!MenuRef.current) return;

    const links = MenuRef.current.querySelectorAll(".link");

    tlRef.current = gsap.timeline({ paused: true });

    tlRef.current
      // enable clicks when opening
      .set(MenuRef.current, { pointerEvents: "auto" })

      // menu fades/slides in
      .fromTo(
        MenuRef.current,
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out" },
      )

      // links stagger in
      .from(
        links,
        {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.2",
      )

      // disable clicks when closed (runs on reverse)
      .set(MenuRef.current, { pointerEvents: "none" });
  }, []);
  const handleClick = () => {
    setIsOpen((prev) => {
      const next = !prev;

      if (next) {
        tlRef.current?.play();
      } else {
        tlRef.current?.reverse();
      }

      return next;
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-stone-100/20 backdrop-blur-sm z-50">
      <div className="container flex items-center justify-between py-4">
        {/* logo */}
        <Link href="/" className="font-bebasNeue text-[32px]">
          DREW
        </Link>
        {/* mobile menu */}
        <nav className="hg:hidden">
          {/* menu button */}
          <button
            onClick={handleClick}
            className="bg-black size-10 text-white flex justify-center items-center rounded-xl hover:bg-black/80 transition"
          >
            {isOpen ? <X /> : <Menu />}

            {/*   <X/>*/}
          </button>
          {/* list */}
          <ul
            ref={MenuRef}
            className="fixed top-full w-full bg-black left-0 text-stone-50  flex h-62.5 items-center justify-center flex-col opacity-0 pointer-events-none"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  className="font-bebasNeue block link text-4xl"
                  href={item.href || "#"}
                  onClick={handleClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* desktop menu */}
        <nav className="hidden lg:flex items-center gap-5">
          <ul className="flex items-center gap-11">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href || "#"}
                  className="uppercase hover:text-black/70 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button label={"Contact"} />
        </nav>
      </div>
    </header>
  );
}
