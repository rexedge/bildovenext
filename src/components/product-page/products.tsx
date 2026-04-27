"use client";

import { PRODUCTS } from "@/utils/const";
import { motion } from "framer-motion";
import { ArrowUpRight, Package, Sparkles } from "lucide-react";

interface ProductItem {
  title: string;
  description: string;
}

export default function ProductList() {
  const items = PRODUCTS as ProductItem[];
  if (!items.length) return null;
  const [hero, ...rest] = items;

  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32 bg-muted/40">
      <div
        aria-hidden
        className="absolute -top-24 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-y-10 items-end mb-16">
          <div className="col-span-12 lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-6">
              <Package className="h-3 w-3" />
              Our products
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance">
              Built around <span className="italic text-accent">real-life</span>{" "}
              needs.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="group col-span-12 lg:col-span-7 relative isolate overflow-hidden rounded-[2rem] bg-foreground text-background p-10 md:p-14 min-h-[420px] flex flex-col justify-between"
          >
            <div
              aria-hidden
              className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl"
            />
            <div className="relative flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/60">
                /01 &middot; Featured
              </span>
              <ArrowUpRight className="h-6 w-6 text-background/60 group-hover:text-accent group-hover:rotate-12 transition-all" />
            </div>
            <div className="relative">
              <Sparkles className="h-6 w-6 text-accent mb-6" />
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance mb-5">
                {hero.title}
              </h3>
              <p className="max-w-xl text-background/75 text-base md:text-lg leading-relaxed text-pretty">
                {hero.description}
              </p>
            </div>
          </motion.article>

          <div className="col-span-12 lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {rest.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group relative isolate overflow-hidden rounded-[1.5rem] border border-border/60 bg-card p-6 md:p-7 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    /{String(i + 2).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition-all" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight tracking-tight text-balance mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  {p.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
