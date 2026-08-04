"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#why-vibe-coder", label: "Why Me?" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
    >
      {/* Main bar */}
      <div className="max-w-6xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between">
        <a
          href="#top"
          className="font-bold text-xl tracking-tight cursor-pointer"
          onClick={closeMenu}
        >
          Zen<span className="text-primary">ith</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-slate-500 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Desktop hire btn */}
          <Link
            href="https://www.upwork.com/freelancers/~01fd91fcab241c8443"
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-hire-btn"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            Hire Me
          </Link>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-md"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mt-2 mx-auto max-w-6xl glass rounded-3xl px-6 py-5 flex flex-col gap-1"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="py-3 px-2 text-base font-medium rounded-xl hover:bg-secondary/60 transition-colors border-b border-border/30 last:border-0"
              >
                {link.label}
              </motion.a>
            ))}
            <Link
              href="https://www.upwork.com/freelancers/~01fd91fcab241c8443"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center px-5 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
