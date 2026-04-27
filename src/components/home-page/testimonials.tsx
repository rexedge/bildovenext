/** @format */

"use client";
import { TESTIMONIES } from "@/utils/const";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28 bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,theme(colors.primary/10),transparent_55%)]" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary mb-4">
            What our clients say
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-balance">
            Stories of financial confidence
          </h2>
          <p className="mt-4 text-muted-foreground text-balance">
            Real experiences from individuals and families we&apos;ve helped
            protect, plan, and prosper.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIES.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/15" />
              <div className="flex gap-1 text-amber-500 mb-4">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star key={n} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm md:text-base text-card-foreground/85 leading-relaxed flex-1">
                {t.description}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-border/50">
                <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-primary/20">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="font-semibold text-card-foreground">
                    {t.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Verified Client
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
