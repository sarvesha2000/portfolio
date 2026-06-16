"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Projects",   href: "/projects" },
  { label: "Skills",     href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Blog",       href: "/blog" },
  { label: "Chat",       href: "/chat" },
  { label: "Recruiter",  href: "/recruiter" },
  { label: "Lab",        href: "/lab" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          SP<span className="text-purple-400">.</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm transition-colors",
                pathname === link.href
                  ? "text-white bg-white/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/recruiter"
          className="hidden md:block px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors"
        >
          Recruiter Mode
        </Link>
      </div>
    </nav>
  );
}