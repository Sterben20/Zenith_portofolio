"use client";

import { motion } from "framer-motion";
import {
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeJsIcon,
  PrismaIcon,
  VercelIcon,
} from "@/components/ui/tech-icons";

const stack = [
  { Icon: NextJsIcon,    label: "Next.js" },
  { Icon: ReactIcon,     label: "React" },
  { Icon: TypeScriptIcon,label: "TypeScript" },
  { Icon: TailwindIcon,  label: "Tailwind CSS" },
  { Icon: NodeJsIcon,    label: "Node.js" },
  { Icon: PrismaIcon,    label: "Prisma" },
  { Icon: VercelIcon,    label: "Vercel" },
];

export function TechStrip() {
  return (
    <section className="w-full py-10 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8"
        >
          Stack I ship with
        </motion.p>

        {/* Icons row */}
        <div className="relative">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-background to-transparent" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center flex-wrap gap-x-10 gap-y-6"
          >
            {stack.map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group relative flex flex-col items-center gap-2"
              >
                <Icon className="w-7 h-7 text-muted-foreground/50 group-hover:text-foreground transition-colors duration-300" />

                {/* Tooltip */}
                <span className="
                  absolute -top-9 left-1/2 -translate-x-1/2
                  px-2 py-1 rounded-md
                  bg-foreground text-background
                  text-[11px] font-medium whitespace-nowrap
                  opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-200 pointer-events-none
                  shadow-sm
                ">
                  {label}
                  {/* Arrow */}
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-foreground rotate-45" />
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
