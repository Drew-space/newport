"use client";

import {
  RiGithubFill,
  RiLinkedinBoxLine,
  RiMailLine,
  RiTwitterXLine,
} from "@remixicon/react";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const email = "chukwukaenudeme@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className="pt-40 sm:pt-52 lg:pt-64 pb-20 sm:pb-24 lg:pb-32 border-stone-300">
      <div className="container flex flex-col items-center justify-between ">
        <h2 className="text-4xl lg:text-8xl"> Get in touch</h2>
        {/* wrapper */}
        <div className="flex flex-col items-center gap-3 ">
          {/* copy mail */}
          <button
            onClick={handleCopyEmail}
            className="border max-w-max flex items-center px-4 py-2 gap-1.5 bg-white"
          >
            <span>
              <Copy />
            </span>
            <h3 className="text-2xl md:text-4xl">
              {" "}
              {isCopied ? "Email Copied!" : "Copy Email"}{" "}
            </h3>
          </button>

          {/* social links */}
          <div className="flex items-center gap-2">
            {[RiLinkedinBoxLine, RiGithubFill, RiMailLine, RiTwitterXLine].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  className="hover:scale-105 transition-transform "
                >
                  <Icon size={30} className="" />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
