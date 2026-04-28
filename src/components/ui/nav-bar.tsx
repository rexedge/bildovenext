/** @format */

"use client";

import { ArrowUpRight, CalendarCheck, Menu as MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { COMPANY_PROFILE } from "@/utils/const";
import { Button } from "./button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

const NAV_LINKS = [
     { label: "About", href: "/about" },
     { label: "Services", href: "/services" },
     { label: "Products", href: "/products" },
     { label: "Testimonials", href: "/testimonials" },
     { label: "Contact", href: "/contact" },
];

export default function NavBar() {
     const pathname = usePathname();
     const hideEntirely =
          pathname?.startsWith("/profile") ||
          pathname?.startsWith("/event") ||
          false;
     const hideNav = pathname?.startsWith("/event") ?? false;
     const [scrolled, setScrolled] = useState(false);
     const [open, setOpen] = useState(false);

     useEffect(() => {
          const onScroll = () => setScrolled(window.scrollY > 8);
          onScroll();
          window.addEventListener("scroll", onScroll, { passive: true });
          return () => window.removeEventListener("scroll", onScroll);
     }, []);

     if (hideEntirely) return null;

     return (
          <header
               className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-300",
                    scrolled
                         ? "border-b border-border/60 bg-background/80 shadow-[0_1px_0_0_hsl(var(--border)/0.4)] backdrop-blur-xl"
                         : "border-b border-transparent bg-background/50 backdrop-blur-md",
               )}
          >
               {/* Top accent hairline */}
               <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

               {/* Slim utility strip */}
               <div className="hidden border-b border-border/40 bg-background/30 lg:block">
                    <div className="mx-auto flex h-8 max-w-[1400px] items-center justify-between px-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground lg:px-10">
                         <span className="inline-flex items-center gap-2">
                              <span className="relative flex h-1.5 w-1.5">
                                   <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
                                   <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
                              </span>
                              Licensed in 50 states + USVI
                         </span>
                         <span className="inline-flex items-center gap-6">
                              <a
                                   href={`tel:${COMPANY_PROFILE.phone}`}
                                   className="transition-colors hover:text-primary"
                              >
                                   {COMPANY_PROFILE.phone}
                              </a>
                              <span className="text-border">/</span>
                              <a
                                   href={`mailto:${COMPANY_PROFILE.email}`}
                                   className="transition-colors hover:text-primary"
                              >
                                   {COMPANY_PROFILE.email}
                              </a>
                         </span>
                    </div>
               </div>

               <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
                    <Link
                         href="/"
                         className="group flex shrink-0 items-center gap-3"
                    >
                         <Image
                              height={56}
                              width={120}
                              src="/bildoveLogo1.png"
                              alt={`${COMPANY_PROFILE.name} logo`}
                              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] dark:brightness-110"
                              priority
                         />
                         <span className="hidden flex-col leading-tight xl:flex">
                              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                   /Bildove
                              </span>
                              <span className="font-display text-sm italic text-primary">
                                   Financial
                              </span>
                         </span>
                    </Link>

                    <nav className="hidden items-center gap-1 lg:flex">
                         {!hideNav &&
                              NAV_LINKS.map((link, i) => {
                                   const active = pathname === link.href;
                                   const num = String(i + 1).padStart(2, "0");
                                   return (
                                        <Link
                                             key={link.href}
                                             href={link.href}
                                             className={cn(
                                                  "group relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors",
                                                  active
                                                       ? "text-primary"
                                                       : "text-foreground/70 hover:text-foreground",
                                             )}
                                        >
                                             <span
                                                  className={cn(
                                                       "text-[9px] tabular-nums opacity-60",
                                                       active &&
                                                            "text-primary opacity-100",
                                                  )}
                                             >
                                                  /{num}
                                             </span>
                                             <span>{link.label}</span>
                                             <span
                                                  className={cn(
                                                       "pointer-events-none absolute inset-x-3 -bottom-px h-px rounded-full bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-300",
                                                       active
                                                            ? "opacity-100"
                                                            : "opacity-0 group-hover:opacity-60",
                                                  )}
                                             />
                                        </Link>
                                   );
                              })}
                    </nav>

                    <div className="flex items-center gap-2">
                         <ThemeToggle />
                         <Button
                              asChild
                              className="group hidden rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90 lg:inline-flex"
                         >
                              <Link
                                   href={COMPANY_PROFILE.calendly}
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   <CalendarCheck className="mr-2 h-4 w-4" />
                                   Book consultation
                                   <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                              </Link>
                         </Button>

                         <Sheet open={open} onOpenChange={setOpen}>
                              <SheetTrigger asChild>
                                   <Button
                                        size="icon"
                                        variant="ghost"
                                        className="rounded-full text-foreground hover:bg-primary/10 lg:hidden"
                                        aria-label="Open menu"
                                   >
                                        <MenuIcon className="h-6 w-6" />
                                   </Button>
                              </SheetTrigger>
                              <SheetContent
                                   side="right"
                                   className="w-full overflow-hidden border-l border-border bg-background p-0 sm:w-[440px]"
                              >
                                   {/* Decorative background */}
                                   <div className="gradient-mesh pointer-events-none absolute inset-0 opacity-60" />
                                   <div
                                        className="pointer-events-none absolute inset-0 opacity-[0.04]"
                                        style={{
                                             backgroundImage:
                                                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                                             backgroundSize: "32px 32px",
                                        }}
                                   />
                                   <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                                   <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

                                   <div className="relative flex h-full flex-col px-6 pb-8 pt-6">
                                        <div className="flex items-center justify-between">
                                             <Link
                                                  href="/"
                                                  onClick={() => setOpen(false)}
                                                  className="flex items-center gap-2"
                                             >
                                                  <Image
                                                       height={64}
                                                       width={140}
                                                       src="/bildoveLogo1.png"
                                                       alt={`${COMPANY_PROFILE.name} logo`}
                                                       className="h-11 w-auto object-contain dark:brightness-110"
                                                  />
                                             </Link>
                                             <button
                                                  onClick={() => setOpen(false)}
                                                  aria-label="Close menu"
                                                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/70 transition hover:bg-muted hover:text-foreground"
                                             >
                                                  <X className="h-5 w-5" />
                                             </button>
                                        </div>

                                        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                                             /Navigate
                                        </p>

                                        <nav className="mt-3 flex flex-col">
                                             {NAV_LINKS.map((link, i) => {
                                                  const active =
                                                       pathname === link.href;
                                                  const num = String(
                                                       i + 1,
                                                  ).padStart(2, "0");
                                                  return (
                                                       <Link
                                                            key={link.href}
                                                            href={link.href}
                                                            onClick={() =>
                                                                 setOpen(false)
                                                            }
                                                            className={cn(
                                                                 "group relative flex items-baseline justify-between border-b border-border/60 py-4 transition-colors",
                                                                 active &&
                                                                      "border-primary/40",
                                                            )}
                                                       >
                                                            <span className="flex items-baseline gap-3">
                                                                 <span
                                                                      className={cn(
                                                                           "font-mono text-[11px] tabular-nums tracking-[0.2em]",
                                                                           active
                                                                                ? "text-primary"
                                                                                : "text-muted-foreground",
                                                                      )}
                                                                 >
                                                                      /{num}
                                                                 </span>
                                                                 <span
                                                                      className={cn(
                                                                           "font-display text-3xl leading-none transition-colors",
                                                                           active
                                                                                ? "italic text-primary"
                                                                                : "text-foreground group-hover:text-primary",
                                                                      )}
                                                                 >
                                                                      {
                                                                           link.label
                                                                      }
                                                                 </span>
                                                            </span>
                                                            <ArrowUpRight
                                                                 className={cn(
                                                                      "h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-primary",
                                                                      active &&
                                                                           "text-primary",
                                                                 )}
                                                            />
                                                       </Link>
                                                  );
                                             })}
                                        </nav>

                                        <div className="mt-8 space-y-2 text-sm">
                                             <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                                                  /Reach us
                                             </p>
                                             <a
                                                  href={`tel:${COMPANY_PROFILE.phone}`}
                                                  className="block font-medium text-foreground transition-colors hover:text-primary"
                                             >
                                                  {COMPANY_PROFILE.phone}
                                             </a>
                                             <a
                                                  href={`mailto:${COMPANY_PROFILE.email}`}
                                                  className="block text-muted-foreground transition-colors hover:text-primary"
                                             >
                                                  {COMPANY_PROFILE.email}
                                             </a>
                                        </div>

                                        <Button
                                             asChild
                                             size="lg"
                                             className="group mt-auto w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                                        >
                                             <Link
                                                  href={
                                                       COMPANY_PROFILE.calendly
                                                  }
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  onClick={() => setOpen(false)}
                                             >
                                                  <CalendarCheck className="mr-2 h-5 w-5" />
                                                  Book consultation
                                                  <ArrowUpRight className="ml-1.5 h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                                             </Link>
                                        </Button>
                                   </div>
                              </SheetContent>
                         </Sheet>
                    </div>
               </div>
          </header>
     );
}
