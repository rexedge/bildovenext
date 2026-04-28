/** @format */

import { EventForm } from "@/components/forms/event-form";
import ImageList from "@/components/image-list";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
     ArrowUpRight,
     CalendarDays,
     CheckCircle2,
     GraduationCap,
     Lightbulb,
     MapPin,
     Mic2,
     ShieldCheck,
     Sparkles,
     TrendingUp,
     Users,
     Wallet,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const EVENT_DETAILS = {
     name: "Unlocking your wealthy life by design — A secret to financial freedom",
     shortName: "How to be debt free",
     desc: "Discover proven methods and strategies for eliminating debt, creating a sustainable budget, increasing your income, setting up your child for financial success, and investing wisely for a secure financial future.",
     metaTitle: "Live Workshop · Unlocking your wealthy life by design",
     metaDesc:
          "A free live workshop on debt elimination, smart budgeting, IUL strategies, and building generational wealth — hosted by Bildove Financial.",
     date: "2024-11-27T11:00",
     venueName: "Christ Apostolic Church of Chicago",
     venueAddress: "15015 Grant Avenue, Room 19, Dolton, IL 60419",
     hosts: [
          [
               {
                    image: "/team/afolabi-adeniran.jpg",
                    name: "Afolabi Adeniran",
                    designation: "Financial Strategist",
               },
               {
                    image: "/foluke.jpg",
                    name: "Foluke Oladipo",
                    designation: "Financial Strategist",
               },
               {
                    image: "/team/olatubosun-oladipo.jpg",
                    name: "Olatubosun Oladipo",
                    designation: "Financial Strategist",
               },
          ],
          [
               {
                    image: "/team/olubunmi-adeboye.jpg",
                    name: "Olubunmi Adeboye",
                    designation: "Financial Strategist",
               },
               {
                    image: "/team/gbadebo-adeboye.jpg",
                    name: "Gbadebo Adeboye",
                    designation: "Financial Strategist",
               },
               {
                    image: "/team/elfrida-majekodunmi.jpg",
                    name: "Elfrida Majekodunmi",
                    designation: "Financial Strategist",
               },
          ],
          [
               {
                    image: "/team/bukky-chukwu.jpg",
                    name: "Bukky Chukwu",
                    designation: "Financial Strategist",
               },
               {
                    image: "/team/abel-adedeji.jpg",
                    name: "Abel Adedeji",
                    designation: "Financial Strategist",
               },
          ],
     ],
};

const PRESS_LOGOS = [
     { src: "/companies/Forbes.png", alt: "Forbes" },
     { src: "/companies/icn.png", alt: "ICN" },
     { src: "/companies/kip.png", alt: "Kiplinger" },
     { src: "/companies/marketwatch.png", alt: "MarketWatch" },
     { src: "/companies/msn.png", alt: "MSN" },
     { src: "/companies/usa-today.png", alt: "USA Today" },
];

const BENEFITS = [
     {
          n: "01",
          icon: Wallet,
          title: "Eliminate debt — for good",
          body: "Practical, personalised debt-repayment plans that get you to financial freedom faster.",
     },
     {
          n: "02",
          icon: GraduationCap,
          title: "Set your kids up early",
          body: "How to build credit and a financial foundation for your teens and first-time builders.",
     },
     {
          n: "03",
          icon: ShieldCheck,
          title: "A budget that holds",
          body: "Create a sustainable budget, build an emergency fund, and invest with confidence.",
     },
     {
          n: "04",
          icon: TrendingUp,
          title: "Tax-free Social Security",
          body: "Strategies to receive up to 100% of your Social Security benefits tax-free.",
     },
     {
          n: "05",
          icon: Lightbulb,
          title: "An abundance mindset",
          body: "Shift from scarcity to abundance and make decisions that attract real wealth.",
     },
     {
          n: "06",
          icon: Sparkles,
          title: "Build generational wealth",
          body: "Lay the perfect foundation for your dream retirement and the legacy after it.",
     },
];

const TOPICS = [
     "Building credit & credit repair",
     "Debt management",
     "Budgeting and financial planning",
     "Investment portfolios",
     "Side hustles & passive income",
     "Income growth and protection",
     "Estate planning",
     "Credit and debit card basics",
     "Mortgage protection",
     "Retirement planning",
     "IUL & tax-efficient growth",
     "Sequence-of-returns risk",
];

export const metadata: Metadata = {
     title: EVENT_DETAILS.metaTitle,
     description: EVENT_DETAILS.metaDesc,
};

export default function HowToBeDebtFreePage() {
     return (
          <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
               {/* HERO */}
               <section className="relative isolate overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
                    <div className="gradient-mesh absolute inset-0 -z-10" />
                    <div
                         aria-hidden
                         className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]"
                    />
                    <div
                         aria-hidden
                         className="absolute -right-24 -top-32 -z-10 h-[480px] w-[480px] rounded-full bg-accent/25 blur-3xl"
                    />
                    <div
                         aria-hidden
                         className="absolute -left-32 top-1/2 -z-10 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl"
                    />

                    <div className="container mx-auto px-6">
                         <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
                              <div className="lg:col-span-8">
                                   <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                                        <span className="relative flex h-2 w-2">
                                             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                                             <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                                        </span>
                                        /Live workshop · Free seat
                                   </span>
                                   <h1 className="text-balance font-display text-[14vw] font-semibold leading-[0.9] tracking-[-0.04em] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5rem]">
                                        How to be
                                        <br />
                                        <em className="gradient-text not-italic">
                                             debt free.
                                        </em>
                                   </h1>
                                   <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                                        {EVENT_DETAILS.desc}
                                   </p>

                                   <div className="mt-10 flex flex-wrap gap-3">
                                        <Button
                                             asChild
                                             size="lg"
                                             className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                                        >
                                             <Link href="#registration-form">
                                                  Reserve my seat
                                                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-45" />
                                             </Link>
                                        </Button>
                                        <Button
                                             asChild
                                             size="lg"
                                             variant="outline"
                                             className="rounded-full border-border bg-background"
                                        >
                                             <Link href="#agenda">
                                                  View agenda
                                             </Link>
                                        </Button>
                                   </div>
                              </div>

                              {/* Event meta card */}
                              <aside className="lg:col-span-4">
                                   <div className="space-y-5 rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur md:p-7">
                                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                             /Event details
                                        </p>
                                        <div className="flex items-start gap-3">
                                             <CalendarDays className="mt-0.5 h-5 w-5 text-primary" />
                                             <div>
                                                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                                       When
                                                  </p>
                                                  <p className="font-display text-lg font-semibold tracking-tight">
                                                       {format(
                                                            EVENT_DETAILS.date,
                                                            "eeee, MMMM do",
                                                       )}
                                                  </p>
                                                  <p className="text-sm text-muted-foreground">
                                                       {format(
                                                            EVENT_DETAILS.date,
                                                            "h:mm a",
                                                       )}{" "}
                                                       CST
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                             <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                                             <div>
                                                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                                       Where
                                                  </p>
                                                  <p className="font-medium text-foreground">
                                                       {EVENT_DETAILS.venueName}
                                                  </p>
                                                  <p className="text-sm text-muted-foreground">
                                                       {
                                                            EVENT_DETAILS.venueAddress
                                                       }
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                             <Mic2 className="mt-0.5 h-5 w-5 text-primary" />
                                             <div>
                                                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                                       Hosted by
                                                  </p>
                                                  <p className="font-medium text-foreground">
                                                       Bildove Financial Team
                                                  </p>
                                                  <p className="text-sm text-muted-foreground">
                                                       8 strategists · 1 mission
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2 border-t border-border/60 pt-4 text-center">
                                             <div className="rounded-2xl border border-border/60 bg-background/60 p-3">
                                                  <p className="font-display text-xl font-semibold text-primary">
                                                       90m
                                                  </p>
                                                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                                                       Live
                                                  </p>
                                             </div>
                                             <div className="rounded-2xl border border-border/60 bg-background/60 p-3">
                                                  <p className="font-display text-xl font-semibold text-primary">
                                                       Q&amp;A
                                                  </p>
                                                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                                                       Open
                                                  </p>
                                             </div>
                                             <div className="rounded-2xl border border-border/60 bg-background/60 p-3">
                                                  <p className="font-display text-xl font-semibold text-primary">
                                                       $0
                                                  </p>
                                                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                                                       Cost
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </aside>
                         </div>
                    </div>
               </section>

               {/* PRESS STRIP */}
               <section className="relative isolate border-y border-border/60 bg-foreground py-10 text-background">
                    <div className="container mx-auto px-6">
                         <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-background/60 lg:text-left">
                              /As featured in
                         </p>
                         <div className="grid grid-cols-3 items-center gap-8 md:grid-cols-6">
                              {PRESS_LOGOS.map((logo) => (
                                   <div
                                        key={logo.src}
                                        className="relative h-10 w-full opacity-60 transition-opacity hover:opacity-100"
                                   >
                                        <Image
                                             src={logo.src}
                                             alt={logo.alt}
                                             fill
                                             sizes="160px"
                                             className="object-contain brightness-0 invert"
                                        />
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* AGENDA / BENEFITS */}
               <section id="agenda" className="relative isolate py-20 md:py-28">
                    <div className="container mx-auto px-6">
                         <div className="mb-14 grid items-end gap-10 lg:grid-cols-12">
                              <div className="lg:col-span-7">
                                   <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                                        /What you&apos;ll learn
                                   </p>
                                   <h2 className="text-balance font-display text-4xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-6xl">
                                        Six lessons.
                                        <br />
                                        <em className="not-italic text-primary">
                                             One free hour.
                                        </em>
                                   </h2>
                              </div>
                              <div className="lg:col-span-5">
                                   <p className="text-pretty leading-relaxed text-muted-foreground">
                                        Education leads to confidence.
                                        Confidence leads to peace of mind.
                                        We&apos;ve packed the most-asked
                                        questions from a decade of client work
                                        into one focused workshop.
                                   </p>
                              </div>
                         </div>

                         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                              {BENEFITS.map(
                                   ({ n, icon: Icon, title, body }) => (
                                        <article
                                             key={n}
                                             className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-lg"
                                        >
                                             <div
                                                  aria-hidden
                                                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:bg-primary/10"
                                             />
                                             <div className="mb-6 flex items-center justify-between">
                                                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                                                       <Icon className="h-5 w-5" />
                                                  </div>
                                                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                                       /{n}
                                                  </span>
                                             </div>
                                             <h3 className="text-balance font-display text-xl font-semibold tracking-tight">
                                                  {title}
                                             </h3>
                                             <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                                                  {body}
                                             </p>
                                        </article>
                                   ),
                              )}
                         </div>
                    </div>
               </section>

               {/* TOPICS */}
               <section className="relative isolate overflow-hidden bg-foreground py-20 text-background md:py-28">
                    <div
                         aria-hidden
                         className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(hsl(var(--background))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--background))_1px,transparent_1px)] [background-size:64px_64px]"
                    />
                    <div
                         aria-hidden
                         className="absolute -top-32 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
                    />

                    <div className="container mx-auto px-6">
                         <div className="mb-12 grid items-end gap-10 lg:grid-cols-12">
                              <div className="lg:col-span-7">
                                   <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                                        /Topics covered
                                   </p>
                                   <h2 className="text-balance font-display text-4xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-6xl">
                                        Everything we
                                        <br />
                                        wish someone{" "}
                                        <em className="not-italic text-primary">
                                             told us.
                                        </em>
                                   </h2>
                              </div>
                              <div className="lg:col-span-5">
                                   <p className="text-pretty leading-relaxed text-background/70">
                                        A pragmatic curriculum drawn from the
                                        questions clients ask most often —
                                        covering the full lifecycle of a
                                        debt-free, wealth-building household.
                                   </p>
                              </div>
                         </div>

                         <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                              {TOPICS.map((topic, i) => (
                                   <li
                                        key={topic}
                                        className="flex items-start gap-3 rounded-2xl border border-background/15 bg-background/5 px-5 py-4 backdrop-blur transition-colors hover:bg-background/10"
                                   >
                                        <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                                             /{String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-sm leading-snug">
                                             {topic}
                                        </span>
                                   </li>
                              ))}
                         </ul>
                    </div>
               </section>

               {/* HOSTS */}
               <section className="relative isolate py-20 md:py-28">
                    <div className="container mx-auto px-6">
                         <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                              <div className="lg:col-span-5">
                                   <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                                        <Users className="h-3 w-3" />
                                        /Meet your hosts
                                   </span>
                                   <h2 className="text-balance font-display text-4xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-6xl">
                                        Team{" "}
                                        <em className="not-italic text-primary">
                                             Bildove.
                                        </em>
                                   </h2>
                                   <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                                        A dedicated team of financial experts
                                        committed to tailored solutions for
                                        individuals, families, businesses, and
                                        groups. Our core belief — &quot;no
                                        family member left behind&quot; —
                                        extends to every client.
                                   </p>
                                   <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                                        Whether you&apos;re an individual
                                        securing your future, a family building
                                        a foundation, or a business owner
                                        looking for growth strategies, Team
                                        Bildove is your trusted partner.
                                   </p>
                                   <div className="mt-8">
                                        <Button
                                             asChild
                                             size="lg"
                                             className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                                        >
                                             <Link href="#registration-form">
                                                  Reserve my seat
                                                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-45" />
                                             </Link>
                                        </Button>
                                   </div>
                              </div>

                              <div className="lg:col-span-7">
                                   <div className="rounded-3xl border border-border/60 bg-card/80 p-7 backdrop-blur md:p-10">
                                        <div className="flex flex-col items-center gap-2">
                                             <ImageList
                                                  data={EVENT_DETAILS.hosts[0]}
                                             />
                                             <ImageList
                                                  data={EVENT_DETAILS.hosts[1]}
                                             />
                                             <ImageList
                                                  data={EVENT_DETAILS.hosts[2]}
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* REGISTRATION */}
               <section
                    id="registration-form"
                    className="relative isolate scroll-mt-24 overflow-hidden py-20 md:py-28"
               >
                    <div className="gradient-mesh absolute inset-0 -z-10" />
                    <div
                         aria-hidden
                         className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]"
                    />
                    <div
                         aria-hidden
                         className="absolute -right-24 -top-32 -z-10 h-[460px] w-[460px] rounded-full bg-accent/25 blur-3xl"
                    />

                    <div className="container mx-auto px-6">
                         <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
                              <div className="lg:sticky lg:top-28 lg:col-span-6">
                                   <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                                        /Register · It&apos;s free
                                   </p>
                                   <h2 className="text-balance font-display text-4xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-6xl">
                                        Save your
                                        <br />
                                        <em className="gradient-text not-italic">
                                             seat.
                                        </em>
                                   </h2>
                                   <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                                        Limited seats. We&apos;ll send your
                                        confirmation, the venue map, and a
                                        calendar invite the moment you register.
                                   </p>

                                   <ul className="mt-8 space-y-3">
                                        {[
                                             "Free admission · no upsell",
                                             "Live Q&A with the full team",
                                             "Workbook & resource pack included",
                                        ].map((perk) => (
                                             <li
                                                  key={perk}
                                                  className="flex items-center gap-3 text-sm text-foreground/90"
                                             >
                                                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                                                  {perk}
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              <div className="lg:col-span-6">
                                   <div className="rounded-3xl border border-border/60 bg-card/95 p-6 shadow-xl backdrop-blur md:p-8">
                                        <EventForm />
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     );
}
