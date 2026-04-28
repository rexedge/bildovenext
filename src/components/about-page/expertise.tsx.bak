"use client";

import { motion } from "framer-motion";
import {
  FileText,
  DollarSign,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const ITEMS = [
  {
    icon: FileText,
    n: "01",
    title: "Experienced professionals",
    description:
      "A team of seasoned advisors who bring deep industry expertise and a passion for helping clients succeed.",
  },
  {
    icon: DollarSign,
    n: "02",
    title: "Holistic approach",
    description:
      "We pause to understand your full picture — situation, goals, aspirations — and design strategies that fit.",
  },
  {
    icon: GraduationCap,
    n: "03",
    title: "Continuous learning",
    description:
      "We stay ahead of trends and regulations so the advice you receive is always relevant and actionable.",
  },
];

export default function Expertise() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32 bg-foreground text-background">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(hsl(var(--background))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--background))_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden
        className="absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-y-10 mb-16 items-end">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-background/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Our expertise
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance">
              A foundation of{" "}
              <span className="italic text-accent">knowledge</span> & care.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="text-background/70 leading-relaxed text-pretty">
              Three pillars define how we work. Together they keep us honest,
              curious, and useful.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-background/10 rounded-3xl overflow-hidden border border-background/10">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-foreground p-8 md:p-10 hover:bg-background/[0.04] transition-colors"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-background/50">
                    /{item.n}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-background/40 group-hover:text-accent group-hover:rotate-12 transition-all" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight mb-3 text-balance">
                  {item.title}
                </h3>
                <p className="text-sm text-background/65 leading-relaxed text-pretty">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
