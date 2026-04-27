"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, Lightbulb } from "lucide-react";

const VALUES = [
  {
    icon: DollarSign,
    word: "Integrity",
    title: "Honest, transparent, and on your side.",
    description:
      "We act with honesty and transparency, putting your interests first in every recommendation we make.",
  },
  {
    icon: Users,
    word: "Client-first",
    title: "Your goals shape our strategies.",
    description:
      "We listen, adapt, and partner with you for the long term — not for the next transaction.",
  },
  {
    icon: Lightbulb,
    word: "Empowerment",
    title: "We demystify finance.",
    description:
      "So you can make informed decisions with clarity, confidence, and a calm mind.",
  },
];

export default function Values() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32 bg-background">
      <div
        aria-hidden
        className="absolute top-1/3 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl"
      />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-y-10 mb-16 items-end">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Our values
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance">
              What guides every{" "}
              <span className="italic text-primary">decision.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.article
                key={v.word}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative isolate overflow-hidden rounded-[1.75rem] border border-border/60 bg-card p-8 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent mb-2">
                  /0{i + 1} &middot; {v.word}
                </p>
                <h3 className="font-display text-2xl md:text-[1.6rem] font-semibold leading-tight mb-3 text-balance">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  {v.description}
                </p>
                <div
                  aria-hidden
                  className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
