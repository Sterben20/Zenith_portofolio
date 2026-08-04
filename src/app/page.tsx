import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

const About = dynamic(() => import("@/components/sections/About").then(mod => mod.About));
const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects").then(mod => mod.FeaturedProjects));
const Skills = dynamic(() => import("@/components/sections/Skills").then(mod => mod.Skills));
const TrustSection = dynamic(() => import("@/components/sections/TrustSection").then(mod => mod.TrustSection));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));

export default function Home() {
  return (
    <main className="pb-16">
      <Hero />
        <About />
        <FeaturedProjects />
        <Skills />
        <TrustSection />
      <Contact />
    </main>
  );
}
