"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/social-icons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/Sterben20",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/aghil-jayadi-2b3537172/",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
  {
    href: "https://wa.me/6285255409964",
    label: "WhatsApp",
    Icon: WhatsAppIcon,
  },
];

export function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center px-4 overflow-x-hidden"
      style={{ height: "calc(100vh - 52px)", paddingTop: "64px" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full bg-primary/6 blur-3xl" />
      </div>

      <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto relative z-10">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-7 border border-border/40"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          Available for new projects
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 text-balance leading-[1.06]"
        >
          I Build Web Apps{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/55">
            3× Faster
          </span>{" "}
          with AI
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-base md:text-lg text-muted-foreground mb-2 max-w-xl mx-auto leading-relaxed"
        >
          I&apos;m{" "}
          <span className="text-foreground font-semibold">Zenith</span>,
          a full-stack developer building web apps with Next.js, React, and
          TypeScript. I leverage AI tools to ship production-ready apps faster
          without cutting scope or quality.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7"
        >
          <MagneticButton>
            <Link
              href="https://www.upwork.com/freelancers/~01fd91fcab241c8443"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-hire-upwork"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:scale-[1.03] active:scale-[0.98]"
            >
              Hire Me on Upwork
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </MagneticButton>
          <a
            href="#projects"
            id="hero-view-work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-border/50 bg-background/40 backdrop-blur-md text-foreground font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:bg-background/60 hover:border-primary/50 hover:text-primary shadow-sm hover:shadow-md dark:hover:shadow-[0_0_25px_var(--primary)]"
          >
            View My Work
          </a>
        </motion.div>

        {/* Social links with tooltips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          {socialLinks.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />

              {/* Tooltip */}
              <span className="
                absolute -top-9 left-1/2 -translate-x-1/2
                px-2.5 py-1 rounded-md
                bg-foreground text-background
                text-[11px] font-semibold whitespace-nowrap
                opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
                transition-all duration-150 ease-out
                pointer-events-none shadow-md
              ">
                {label}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-[3px] w-1.5 h-1.5 bg-foreground rotate-45 rounded-[1px]" />
              </span>
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
