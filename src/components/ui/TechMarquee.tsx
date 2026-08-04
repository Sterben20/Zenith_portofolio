"use client";

import { ReactIcon, NextJsIcon, TailwindIcon, TypeScriptIcon, NodeJsIcon, PrismaIcon } from "@/components/ui/tech-icons";

const techs = [
  { Icon: ReactIcon, name: "React" },
  { Icon: NextJsIcon, name: "Next.js" },
  { Icon: TypeScriptIcon, name: "TypeScript" },
  { Icon: TailwindIcon, name: "Tailwind CSS" },
  { Icon: NodeJsIcon, name: "Node.js" },
  { Icon: PrismaIcon, name: "Prisma" }
];

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden relative bg-white/50 dark:bg-black/50 backdrop-blur-lg">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

      {/* Track */}
      <div className="flex py-3.5" style={{ animation: "marquee-scroll 35s linear infinite" }}>
        {/* Render 4 sets to ensure seamless loop */}
        {[1, 2, 3, 4].map((set) => (
          <div key={set} className="flex flex-shrink-0">
            {techs.map(({ Icon, name }, i) => (
              <div key={`${set}-${i}`} className="flex items-center gap-2.5 px-8 group">
                <Icon className="w-6 h-6 text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                <span className="text-sm font-semibold text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
                  {name}
                </span>
              </div>
            ))}
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
