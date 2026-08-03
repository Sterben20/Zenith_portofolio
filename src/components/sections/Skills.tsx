"use client";

import { motion } from "framer-motion";
import { Zap, Code2, Palette, Plug } from "lucide-react";

const skills = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "3× Faster Delivery",
    description:
      "AI-augmented development lets me take a project from brief to deployed in days. Less back-and-forth, more shipped product.",
    highlight: true,
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Next.js App Router Stack",
    description:
      "Next.js 15, React 19, TypeScript, Tailwind CSS. Type-safe, scalable, and easy for any future engineer to pick up.",
    highlight: false,
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI That Converts",
    description:
      "Interfaces designed to look sharp and feel intuitive across every device. Motion design and layouts that guide the user.",
    highlight: false,
  },
  {
    icon: <Plug className="w-6 h-6" />,
    title: "API & Integration",
    description:
      "REST APIs, third-party services, and external data sources wired in cleanly. If there is an endpoint, I can connect it.",
    highlight: false,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Focused on outcomes, not just output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`glass p-6 rounded-3xl relative overflow-hidden transition-all hover:-translate-y-1 ${
                skill.highlight
                  ? "border border-primary/25 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/10"
                  : "hover:shadow-md hover:shadow-foreground/5"
              }`}
            >
              {skill.highlight && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                    Key Advantage
                  </span>
                </div>
              )}
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl mb-6 bg-primary/10 text-primary">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold mb-2.5">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
