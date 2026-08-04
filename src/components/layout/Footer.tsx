import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/social-icons";

export function Footer() {
  return (
    <footer className="mt-0 pt-8 pb-[72px] px-4 md:px-8 relative border-t border-border/40">
      <div className="max-w-6xl mx-auto flex justify-center md:justify-end items-center gap-4">

        <div className="text-center md:text-right text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Zenith | M. Aghil Jayadi</p>
          <p className="mt-0.5 text-xs opacity-60">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
