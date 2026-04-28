/** @format */

import { Button } from "@/components/ui/button";
import { COMPANY_PROFILE } from "@/utils/const";
import { Metadata } from "next";
import Link from "next/link";
import {
     ArrowUpRight,
     Database,
     Eye,
     FileText,
     Lock,
     Mail,
     RefreshCw,
     ScrollText,
     ShieldCheck,
     Share2,
     Sparkles,
     UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
     title: "Privacy Policy",
     description: `How ${COMPANY_PROFILE.name} collects, uses, and protects your personal and financial information.`,
};

const SECTIONS = [
     {
          id: "introduction",
          n: "01",
          icon: ScrollText,
          title: "Introduction",
          body: `At ${COMPANY_PROFILE.name} Solutions, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data in alignment with our mission to provide personalized financial guidance and empower individuals to achieve their financial goals.`,
     },
     {
          id: "information-we-collect",
          n: "02",
          icon: Database,
          title: "Information we collect",
          body: "To provide you with our services and personalized financial solutions, we may collect the following types of information:",
          items: [
               "Personal identification information (name, email address, phone number)",
               "Financial information (income, expenses, assets, debts)",
               "Employment information",
               "Information about your financial goals and preferences",
               "Usage data and interactions with our website and services",
          ],
     },
     {
          id: "how-we-use",
          n: "03",
          icon: Eye,
          title: "How we use your information",
          body: "We use the collected information to:",
          items: [
               "Provide personalized financial guidance and solutions",
               "Improve our services and develop new features",
               "Communicate with you about your account and our services",
               "Conduct research and analysis to enhance financial literacy resources",
               "Comply with legal and regulatory requirements",
          ],
     },
     {
          id: "data-protection",
          n: "04",
          icon: Lock,
          title: "Data protection & security",
          body: "We implement robust security measures to protect your personal and financial information from unauthorized access, disclosure, alteration, and destruction. These measures include encryption, secure data storage, and regular security audits.",
     },
     {
          id: "sharing",
          n: "05",
          icon: Share2,
          title: "Sharing of information",
          body: "We do not sell your personal information to third parties. We may share your information with:",
          items: [
               "Service providers who assist us in delivering our services",
               "Legal and regulatory authorities when required by law",
               "Business partners, with your explicit consent",
          ],
     },
     {
          id: "your-rights",
          n: "06",
          icon: UserCheck,
          title: "Your rights & choices",
          body: "You have the right to:",
          items: [
               "Access and review your personal information",
               "Request corrections to your data",
               "Opt-out of certain data collection and use",
               "Request deletion of your account and associated data",
          ],
     },
     {
          id: "updates",
          n: "07",
          icon: RefreshCw,
          title: "Updates to this policy",
          body: "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes and obtain your consent where required.",
     },
     {
          id: "vision",
          n: "08",
          icon: Sparkles,
          title: "Commitment to our vision",
          body: "This Privacy Policy reflects our commitment to our vision of creating a future where financial freedom is within reach for all individuals. We strive to maintain the highest standards of privacy and security while empowering you with the knowledge and tools needed to achieve your financial goals.",
     },
] as const;

export default function PrivacyPage() {
     return (
          <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
               {/* HERO */}
               <section className="relative isolate pb-16 pt-16 md:pb-20 md:pt-24">
                    <div className="gradient-mesh absolute inset-0 -z-10" />
                    <div
                         aria-hidden
                         className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]"
                    />
                    <div
                         aria-hidden
                         className="absolute -right-24 -top-32 -z-10 h-[460px] w-[460px] rounded-full bg-accent/20 blur-3xl"
                    />
                    <div
                         aria-hidden
                         className="absolute -left-32 top-1/2 -z-10 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl"
                    />

                    <div className="container mx-auto px-6">
                         <div className="grid items-end gap-10 lg:grid-cols-12">
                              <div className="lg:col-span-8">
                                   <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                                        <ShieldCheck className="h-3 w-3" />
                                        /Legal · Privacy Policy
                                   </span>
                                   <h1 className="text-balance font-display text-[14vw] font-semibold leading-[0.92] tracking-[-0.04em] sm:text-[10vw] md:text-[8vw] lg:text-[7rem]">
                                        Your data,
                                        <br />
                                        <em className="gradient-text not-italic">
                                             protected
                                        </em>{" "}
                                        like family.
                                   </h1>
                                   <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                                        We treat the information you share with
                                        us the same way we treat your finances —
                                        with care, transparency, and a fiduciary
                                        mindset. Here&apos;s the plain-English
                                        version of how that works.
                                   </p>
                              </div>

                              <aside className="lg:col-span-4">
                                   <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur">
                                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                             /Last updated
                                        </p>
                                        <p className="font-display text-2xl font-semibold tracking-tight">
                                             April 2026
                                        </p>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                             Version 2.1 · Effective immediately
                                        </p>
                                        <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                                             <div className="rounded-2xl border border-border/60 bg-background/60 p-3">
                                                  <p className="font-display text-xl font-semibold text-primary">
                                                       0
                                                  </p>
                                                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                                                       Data sold
                                                  </p>
                                             </div>
                                             <div className="rounded-2xl border border-border/60 bg-background/60 p-3">
                                                  <p className="font-display text-xl font-semibold text-primary">
                                                       256
                                                  </p>
                                                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                                                       Bit AES
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </aside>
                         </div>
                    </div>
               </section>

               {/* TOC + SECTIONS */}
               <section className="relative isolate py-12 md:py-20">
                    <div className="container mx-auto px-6">
                         <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                              <aside className="lg:col-span-3">
                                   <div className="lg:sticky lg:top-28">
                                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                             /Contents
                                        </p>
                                        <nav
                                             aria-label="Table of contents"
                                             className="space-y-1"
                                        >
                                             {SECTIONS.map((s) => (
                                                  <a
                                                       key={s.id}
                                                       href={`#${s.id}`}
                                                       className="group flex items-baseline gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                                                  >
                                                       <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/70 group-hover:text-primary">
                                                            /{s.n}
                                                       </span>
                                                       <span className="leading-snug">
                                                            {s.title}
                                                       </span>
                                                  </a>
                                             ))}
                                        </nav>
                                   </div>
                              </aside>

                              <div className="space-y-8 lg:col-span-9">
                                   {SECTIONS.map(
                                        ({
                                             id,
                                             n,
                                             icon: Icon,
                                             title,
                                             body,
                                             items,
                                        }) => (
                                             <article
                                                  key={id}
                                                  id={id}
                                                  className="group relative scroll-mt-24 overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-7 shadow-sm backdrop-blur transition-all hover:shadow-lg md:p-10"
                                             >
                                                  <div
                                                       aria-hidden
                                                       className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:bg-primary/10"
                                                  />
                                                  <div className="flex flex-wrap items-start gap-6 md:gap-8">
                                                       <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                                                            <Icon className="h-6 w-6" />
                                                       </div>
                                                       <div className="min-w-0 flex-1">
                                                            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                                                                 /{n}
                                                            </p>
                                                            <h2 className="text-balance font-display text-2xl font-semibold tracking-tight md:text-3xl">
                                                                 {title}
                                                            </h2>
                                                            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                                                                 {body}
                                                            </p>
                                                            {items && (
                                                                 <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                                                                      {items.map(
                                                                           (
                                                                                item,
                                                                           ) => (
                                                                                <li
                                                                                     key={
                                                                                          item
                                                                                     }
                                                                                     className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground/90"
                                                                                >
                                                                                     <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                                                     <span className="leading-snug">
                                                                                          {
                                                                                               item
                                                                                          }
                                                                                     </span>
                                                                                </li>
                                                                           ),
                                                                      )}
                                                                 </ul>
                                                            )}
                                                       </div>
                                                  </div>
                                             </article>
                                        ),
                                   )}
                              </div>
                         </div>
                    </div>
               </section>

               {/* CONTACT CTA */}
               <section className="relative isolate overflow-hidden bg-foreground py-16 text-background md:py-24">
                    <div
                         aria-hidden
                         className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(hsl(var(--background))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--background))_1px,transparent_1px)] [background-size:64px_64px]"
                    />
                    <div
                         aria-hidden
                         className="absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
                    />
                    <div className="container mx-auto px-6">
                         <div className="grid items-end gap-10 lg:grid-cols-12">
                              <div className="lg:col-span-7">
                                   <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                                        /Contact · Privacy team
                                   </p>
                                   <h2 className="text-balance font-display text-4xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-6xl">
                                        Questions about
                                        <br />
                                        <em className="not-italic text-primary">
                                             your data?
                                        </em>
                                   </h2>
                                   <p className="mt-6 max-w-xl leading-relaxed text-background/70">
                                        Reach out any time. We answer privacy
                                        requests within one business day —
                                        usually faster.
                                   </p>
                              </div>

                              <div className="lg:col-span-5">
                                   <div className="space-y-5 rounded-3xl border border-background/15 bg-background/5 p-7 backdrop-blur">
                                        <div className="flex items-start gap-3">
                                             <Mail className="mt-0.5 h-5 w-5 text-accent" />
                                             <div>
                                                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/60">
                                                       Email
                                                  </p>
                                                  <a
                                                       href="mailto:privacy@bildovefinancial.com"
                                                       className="text-base font-medium transition-colors hover:text-accent"
                                                  >
                                                       privacy@bildovefinancial.com
                                                  </a>
                                             </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                             <FileText className="mt-0.5 h-5 w-5 text-accent" />
                                             <div>
                                                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/60">
                                                       Phone
                                                  </p>
                                                  <a
                                                       href={`tel:${COMPANY_PROFILE.phone.replace(/[^\d+]/g, "")}`}
                                                       className="text-base font-medium transition-colors hover:text-accent"
                                                  >
                                                       {COMPANY_PROFILE.phone}
                                                  </a>
                                             </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3 border-t border-background/15 pt-4">
                                             <Button
                                                  asChild
                                                  size="lg"
                                                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                                             >
                                                  <Link href="/contact">
                                                       Contact us
                                                       <ArrowUpRight className="ml-1.5 h-4 w-4" />
                                                  </Link>
                                             </Button>
                                             <Button
                                                  asChild
                                                  size="lg"
                                                  variant="outline"
                                                  className="rounded-full border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
                                             >
                                                  <Link href="/">
                                                       Back to home
                                                  </Link>
                                             </Button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     );
}
