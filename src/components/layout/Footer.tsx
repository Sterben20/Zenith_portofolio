import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/social-icons";

const socials = [
  { href: "https://github.com/Sterben20",                         label: "GitHub",    Icon: GithubIcon    },
  { href: "https://www.linkedin.com/in/aghil-jayadi-2b3537172/", label: "LinkedIn",  Icon: LinkedinIcon  },
  { href: "https://wa.me/6285255409964",                          label: "WhatsApp",  Icon: WhatsAppIcon  },
];

export function Footer() {
  return (
    <footer id="contact" className="mt-20 py-12 px-4 md:px-8 relative">
      {/* Gradient divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold tracking-tight mb-1.5">
            Got a project? Let&apos;s talk.
          </h3>
          <p className="text-muted-foreground text-sm">
            I respond fast and can typically start within the week.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jayadiaghil@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-email"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all font-medium hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </a>
          <Link
            href="https://www.upwork.com/freelancers/~01fd91fcab241c8443"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-hire-upwork"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Upwork Profile
          </Link>
        </div>
      </div>

      {/* Gradient divider middle */}
      <div className="max-w-6xl mx-auto mt-10 mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Social icons with tooltips */}
        <div className="flex items-center gap-5">
          {socials.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />

              {/* Tooltip — appears above */}
              <span className="
                absolute -top-9 left-1/2 -translate-x-1/2
                px-2.5 py-1 rounded-md
                bg-foreground text-background
                text-[11px] font-semibold whitespace-nowrap
                opacity-0 scale-90
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-150 ease-out
                pointer-events-none shadow-md z-10
              ">
                {label}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-[3px] w-1.5 h-1.5 bg-foreground rotate-45 rounded-[1px]" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center md:text-right text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Zenith | M. Aghil Jayadi</p>
          <p className="mt-0.5 text-xs opacity-60">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
