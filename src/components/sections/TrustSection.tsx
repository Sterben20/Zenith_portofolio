"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Eye, MessageCircle } from "lucide-react";
import Link from "next/link";

const trustPoints = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Full Transparency",
    description:
      "I am upfront about how I work. You know exactly what tools are in the pipeline and what you are getting. No surprises at handoff.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Live Projects, Not Mockups",
    description:
      "Every project in this portfolio is deployed and accessible right now. Open them, test them, break them. They are real.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Code You Can Build On",
    description:
      "AI accelerates the work. I own the architecture. Every codebase I deliver is clean, documented, and ready for your next engineer to pick up.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Reliable Communication",
    description:
      "Consistent updates, fast response times, and a bias toward over-communicating. I treat every project like it is my own product.",
  },
];

export function TrustSection() {
  return (
    <section id="why-vibe-coder" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Why Work With Me
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Speed Without Compromise
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Faster delivery does not mean lower quality. Here is how I back
            that up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card p-7 rounded-3xl flex gap-5 hover:border-primary/30 transition-all hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {point.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1.5">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
