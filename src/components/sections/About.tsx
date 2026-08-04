"use client";

import { motion } from "framer-motion";
import { User, Bot, Code2 } from "lucide-react";

const aiTools = [
  { name: "Gemini", emoji: "✦" },
  { name: "Claude", emoji: "◆" },
  { name: "ChatGPT", emoji: "⬡" },
  { name: "Stitch", emoji: "◈" },
  { name: "Antigravity IDE", emoji: "⊕" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Engineering fast. Shipping real. Powered by AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">

          {/* Box 1: Identity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 glass-card p-8 md:p-10 rounded-3xl flex flex-col justify-center relative overflow-hidden group hover:border-primary/30 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-background/80 backdrop-blur border border-border/50 text-foreground rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <User className="w-7 h-7" />
              </div>
              <div className="mb-2 text-xs font-semibold text-primary uppercase tracking-widest">
                Full-Stack Developer · AI Integration
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                I&apos;m Zenith.
                <br />
                <span className="text-muted-foreground text-2xl md:text-3xl font-medium">
                  M. Aghil Jayadi
                </span>
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                I build production-ready web apps with Next.js, React, and
                TypeScript, using an AI-augmented workflow to cut delivery time
                without cutting scope. Every project in this portfolio is live
                and accessible right now.
              </p>
            </div>
          </motion.div>

          {/* Box 2: AI Toolkit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 glass-card p-8 rounded-3xl flex flex-col justify-between hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">AI Toolkit</h3>
                <p className="text-xs text-muted-foreground">Orchestrated, not just prompted</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {aiTools.map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border/50"
                >
                  <span className="text-primary text-xs">{tool.emoji}</span>
                  {tool.name}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-5 leading-relaxed">
              Each tool has a specific role in the pipeline: design, code
              generation, review, and deployment. The result is faster iteration
              with no drop in output quality.
            </p>
          </motion.div>

          {/* Box 3: Core Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-2xl flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Core Stack</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Next.js · React 19 · TypeScript · Tailwind CSS · Framer Motion · REST API
            </p>
          </motion.div>

          {/* Box 4: Availability */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1 glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden hover:border-emerald-500/30 transition-colors"
          >
            <div className="absolute top-5 right-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 mt-4">Open to Work</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Available on Upwork for new projects and long-term contracts.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
