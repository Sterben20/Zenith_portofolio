"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/social-icons";
import { MagneticButton } from "@/components/ui/MagneticButton";

const socials = [
  { href: "https://www.linkedin.com/in/aghil-jayadi-2b3537172/", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://wa.me/6285255409964", label: "WhatsApp", Icon: WhatsAppIcon },
  { href: "https://github.com/Sterben20", label: "GitHub", Icon: GithubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-primary/5 clip-path-slant z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">amazing</span> together.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you have a specific project in mind or just want to explore possibilities, I&apos;m currently available for freelance opportunities and would love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton>
            <a
              href="mailto:jayadiaghil@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>
          
          <MagneticButton>
            <Link
              href="https://www.upwork.com/freelancers/~01fd91fcab241c8443"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 rounded-2xl border border-border/50 bg-background/40 backdrop-blur-md text-foreground font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:bg-background/60 hover:border-primary/50 hover:text-primary shadow-sm hover:shadow-md dark:hover:shadow-[0_0_25px_var(--primary)] w-full sm:w-auto"
            >
              Hire Me on Upwork
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center"
        >
          <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-widest">
            Or connect with me on
          </p>
          <div className="flex items-center gap-6">
            {socials.map(({ href, label, Icon }, i) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-background/40 backdrop-blur-md border border-border/50 text-muted-foreground hover:text-primary hover:bg-background/60 hover:border-primary/40 transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgb(0,0,0,0.1)] dark:hover:shadow-[0_8px_25px_rgb(0,0,0,0.3)]"
              >
                <Icon className="w-6 h-6" />
                
                {/* Tooltip */}
                <span className="
                  absolute -top-10 left-1/2 -translate-x-1/2
                  px-3 py-1.5 rounded-lg
                  bg-foreground text-background
                  text-xs font-semibold whitespace-nowrap
                  opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200 ease-out
                  pointer-events-none shadow-xl
                ">
                  {label}
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-[4px] w-2 h-2 bg-foreground rotate-45 rounded-[1px]" />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
