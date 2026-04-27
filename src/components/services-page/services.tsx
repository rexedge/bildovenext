"use client";

import { COMPANY_PROFILE, SERVICES } from "@/utils/const";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface ServiceItem {
  title: string;
  description: string;
}

export default function ServiceList() {
  const items = SERVICES as ServiceItem[];
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32 bg-background">
      <div
        aria-hidden
        className="absolute -top-32 -left-24 -z-10 h-[460px] w-[460px] rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -right-32 -z-10 h-[460px] w-[460px] rounded-full bg-accent/15 blur-3xl"
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-y-10 items-end mb-16">
          <div className="col-span-12 lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent mb-6">
              <Sparkles className="h-3 w-3" />
              What we do
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance">
              Solutions tailored to{" "}
              <span className="italic text-primary">your goals.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {items.length} ways we help families build, protect, and pass on
              wealth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-px bg-border/60 rounded-3xl overflow-hidden border border-border/60">
          {items.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
              className="group relative col-span-12 sm:col-span-6 lg:col-span-4 bg-card p-7 md:p-8 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition-all" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight tracking-tight text-balance mb-3 min-h-[3.5rem]">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                {s.description}
              </p>
              <div
                aria-hidden
                className="absolute left-7 right-7 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-border/60 bg-card p-8 md:p-10">
          <div>
            <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-balance">
              Not sure which fits your moment?
            </p>
            <p className="text-muted-foreground mt-2">
              Book a free 30-minute consultation. No cost, no pressure.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 shadow-lg shadow-primary/20"
          >
            <Link
              href={COMPANY_PROFILE.calendly}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarCheck className="mr-2 h-5 w-5" />
              Schedule a call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
