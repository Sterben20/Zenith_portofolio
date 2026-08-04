"use client";

import { useRef, useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, Bot } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/social-icons";

const projects = [
  {
    title: "WibuStream",
    description:
      "A fast, responsive anime streaming web app with video playback and a clean UI. Built from scratch with Next.js, optimized for high performance.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    link: "https://wibustream-ku.vercel.app",
    github: "https://github.com/Sterben20/wibustream",
    color: "from-blue-500/20 to-purple-500/20",
    image: "/images/wibustream-final.png",
    aiLabel: "AI-Assisted Build",
    highlight: "Fast streaming · Mobile-first",
  },
  {
    title: "ManggaWeb",
    description:
      "An ultra-fast, distraction-free manga reading web app optimized for a smooth reading experience. Uses TanStack Query for efficient data fetching.",
    tags: ["Next.js", "React", "TypeScript", "TanStack Query", "REST API"],
    link: "https://manggaweb.vercel.app",
    github: "https://github.com/Sterben20/mangaweb",
    color: "from-orange-500/20 to-red-500/20",
    image: "/images/manggaweb-final.png",
    aiLabel: "Vibe Coded",
    highlight: "Distraction-free · Ultra fast",
  },
  {
    title: "Smart Waste Classifier",
    description:
      "Automatically identifies organic and inorganic waste from a photo. My first ML project, with the model trained from scratch and deployed live on HuggingFace.",
    tags: ["Machine Learning", "Python", "Gradio", "HuggingFace", "AI"],
    link: "https://zenithqq-klasifikasi-sampah-aghil.hf.space/",
    github: "https://zenithqq-klasifikasi-sampah-aghil.hf.space/",
    color: "from-sky-500/20 to-blue-500/20",
    image: "/images/klasifikasi-sampah-final.png",
    aiLabel: "ML Project",
    highlight: "Custom model · Live on HuggingFace",
  },
];

export function FeaturedProjects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const current = scrollContainerRef.current;

    const card = current.firstElementChild as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 48 : current.clientWidth;

    const from = current.scrollLeft;
    const to = from + (direction === "left" ? -cardWidth : cardWidth);

    animate(from, to, {
      type: "spring",
      stiffness: 120,
      damping: 22,
      mass: 0.6,
      onUpdate: (v) => {
        current.scrollLeft = v;
      },
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const card = container.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 48 : container.clientWidth;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, projects.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="w-full bg-background py-24 md:py-32">
      <div className="flex flex-col items-center w-full">
        <div className="text-center mb-10 md:mb-16 px-4 w-full">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Real projects you can open right now. Not mockups, not staged demos.
          </p>
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto group">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg hover:bg-secondary transition-all opacity-0 group-hover:opacity-100 text-foreground"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg hover:bg-secondary transition-all opacity-0 group-hover:opacity-100 text-foreground"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-12 px-6 md:px-24 w-full overflow-x-auto pb-4 pt-4 no-scrollbar"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[85vw] md:w-[800px] lg:w-[950px] flex-shrink-0 glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row h-auto shadow-lg transition-shadow hover:shadow-primary/20 group/card"
              >
                <div className="relative h-[250px] md:h-[400px] w-full md:w-[45%] border-b md:border-b-0 md:border-r border-border/50 shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 360px, 427px"
                    className="object-contain object-center transition-transform duration-700 group-hover/card:scale-105 p-2"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
                  {/* AI Badge on image */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/60 text-xs font-semibold text-primary">
                      <Bot className="w-3 h-3" />
                      {project.aiLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-grow bg-background/50 backdrop-blur-sm md:w-[55%] justify-between">
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                      {project.highlight}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 md:mb-4 shrink-0">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 shrink-0">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-secondary text-secondary-foreground text-[10px] md:text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 pt-4 md:pt-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-4 md:mb-6" />
                    <div className="flex items-center gap-4 md:gap-6">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs md:text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1 md:mr-2" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs md:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 mr-1 md:mr-2" />
                      Source Code
                    </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-3 mt-8 mb-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const container = scrollContainerRef.current;
                if (!container) return;
                const card = container.firstElementChild as HTMLElement;
                const cardWidth = card ? card.offsetWidth + 48 : container.clientWidth;
                const from = container.scrollLeft;
                const to = i * cardWidth;
                animate(from, to, {
                  type: "spring",
                  stiffness: 120,
                  damping: 22,
                  mass: 0.6,
                  onUpdate: (v) => { container.scrollLeft = v; },
                });
              }}
              aria-label={`Go to project ${i + 1}`}
              className={`block h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                activeIndex === i
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
