/** @format */

"use client";

import ContactUs from "@/components/home-page/contact-us";
import { Button } from "@/components/ui/button";
import {
  COMPANY_PROFILE,
  INTRO_TEXT,
  SERVICES,
  TESTIMONIES,
  WELCOME_TEXT,
  WHY_CHOOSE_US,
} from "@/utils/const";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const STATS = [
  { value: "50", suffix: "States", label: "Licensed nationwide" },
  { value: "10+", suffix: "Years", label: "Of combined expertise" },
  { value: "100%", suffix: "Free", label: "Financial literacy" },
  { value: "24/7", suffix: "Support", label: "When life happens" },
];

const MARQUEE_WORDS = [
  "Income Protection",
  "Legacy Planning",
  "Tax Advantages",
  "Cash Flow",
  "College Savings",
  "Long-Term Care",
  "Passive Income",
  "Asset Protection",
];

const FEATURED = TESTIMONIES[0];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-background">
      {/* ===== HERO ===== */}
      <section className="relative isolate pt-10 md:pt-16 pb-24 md:pb-36">
        <div className="absolute inset-0 -z-10 gradient-mesh" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]"
        />
        <div
          aria-hidden
          className="absolute -top-24 -right-24 -z-10 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute top-1/3 -left-32 -z-10 h-[360px] w-[360px] rounded-full bg-primary/25 blur-3xl"
        />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              Now booking 2026 consultations
            </span>
            <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Licensed in all 50 states · DC · USVI
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-display text-[10vw] sm:text-5xl lg:text-[5rem] leading-[0.92] tracking-[-0.04em] text-balance"
              >
                Money, <em className="not-italic gradient-text">re-imagined</em>{" "}
                <br className="hidden md:block" />
                for the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">families</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 md:h-5 bg-accent/40"
                  />
                </span>{" "}
                building America.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                {COMPANY_PROFILE.name} pairs licensed advisors with everyday
                people to protect income, build legacy, and unlock the kind of
                long-term freedom money is supposed to buy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-7 rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-[0_18px_40px_-18px_hsl(var(--foreground)/0.6)] text-base"
                >
                  <Link
                    href={COMPANY_PROFILE.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a free strategy call
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-14 px-6 rounded-full text-base hover:bg-primary/10"
                >
                  <Link href="/services">
                    Explore the playbook
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-10 flex items-center gap-4"
              >
                <div className="flex -space-x-3">
                  {[
                    FEATURED.image,
                    TESTIMONIES[1].image,
                    TESTIMONIES[2].image,
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="relative h-10 w-10 rounded-full border-2 border-background overflow-hidden ring-1 ring-border"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Trusted by families from Columbia, SC → coast to coast
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-border/60 shadow-2xl">
                  <Image
                    src="/homepage.jpg"
                    alt="Family planning their financial future"
                    fill
                    sizes="(max-width:1024px) 90vw, 40vw"
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                </div>

                <div className="absolute -top-6 -left-6 hidden md:flex h-28 w-28 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl rotate-[-12deg]">
                  <div className="text-center leading-none">
                    <div className="font-display text-3xl font-bold">100%</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] mt-1">
                      No Cost
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="absolute -bottom-8 -right-4 md:-right-10 w-64 rounded-2xl bg-background border border-border shadow-2xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Coverage live
                      </p>
                      <p className="font-display text-base font-semibold leading-tight">
                        Mortgage protected in 14 days
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        — for the Johnson family, Atlanta
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute top-10 -right-6 hidden lg:flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-xs font-medium shadow-lg">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Cash flow up 23%
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 border-y border-border/60 bg-secondary/50 text-foreground overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-5">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map(
              (w, i) => (
                <span
                  key={i}
                  className="font-display text-3xl md:text-5xl font-medium px-8 flex items-center gap-8"
                >
                  {w}
                  <Sparkles className="h-5 w-5 text-accent" />
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background p-8 md:p-10 group hover:bg-primary/5 transition-colors"
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-6xl md:text-7xl font-semibold tracking-tight gradient-text">
                    {s.value}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.suffix}
                  </span>
                </div>
                <p className="mt-3 text-sm text-foreground/80">{s.label}</p>
                <ArrowDownRight className="mt-6 h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:rotate-[-90deg] transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO / EDITORIAL ===== */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-primary/10 border border-border/60">
                <Image
                  src={INTRO_TEXT.image}
                  alt={`${COMPANY_PROFILE.name} introduction`}
                  fill
                  sizes="(max-width:1024px) 90vw, 40vw"
                  className="object-contain p-8"
                />
              </div>
              <div className="absolute -top-8 -right-4 md:-right-10 font-display text-[10rem] md:text-[14rem] leading-none font-bold text-primary/10 select-none pointer-events-none">
                01
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                  / Welcome
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1] text-balance">
                The financial world{" "}
                <em className="not-italic text-primary">shouldn&apos;t</em> feel
                like a maze.
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {WELCOME_TEXT}
              </p>
              <p className="mt-5 text-base text-foreground/80 leading-relaxed max-w-2xl">
                {INTRO_TEXT.description}
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  "Licensed in all 50 states",
                  "No-cost financial literacy",
                  "Tailored to your goals",
                  "Family-first philosophy",
                ].map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-3 rounded-full border border-border/60 bg-card px-4 py-2.5 text-sm"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <ShieldCheck className="h-3 w-3" />
                    </span>
                    {c}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  <Link href="/about">
                    The full story
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US — BENTO ===== */}
      <section className="relative py-24 md:py-32 bg-secondary/50 text-foreground overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(hsl(var(--foreground))_1px,transparent_1px)] [background-size:24px_24px]"
        />
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/20 blur-3xl"
        />
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                / Why {COMPANY_PROFILE.name}
              </span>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance max-w-3xl">
                Three pillars. <br />
                One unwavering promise.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground text-base">
              We don&apos;t sell products. We build the long, quiet kind of
              wealth that survives bad years and outlives generations.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4 md:row-span-2 group relative rounded-3xl border border-border/60 bg-card/40 p-8 md:p-12 hover:bg-card/60 transition-colors overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl group-hover:bg-primary/40 transition-colors" />
              <div className="relative">
                <div className="font-display text-7xl md:text-9xl font-bold text-primary leading-none">
                  01
                </div>
                <h3 className="mt-8 font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-md">
                  {WHY_CHOOSE_US[0].title}
                </h3>
                <p className="mt-5 text-muted-foreground max-w-lg leading-relaxed">
                  {WHY_CHOOSE_US[0].description}
                </p>
                <div className="mt-10 flex items-center gap-2 text-sm text-primary group-hover:gap-4 transition-all">
                  Meet our advisors <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>

            {[WHY_CHOOSE_US[1], WHY_CHOOSE_US[2]].map((w, i) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="md:col-span-2 group relative rounded-3xl border border-border/60 bg-card/40 p-8 hover:bg-card/60 transition-colors"
              >
                <div className="font-display text-4xl font-bold text-primary leading-none">
                  0{i + 2}
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {w.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                / The playbook
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1] text-balance">
                Ten plays that move{" "}
                <em className="not-italic gradient-text">real money</em>.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-12">
              <p className="text-muted-foreground leading-relaxed">
                From your first paycheck to your final estate plan — the{" "}
                {COMPANY_PROFILE.name} library covers every chapter of building
                durable wealth.
              </p>
              <Button
                asChild
                variant="link"
                className="mt-4 px-0 text-foreground"
              >
                <Link href="/services">
                  See all 10 services
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {SERVICES.slice(0, 6).map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-background p-7 md:p-8 group hover:bg-primary/5 transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-muted-foreground">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED TESTIMONIAL ===== */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-secondary/50">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 gradient-mesh opacity-60"
        />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-border shadow-2xl">
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.title}
                  fill
                  sizes="(max-width:1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="font-display text-2xl font-semibold text-background">
                    {FEATURED.title}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 relative"
            >
              <Quote
                className="absolute -top-6 -left-2 h-24 w-24 text-primary/15"
                strokeWidth={1}
              />
              <p className="relative font-display text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-[-0.02em] text-balance">
                {FEATURED.description.replace(/^"|"$/g, "")}
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <Link
                  href="/testimonials"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  More client stories
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-24 md:py-32 bg-secondary/50 text-foreground overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl"
        />
        <div className="container mx-auto px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/80 mb-8">
              <CalendarCheck className="h-3 w-3" />
              30-minute strategy call · No cost · No pressure
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance max-w-4xl mx-auto">
              Your future is{" "}
              <em className="not-italic text-primary">already</em> happening.
              <br />
              Let&apos;s shape it.
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-muted-foreground text-lg">
              Sit down with a licensed advisor who actually listens. Walk away
              with a plan that fits your real life.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 rounded-full bg-foreground text-background hover:bg-background/90 text-base shadow-2xl"
              >
                <Link
                  href={COMPANY_PROFILE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule on Calendly
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-14 px-7 rounded-full text-foreground hover:bg-foreground/10 hover:text-foreground text-base"
              >
                <Link href={`tel:${COMPANY_PROFILE.phone}`}>
                  Or call {COMPANY_PROFILE.phone}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactUs />
    </main>
  );
}
