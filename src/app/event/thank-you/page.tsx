/** @format */

import { Button } from "@/components/ui/button";
import { COMPANY_PROFILE } from "@/utils/const";
import {
     ArrowUpRight,
     CalendarPlus,
     CheckCircle2,
     GraduationCap,
     Lightbulb,
     Mail,
     PartyPopper,
     ShieldCheck,
     Sparkles,
     TrendingUp,
     Wallet,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
     title: "You're in! · Workshop registered",
     description:
          "Thanks for registering for the Bildove Financial workshop. Here's what to expect next.",
};

const BENEFITS = [
     {
          n: "01",
          icon: Wallet,
          title: "Eliminate debt — for good",
          body: "Practical, personalised plans that move you toward financial freedom.",
     },
     {
          n: "02",
          icon: GraduationCap,
          title: "Set up the next generation",
          body: "Credit-building strategies for your teens and first-time builders.",
     },
     {
          n: "03",
          icon: ShieldCheck,
          title: "A foundation that holds",
          body: "Sustainable budgeting, an emergency fund, and confident investing.",
     },
     {
          n: "04",
          icon: TrendingUp,
          title: "Tax-free Social Security",
          body: "Receive up to 100% of your Social Security benefits tax-free.",
     },
     {
          n: "05",
          icon: Lightbulb,
          title: "An abundance mindset",
          body: "Shift from scarcity to abundance and attract real wealth.",
     },
     {
          n: "06",
          icon: Sparkles,
          title: "A retirement worth having",
          body: "Lay the foundation for the dream retirement you actually want.",
     },
];

const NEXT_STEPS = [
     {
          n: "01",
          icon: Mail,
          title: "Check your inbox",
          body: "We just sent your confirmation, the venue map, and a calendar invite.",
     },
     {
          n: "02",
          icon: CalendarPlus,
          title: "Block the time",
          body: "Add the workshop to your calendar so nothing slips on event day.",
     },
     {
          n: "03",
          icon: PartyPopper,
          title: "Bring a friend",
          body: "Forward your confirmation — every guest is one more family freed.",
     },
];

export default function ThankYouPage() {
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
                         <div className="max-w-4xl">
                              <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                                   <CheckCircle2 className="h-3 w-3" />
                                   /Registered · You&apos;re in
                              </span>
                              <h1 className="text-balance font-display text-[14vw] font-semibold leading-[0.9] tracking-[-0.04em] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5rem]">
                                   Thank
                                   <br />
                                   <em className="gradient-text not-italic">
                                        you.
                                   </em>
                              </h1>
                              <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                                   Your seat at the workshop is confirmed.
                                   We&apos;re glad you&apos;re here — and we
                                   can&apos;t wait to walk you through the path
                                   to financial freedom.
                              </p>

                              <div className="mt-10 flex flex-wrap gap-3">
                                   <Button
                                        asChild
                                        size="lg"
                                        className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                                   >
                                        <Link href="/">
                                             Back to home
                                             <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-45" />
                                        </Link>
                                   </Button>
                                   <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full border-border bg-background"
                                   >
                                        <Link href="/event/how-to-be-debt-free">
                                             Event details
                                        </Link>
                                   </Button>
                              </div>
                         </div>
                    </div>
               </section>

               {/* NEXT STEPS */}
               <section className="relative isolate py-16 md:py-24">
                    <div className="container mx-auto px-6">
                         <div className="mb-12 grid items-end gap-10 lg:grid-cols-12">
                              <div className="lg:col-span-7">
                                   <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                                        /What happens next
                                   </p>
                                   <h2 className="text-balance font-display text-4xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-6xl">
                                        Three small things
                                        <br />
                                        <em className="not-italic text-primary">
                                             before event day.
                                        </em>
                                   </h2>
                              </div>
                              <div className="lg:col-span-5">
                                   <p className="text-pretty leading-relaxed text-muted-foreground">
                                        A quick checklist so the live workshop
                                        lands smoothly in your week.
                                   </p>
                              </div>
                         </div>

                         <div className="grid gap-5 md:grid-cols-3">
                              {NEXT_STEPS.map(
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

               {/* WHAT YOU'LL LEARN */}
               <section className="relative isolate overflow-hidden bg-foreground py-20 text-background md:py-28">
                    <div
                         aria-hidden
                         className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(hsl(var(--background))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--background))_1px,transparent_1px)] [background-size:64px_64px]"
                    />
                    <div
                         aria-hidden
                         className="absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
                    />

                    <div className="container mx-auto px-6">
                         <div className="mb-14 grid items-end gap-10 lg:grid-cols-12">
                              <div className="lg:col-span-7">
                                   <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                                        /What you&apos;ll walk away with
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
                                   <p className="text-pretty leading-relaxed text-background/70">
                                        Here&apos;s what we&apos;ll cover live.
                                        Come with questions — we&apos;ll keep
                                        the Q&A open until they&apos;re all
                                        answered.
                                   </p>
                              </div>
                         </div>

                         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                              {BENEFITS.map(
                                   ({ n, icon: Icon, title, body }) => (
                                        <article
                                             key={n}
                                             className="group relative overflow-hidden rounded-3xl border border-background/15 bg-background/5 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:bg-background/10"
                                        >
                                             <div className="mb-6 flex items-center justify-between">
                                                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                                                       <Icon className="h-5 w-5" />
                                                  </div>
                                                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-background/60">
                                                       /{n}
                                                  </span>
                                             </div>
                                             <h3 className="text-balance font-display text-xl font-semibold tracking-tight">
                                                  {title}
                                             </h3>
                                             <p className="mt-3 text-pretty text-sm leading-relaxed text-background/70">
                                                  {body}
                                             </p>
                                        </article>
                                   ),
                              )}
                         </div>
                    </div>
               </section>

               {/* FOOTER CTA */}
               <section className="relative isolate py-16 md:py-24">
                    <div className="container mx-auto px-6">
                         <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card/80 p-10 text-center backdrop-blur md:p-14">
                              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                                   /Need anything?
                              </p>
                              <h2 className="text-balance font-display text-3xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-5xl">
                                   We&apos;re a{" "}
                                   <em className="not-italic text-primary">
                                        message
                                   </em>{" "}
                                   away.
                              </h2>
                              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                                   Questions about the workshop, the venue, or
                                   bringing a guest? Reach out — we answer fast.
                              </p>
                              <div className="mt-8 flex flex-wrap justify-center gap-3">
                                   <Button
                                        asChild
                                        size="lg"
                                        className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                                   >
                                        <a
                                             href={`mailto:${COMPANY_PROFILE.email}`}
                                        >
                                             Email us
                                             <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-45" />
                                        </a>
                                   </Button>
                                   <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full border-border bg-background"
                                   >
                                        <Link href="/contact">
                                             Contact page
                                        </Link>
                                   </Button>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     );
}
