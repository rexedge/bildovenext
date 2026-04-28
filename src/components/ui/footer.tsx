"use client";

import { COMPANY_PROFILE } from "@/utils/const";
import FormatAddress from "@/utils/format-address";
import Image from "next/image";
import Link from "next/link";
import {
     ArrowUpRight,
     Facebook,
     Instagram,
     Linkedin,
     Twitter,
     Mail,
     Phone,
     MapPin,
     CalendarCheck,
} from "lucide-react";
import { Button } from "./button";

const QUICK_LINKS = [
     { label: "Home", href: "/" },
     { label: "About Us", href: "/about" },
     { label: "Services", href: "/services" },
     { label: "Products", href: "/products" },
     { label: "Profile", href: "/profile" },
     { label: "Testimonials", href: "/testimonials" },
     { label: "Contact", href: "/contact" },
];

const RESOURCE_LINKS = [
     {
          label: "How to be debt free",
          href: "/event/how-to-be-debt-free",
          badge: "Event",
     },
     { label: "Privacy Policy", href: "/privacy" },
];

const SOCIALS = [
     { Icon: Facebook, href: "#", label: "Facebook" },
     { Icon: Twitter, href: "#", label: "Twitter" },
     { Icon: Instagram, href: "#", label: "Instagram" },
     { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => (
     <footer className="relative overflow-hidden border-t border-border/60 bg-foreground text-background">
          {/* Soft ambient orbs only — no grid */}
          <div className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-48 left-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[140px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="relative mx-auto max-w-[1400px] px-6 pb-10 pt-24 lg:px-10">
               {/* Manifesto / CTA */}
               <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                         <p className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-background/70">
                              <span className="relative flex h-1.5 w-1.5">
                                   <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
                                   <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
                              </span>
                              /Let&apos;s build it together
                         </p>
                         <h2 className="mt-6 text-balance font-display text-[12vw] leading-[0.95] tracking-tight text-background sm:text-7xl lg:text-[7rem]">
                              Your future,{" "}
                              <span className="italic text-primary">
                                   written today.
                              </span>
                         </h2>
                         <p className="mt-6 max-w-xl text-base leading-relaxed text-background/65">
                              Sit down with a licensed advisor — no cost, no
                              pressure. We&apos;ll map the moves that protect
                              today and compound tomorrow.
                         </p>
                    </div>

                    <Button
                         asChild
                         size="lg"
                         className="group shrink-0 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                    >
                         <Link
                              href={COMPANY_PROFILE.calendly}
                              target="_blank"
                              rel="noopener noreferrer"
                         >
                              <CalendarCheck className="mr-2 h-5 w-5" />
                              Book consultation
                              <ArrowUpRight className="ml-1.5 h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                         </Link>
                    </Button>
               </div>

               {/* Soft divider */}
               <div className="mt-16 h-px w-full bg-background/10" />

               {/* Content */}
               <div className="mt-14 grid gap-14 lg:grid-cols-12">
                    {/* Brand */}
                    <div className="space-y-3 lg:col-span-4">
                         <Link
                              href="/"
                              className="inline-flex items-center gap-3"
                         >
                              <Image
                                   height={56}
                                   width={140}
                                   alt={`${COMPANY_PROFILE.name} logo`}
                                   src={"/bildoveLogo1.png"}
                                   className="h-12 w-auto object-contain"
                              />
                         </Link>
                         <p className="max-w-md text-sm leading-relaxed text-background/65">
                              {COMPANY_PROFILE.tagline}. We help individuals and
                              families protect their income, grow wealth, and
                              build lasting legacies with personalized financial
                              guidance.
                         </p>

                         <ul className="space-y-3 text-sm">
                              <li className="flex items-start gap-3 text-background/75">
                                   <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/10 text-primary">
                                        <MapPin className="h-3.5 w-3.5" />
                                   </span>
                                   <FormatAddress
                                        address={COMPANY_PROFILE.address}
                                   />
                              </li>
                              <li className="flex items-center gap-3">
                                   <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/10 text-primary">
                                        <Phone className="h-3.5 w-3.5" />
                                   </span>
                                   <a
                                        href={`tel:${COMPANY_PROFILE.phone}`}
                                        className="text-background/75 transition-colors hover:text-primary"
                                   >
                                        {COMPANY_PROFILE.phone}
                                   </a>
                              </li>
                              <li className="flex items-center gap-3">
                                   <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/10 text-primary">
                                        <Mail className="h-3.5 w-3.5" />
                                   </span>
                                   <a
                                        href={`mailto:${COMPANY_PROFILE.email}`}
                                        className="text-background/75 transition-colors hover:text-primary"
                                   >
                                        {COMPANY_PROFILE.email}
                                   </a>
                              </li>
                         </ul>
                    </div>

                    {/* Sitemap */}
                    <div className="lg:col-span-2">
                         <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/50">
                              /Sitemap
                         </p>
                         <ul className="mt-5 space-y-2.5">
                              {QUICK_LINKS.map((l) => (
                                   <li key={l.href}>
                                        <Link
                                             href={l.href}
                                             className="group inline-flex items-center gap-2 text-sm text-background/75 transition-colors hover:text-primary"
                                        >
                                             <span className="font-display text-base">
                                                  {l.label}
                                             </span>
                                             <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:rotate-45 group-hover:opacity-100" />
                                        </Link>
                                   </li>
                              ))}
                         </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-3">
                         <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/50">
                              /Resources
                         </p>
                         <ul className="mt-5 space-y-2.5">
                              {RESOURCE_LINKS.map((l) => (
                                   <li key={l.href}>
                                        <Link
                                             href={l.href}
                                             className="group inline-flex items-center gap-2 text-sm text-background/75 transition-colors hover:text-primary"
                                        >
                                             <span className="font-display text-base">
                                                  {l.label}
                                             </span>
                                             {l.badge && (
                                                  <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                                                       {l.badge}
                                                  </span>
                                             )}
                                             <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:rotate-45 group-hover:opacity-100" />
                                        </Link>
                                   </li>
                              ))}
                         </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-5 lg:col-span-3">
                         <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/50">
                              /Stay informed
                         </p>
                         <h3 className="font-display text-2xl leading-tight text-background">
                              Insights in your inbox,{" "}
                              <span className="italic text-primary">
                                   never noise.
                              </span>
                         </h3>
                         <p className="text-sm text-background/65">
                              Quarterly notes on protection, growth, and legacy
                              planning.
                         </p>
                         <form
                              onSubmit={(e) => e.preventDefault()}
                              className="group flex items-center gap-2 rounded-full border border-background/20 bg-background/5 p-1 pl-5 transition-colors focus-within:border-primary/60"
                         >
                              <input
                                   type="email"
                                   required
                                   placeholder="you@example.com"
                                   className="flex-1 bg-transparent text-sm text-background placeholder:text-background/40 focus:outline-none"
                              />
                              <button
                                   type="submit"
                                   aria-label="Subscribe"
                                   className="inline-flex h-10 items-center gap-1.5 rounded-full bg-primary px-5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
                              >
                                   Join
                                   <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-focus-within:rotate-45" />
                              </button>
                         </form>

                         <div className="flex items-center gap-2 pt-2">
                              {SOCIALS.map(({ Icon, href, label }) => (
                                   <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/15 bg-background/5 text-background/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                                   >
                                        <Icon className="h-4 w-4" />
                                   </a>
                              ))}
                         </div>
                    </div>
               </div>

               {/* Oversized wordmark */}
               <div
                    aria-hidden
                    className="mt-24 select-none overflow-hidden font-display text-[18vw] leading-[0.85] tracking-tighter text-background/[0.06] lg:text-[14rem]"
               >
                    Bildove<span className="italic text-primary/15">.</span>
               </div>

               {/* Legal */}
               <div className="mt-6 flex flex-col gap-4 border-t border-background/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/50">
                         © {new Date().getFullYear()} {COMPANY_PROFILE.name} ·
                         <span className="ml-2 text-background/40">
                              All rights reserved
                         </span>
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/50">
                         Crafted by{" "}
                         <Link
                              href="https://rexedge.site"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-background/80 transition-colors hover:text-primary"
                         >
                              Rex Edge
                         </Link>
                    </p>
               </div>
          </div>
     </footer>
);

export default Footer;
