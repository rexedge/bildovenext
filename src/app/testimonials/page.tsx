"use client";

import ContactUs from "@/components/home-page/contact-us";
import { TESTIMONIES } from "@/utils/const";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsPage() {
  if (!TESTIMONIES.length) return null;
  const [featured, ...rest] = TESTIMONIES;

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="absolute inset-0 -z-10 gradient-mesh" />
        <div
          aria-hidden
          className="absolute -top-32 -right-24 -z-10 h-[460px] w-[460px] rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute top-1/3 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl"
        />
        <div className="container mx-auto px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-8">
            <Star className="h-3 w-3 fill-current" />
            Real client stories
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold tracking-[-0.04em] leading-[0.92] text-balance text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[7rem]"
          >
            Hear from <span className="italic text-primary">satisfied</span>{" "}
            clients.
          </motion.h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
            We take pride in helping individuals and families achieve their
            financial goals. Don&apos;t take our word for it &mdash; hear
            directly from the people we&apos;ve served.
          </p>
        </div>
      </section>

      {/* Featured pull-quote */}
      <section className="relative isolate overflow-hidden py-16 md:py-24 bg-secondary/50 text-foreground">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]"
        />
        <div
          aria-hidden
          className="absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
        />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="col-span-12 md:col-span-5 lg:col-span-4 relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-background/20 shadow-2xl">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-5 -right-5 rotate-[-6deg] rounded-2xl bg-accent text-accent-foreground px-4 py-3 shadow-xl">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, n) => (
                    <Star key={n} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-[10px] uppercase tracking-[0.18em] mt-1 font-semibold">
                  5.0 rating
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6"
            >
              <Quote className="h-12 w-12 text-accent mb-6" />
              <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.05] text-balance">
                &ldquo;{featured.description}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border/60">
                <div>
                  <p className="font-display text-xl font-semibold">
                    {featured.title}
                  </p>
                  <p className="text-sm text-muted-foreground">Verified client</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid of remaining */}
      {rest.length > 0 && (
        <section className="relative py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-balance">
                More voices.
              </h2>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                /{String(rest.length).padStart(2, "0")} stories
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {rest.map((t, i) => (
                <motion.figure
                  key={t.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex flex-col rounded-[1.75rem] border border-border/60 bg-card p-8 hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Quote className="h-9 w-9 text-primary/30" />
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition-all" />
                  </div>
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {Array.from({ length: 5 }).map((_, n) => (
                      <Star key={n} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-base md:text-lg text-card-foreground/90 leading-relaxed flex-1 text-pretty">
                    {t.description}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3 pt-6 border-t border-border/50">
                    <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20">
                      <Image
                        src={t.image}
                        alt={t.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                    <div>
                      <p className="font-display font-semibold text-card-foreground">
                        {t.title}
                      </p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        Verified client
                      </p>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactUs />
    </main>
  );
}
