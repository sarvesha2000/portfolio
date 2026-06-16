import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarvesha Pathak — AI Engineer & Full Stack Developer",
  description: "Interactive AI-powered portfolio built with Next.js, Three.js, FastAPI, and GenAI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-[#0A0A1A] text-white antialiased")}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}