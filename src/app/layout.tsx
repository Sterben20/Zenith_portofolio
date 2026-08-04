import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TechMarquee } from "@/components/ui/TechMarquee";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenith | AI-Powered Web Developer & Freelancer",
  description: "Zenith (M. Aghil Jayadi) builds production-ready web apps with Next.js, React, and TypeScript. Available for freelance on Upwork.",
  keywords: ["web developer", "freelancer", "Next.js", "React", "TypeScript", "AI development", "Upwork", "Indonesia", "Aghil Jayadi", "Zenith"],
  authors: [{ name: "M. Aghil Jayadi", url: "https://www.upwork.com/freelancers/~01fd91fcab241c8443" }],
  openGraph: {
    title: "Zenith | Full-Stack Web Developer",
    description: "Next.js, React, TypeScript. Ships fast. Available on Upwork.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith | Full-Stack Web Developer",
    description: "Next.js, React, TypeScript. Ships fast. Available on Upwork.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        id="top"
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <SmoothScroll>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-grow">
                {children}
              </div>
              <Footer />
              {/* Fixed bottom tech marquee — always visible */}
              <div className="fixed bottom-0 left-0 right-0 z-50">
                <TechMarquee />
              </div>
            </div>
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
