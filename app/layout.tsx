import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";

export const bebasNeue = localFont({
  src: [
    {
      path: "./fonts/BebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-bebasNeue",
});
export const pally = localFont({
  src: [
    {
      path: "./fonts/Pally-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modern portfolio website",
  description: "A modern portfolio website built with Next.js and GSAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${pally.className} antialiased`}>
        <CustomCursor />
        <Header />
        <main className="min-h-svh">{children}</main>
      </body>
    </html>
  );
}
