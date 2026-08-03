"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
    >
      <div className="max-w-6xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between">
        <a 
          href="#top" 
          className="font-bold text-xl tracking-tight cursor-pointer"
        >
          Zen<span className="text-primary">ith</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#projects" className="hover:text-slate-500 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-slate-500 transition-colors">Skills</a>
          <a href="#why-vibe-coder" className="hover:text-slate-500 transition-colors">Why Me?</a>
          <a href="#contact" className="hover:text-slate-500 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link 
            href="https://www.upwork.com/freelancers/~01fd91fcab241c8443" 
            target="_blank" 
            rel="noopener noreferrer"
            id="navbar-hire-btn"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
