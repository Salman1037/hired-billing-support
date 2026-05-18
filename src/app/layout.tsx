import type { Metadata } from "next";
import { Inter_Tight, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fraunces",
  style: ["italic", "normal"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Hired Billing Support — Operational Infrastructure for Modern Healthcare",
  description:
    "Hired Billing Support is the operational team behind growing practices. Remote healthcare staffing, RCM, AR recovery, and AI-assisted workflows that let providers reclaim time and scale without overhead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${fraunces.variable} ${jetBrainsMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}