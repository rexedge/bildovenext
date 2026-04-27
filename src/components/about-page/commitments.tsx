"use client";

import { COMMITMENT_STATEMENTS } from "@/utils/const";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Commitment() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32 bg-background">
      <div
        aria-hidden
        className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-y-10 items-end mb-16">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-6">
              <ShieldCheck className="h-3 w-3" />
              Our commitments
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance">
              Promises we <span className="italic text-accent">live by.</span>
            </h2>
          </div>
        </div>

        <ol className="space-y-2">
          {COMMITMENT_STATEMENTS.map((statement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative grid grid-cols-12 gap-6 items-start rounded-3xl border border-transparent hover:border-border/60 hover:bg-card px-4 md:px-8 py-7 md:py-9 transition-all"
            >
              <div className="col-span-3 md:col-span-2">
                <p className="font-display text-5xl md:text-6xl font-semibold text-primary/80 group-hover:text-primary transition-colors leading-none tracking-tighter">
                  /{String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <p className="col-span-9 md:col-span-9 text-lg md:text-xl text-foreground/85 leading-snug text-pretty">
                {statement}
              </p>
              <div className="hidden md:flex col-span-1 justify-end">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ShieldCheck className="h-4 w-4" />
                </span>
              </div>
              <div
                aria-hidden
                className="col-span-12 h-px bg-border/60 group-hover:opacity-0 transition-opacity"
              />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
