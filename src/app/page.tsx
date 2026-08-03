import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/ui/TechMarquee";

const About = dynamic(() => import("@/components/sections/About").then(mod => mod.About));
const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects").then(mod => mod.FeaturedProjects));
const Skills = dynamic(() => import("@/components/sections/Skills").then(mod => mod.Skills));
const TrustSection = dynamic(() => import("@/components/sections/TrustSection").then(mod => mod.TrustSection));
const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pb-16">
        <Hero />
        <About />
        <FeaturedProjects />
        <Skills />
        <TrustSection />
      </main>

      <Footer />

      {/* Fixed bottom tech marquee — always visible */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <TechMarquee />
      </div>
    </div>
  );
}
