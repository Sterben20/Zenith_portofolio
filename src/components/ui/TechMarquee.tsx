"use client";

import { ReactIcon, NextJsIcon, TailwindIcon, TypeScriptIcon, NodeJsIcon, PrismaIcon } from "@/components/ui/tech-icons";

const icons = [ReactIcon, NextJsIcon, TypeScriptIcon, TailwindIcon, NodeJsIcon, PrismaIcon];

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden relative bg-white/50 dark:bg-black/50 backdrop-blur-lg">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white/60 to-transparent dark:from-black/60" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white/60 to-transparent dark:from-black/60" />

      {/* Track */}
      <div className="flex py-3" style={{ animation: "marquee-scroll 30s linear infinite" }}>
        {/* Set A */}
        {icons.map((Icon, i) => (
          <div key={`a-${i}`} className="flex-shrink-0 px-10">
            <Icon className="w-7 h-7 text-muted-foreground/60 hover:text-foreground transition-colors duration-300" />
          </div>
        ))}
        {/* Set B — identical copy for seamless loop */}
        {icons.map((Icon, i) => (
          <div key={`b-${i}`} className="flex-shrink-0 px-10">
            <Icon className="w-7 h-7 text-muted-foreground/60 hover:text-foreground transition-colors duration-300" />
          </div>
        ))}
        {/* Set C — extra buffer to prevent flash during loop */}
        {icons.map((Icon, i) => (
          <div key={`c-${i}`} className="flex-shrink-0 px-10">
            <Icon className="w-7 h-7 text-muted-foreground/60 hover:text-foreground transition-colors duration-300" />
          </div>
        ))}
        {icons.map((Icon, i) => (
          <div key={`d-${i}`} className="flex-shrink-0 px-10">
            <Icon className="w-7 h-7 text-muted-foreground/60 hover:text-foreground transition-colors duration-300" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
