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

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="glass-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/20"
        >
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
              Let&apos;s build something
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">
              Have a project? I&apos;m ready.
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Drop me a message on Upwork or WhatsApp. I respond within hours
              and can usually start within the week.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="https://www.upwork.com/freelancers/~01fd91fcab241c8443"
              target="_blank"
              rel="noopener noreferrer"
              id="trust-hire-upwork"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
            >
              Hire on Upwork
            </Link>
            <Link
              href="https://wa.me/6285255409964?text=Hi%20Zenith%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              id="trust-chat-whatsapp"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
