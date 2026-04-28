import Hero from "@/components/ui/hero";
import { COMPANY_PROFILE } from "@/utils/const";
import {
     AlertTriangle,
     ArrowUpRight,
     CheckCircle2,
     ClipboardList,
     Eye,
     FileText,
     Globe,
     Lock,
     Mail,
     Phone,
     RefreshCw,
     ScrollText,
     Share2,
     Shield,
     ShieldCheck,
     UserCheck,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
     title: "Privacy Policy - Bildove Financial Services",
     description:
          "How Bildove Financial Services collects, uses, protects, and shares your information. Your privacy is fundamental to how we operate.",
};

const LAST_UPDATED = "April 28, 2026";

const PRINCIPLES = [
     {
          icon: Lock,
          word: "Protected",
          title: "Encryption at every layer.",
          description:
               "Your data is encrypted in transit and at rest. We follow industry-leading security practices.",
     },
     {
          icon: Eye,
          word: "Transparent",
          title: "No surprises, ever.",
          description:
               "We clearly tell you what we collect, why we collect it, and what happens with it.",
     },
     {
          icon: UserCheck,
          word: "Yours",
          title: "You stay in control.",
          description:
               "Access, correct, export, or delete your information at any time, on your terms.",
     },
];

const SECTIONS: Array<{
     id: string;
     num: string;
     icon: typeof Shield;
     title: string;
     intro?: string;
     body?: React.ReactNode;
     list?: string[];
}> = [
     {
          id: "introduction",
          num: "01",
          icon: ScrollText,
          title: "Introduction",
          body: (
               <p>
                    At <strong>Bildove Financial Services</strong>, we are
                    committed to protecting your privacy and ensuring the
                    security of your personal information. This Privacy Policy
                    outlines how we collect, use, disclose, and safeguard your
                    data in alignment with our mission to provide personalized
                    financial guidance and empower individuals to achieve their
                    financial goals.
               </p>
          ),
     },
     {
          id: "information-we-collect",
          num: "02",
          icon: ClipboardList,
          title: "Information We Collect",
          intro: "To provide our services and personalized financial solutions, we may collect the following:",
          list: [
               "Personal identification information (name, email address, phone number)",
               "Financial information (income, expenses, assets, debts)",
               "Employment information",
               "Information about your financial goals and preferences",
               "Usage data and interactions with our website and services",
          ],
     },
     {
          id: "how-we-use",
          num: "03",
          icon: FileText,
          title: "How We Use Your Information",
          intro: "We use the collected information to:",
          list: [
               "Provide personalized financial guidance and solutions",
               "Improve our services and develop new features",
               "Communicate with you about your account and our services",
               "Conduct research and analysis to enhance financial literacy resources",
               "Comply with legal and regulatory requirements",
          ],
     },
     {
          id: "data-protection",
          num: "04",
          icon: Shield,
          title: "Data Protection & Security",
          body: (
               <p>
                    We implement robust security measures to protect your
                    personal and financial information from unauthorized access,
                    disclosure, alteration, and destruction. These measures
                    include encryption, secure data storage, access controls,
                    and regular security audits.
               </p>
          ),
     },
     {
          id: "sharing",
          num: "05",
          icon: Share2,
          title: "Sharing of Information",
          intro: "We do not sell your personal information to third parties. We may share your information with:",
          list: [
               "Service providers who assist us in delivering our services",
               "Legal and regulatory authorities when required by law",
               "Business partners, with your explicit consent",
          ],
     },
     {
          id: "your-rights",
          num: "06",
          icon: UserCheck,
          title: "Your Rights & Choices",
          intro: "You have the right to:",
          list: [
               "Access and review your personal information",
               "Request corrections to your data",
               "Opt-out of certain data collection and use",
               "Request deletion of your account and associated data",
          ],
     },
     {
          id: "cookies",
          num: "07",
          icon: Globe,
          title: "Cookies & Tracking",
          body: (
               <p>
                    We use cookies and similar tracking technologies to improve
                    your experience, remember your preferences, analyze site
                    traffic, and measure the effectiveness of our
                    communications. You can manage cookie preferences through
                    your browser settings at any time.
               </p>
          ),
     },
     {
          id: "updates",
          num: "08",
          icon: RefreshCw,
          title: "Updates to This Policy",
          body: (
               <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or for legal reasons. We
                    will notify you of any significant changes and obtain your
                    consent where required.
               </p>
          ),
     },
];

export default function PrivacyPage() {
     return (
          <main className="flex min-h-screen flex-col">
               <Hero
                    eyebrow="Privacy Policy"
                    title="Your privacy, our promise"
                    description="How we collect, use, protect, and share your information — written plainly, without the legal labyrinth."
                    image="/abouthero.jpg"
               />

               {/* Trust strip */}
               <section className="relative isolate overflow-hidden bg-background py-16 md:py-20">
                    <div
                         aria-hidden
                         className="absolute -left-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl"
                    />
                    <div className="container mx-auto px-6">
                         <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
                              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                                   <ShieldCheck className="h-3 w-3" />
                                   Last updated · {LAST_UPDATED}
                              </span>
                              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                                   /Privacy · v3.0
                              </p>
                         </div>

                         <div className="mb-16 grid grid-cols-12 items-end gap-y-12">
                              <div className="col-span-12 lg:col-span-8">
                                   <h2 className="text-balance font-display text-5xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl">
                                        Your privacy is{" "}
                                        <span className="italic text-primary">
                                             not negotiable.
                                        </span>
                                   </h2>
                              </div>
                              <div className="col-span-12 lg:col-span-4 lg:pl-10">
                                   <p className="text-base leading-relaxed text-muted-foreground">
                                        We treat the information you share with
                                        the same care we treat the families we
                                        serve. This page explains exactly how.
                                   </p>
                              </div>
                         </div>

                         <div className="grid gap-6 md:grid-cols-3">
                              {PRINCIPLES.map((p) => {
                                   const Icon = p.icon;
                                   return (
                                        <article
                                             key={p.word}
                                             className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                                        >
                                             <div
                                                  aria-hidden
                                                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                                             />
                                             <div className="relative">
                                                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                       <Icon className="h-5 w-5" />
                                                  </div>
                                                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                                                       {p.word}
                                                  </p>
                                                  <h3 className="mb-3 text-balance font-display text-2xl font-semibold tracking-tight">
                                                       {p.title}
                                                  </h3>
                                                  <p className="text-sm leading-relaxed text-muted-foreground">
                                                       {p.description}
                                                  </p>
                                             </div>
                                        </article>
                                   );
                              })}
                         </div>
                    </div>
               </section>

               {/* TOC + Sections */}
               <section className="relative bg-secondary/30 py-24 md:py-32">
                    <div className="container mx-auto px-6">
                         <div className="grid grid-cols-12 gap-10 lg:gap-16">
                              {/* Sticky TOC */}
                              <aside className="col-span-12 lg:col-span-4">
                                   <div className="lg:sticky lg:top-24">
                                        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                                             /Contents
                                        </p>
                                        <nav className="space-y-1">
                                             {SECTIONS.map((s) => (
                                                  <Link
                                                       key={s.id}
                                                       href={`#${s.id}`}
                                                       className="group flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm transition-colors hover:border-border/60 hover:bg-card"
                                                  >
                                                       <span className="font-mono text-[10px] text-accent">
                                                            {s.num}
                                                       </span>
                                                       <span className="flex-1 font-medium">
                                                            {s.title}
                                                       </span>
                                                       <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                                                  </Link>
                                             ))}
                                        </nav>
                                   </div>
                              </aside>

                              {/* Sections */}
                              <div className="col-span-12 space-y-16 lg:col-span-8">
                                   {SECTIONS.map((s) => {
                                        const Icon = s.icon;
                                        return (
                                             <article
                                                  key={s.id}
                                                  id={s.id}
                                                  className="scroll-mt-24"
                                             >
                                                  <div className="mb-6 flex items-start gap-4">
                                                       <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                            <Icon className="h-5 w-5" />
                                                       </div>
                                                       <div className="flex-1 pt-1">
                                                            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                                                                 Section {s.num}
                                                            </p>
                                                            <h3 className="text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
                                                                 {s.title}
                                                            </h3>
                                                       </div>
                                                  </div>

                                                  <div className="space-y-5 rounded-3xl border border-border/60 bg-card/80 p-8 text-base leading-relaxed text-muted-foreground backdrop-blur-sm md:p-10">
                                                       {s.intro && (
                                                            <p>{s.intro}</p>
                                                       )}
                                                       {s.body}
                                                       {s.list && (
                                                            <ul className="space-y-3">
                                                                 {s.list.map(
                                                                      (
                                                                           item,
                                                                      ) => (
                                                                           <li
                                                                                key={
                                                                                     item
                                                                                }
                                                                                className="flex items-start gap-3 text-foreground"
                                                                           >
                                                                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                                                                <span className="text-sm md:text-base">
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
                                             </article>
                                        );
                                   })}

                                   {/* Notice callout */}
                                   <div className="rounded-3xl border border-accent/30 bg-accent/10 p-8 md:p-10">
                                        <div className="flex items-start gap-4">
                                             <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                                                  <AlertTriangle className="h-5 w-5" />
                                             </div>
                                             <div>
                                                  <h4 className="mb-2 font-display text-2xl font-semibold tracking-tight">
                                                       A note on third-party
                                                       links
                                                  </h4>
                                                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                                                       Our website may contain
                                                       links to third-party
                                                       sites we do not own or
                                                       operate. This Privacy
                                                       Policy does not apply to
                                                       those services. We
                                                       encourage you to read the
                                                       privacy policies of every
                                                       site you visit.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Contact CTA */}
               <section
                    id="contact"
                    className="relative isolate overflow-hidden bg-background py-24 md:py-32"
               >
                    <div
                         aria-hidden
                         className="gradient-mesh absolute inset-0 -z-10 opacity-60"
                    />
                    <div
                         aria-hidden
                         className="absolute -bottom-40 -right-32 -z-10 h-[480px] w-[480px] rounded-full bg-primary/15 blur-3xl"
                    />
                    <div className="container mx-auto px-6">
                         <div className="mb-12 grid grid-cols-12 items-end gap-10">
                              <div className="col-span-12 lg:col-span-8">
                                   <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                        Privacy questions?
                                   </span>
                                   <h2 className="text-balance font-display text-5xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl">
                                        Reach out{" "}
                                        <span className="italic text-primary">
                                             anytime.
                                        </span>
                                   </h2>
                              </div>
                              <div className="col-span-12 lg:col-span-4 lg:pl-10">
                                   <p className="text-base leading-relaxed text-muted-foreground">
                                        If you have questions, concerns, or
                                        requests regarding this Privacy Policy
                                        or our data practices, our team is here.
                                   </p>
                              </div>
                         </div>

                         <div className="grid gap-6 md:grid-cols-3">
                              <a
                                   href={`mailto:${COMPANY_PROFILE.email}`}
                                   className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                              >
                                   <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Mail className="h-5 w-5" />
                                   </div>
                                   <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                                        Email
                                   </p>
                                   <p className="break-all font-display text-xl font-semibold tracking-tight">
                                        {COMPANY_PROFILE.email}
                                   </p>
                              </a>

                              <a
                                   href={`tel:${COMPANY_PROFILE.phone.replace(/[^+\d]/g, "")}`}
                                   className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                              >
                                   <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Phone className="h-5 w-5" />
                                   </div>
                                   <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                                        Phone
                                   </p>
                                   <p className="font-display text-xl font-semibold tracking-tight">
                                        {COMPANY_PROFILE.phone}
                                   </p>
                              </a>

                              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-8 backdrop-blur-sm">
                                   <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <Globe className="h-5 w-5" />
                                   </div>
                                   <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                                        Mailing address
                                   </p>
                                   <p className="font-display text-xl font-semibold leading-snug tracking-tight">
                                        {COMPANY_PROFILE.address}
                                   </p>
                              </div>
                         </div>

                         <div className="mt-16 rounded-[2rem] border border-border/60 bg-card/80 p-10 text-center backdrop-blur-sm md:p-14">
                              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                                   /Our commitment
                              </p>
                              <p className="mx-auto max-w-3xl text-balance font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                                   This Privacy Policy reflects our commitment
                                   to a future where financial freedom is{" "}
                                   <span className="italic text-primary">
                                        within reach for all
                                   </span>{" "}
                                   — protected by the highest standards of
                                   privacy and security.
                              </p>
                         </div>
                    </div>
               </section>
          </main>
     );
}
