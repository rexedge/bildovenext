"use client";

import { COMPANY_PROFILE } from "@/utils/const";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
  eyebrow?: string;
}

const Hero: React.FC<HeroSectionProps> = ({
  title,
  description,
  image,
  eyebrow,
}) => {
  // Italicize the last word for an editorial accent.
  const words = title.trim().split(/\s+/);
  const lead = words.slice(0, Math.max(words.length - 1, 1)).join(" ");
  const tail = words.length > 1 ? words[words.length - 1] : "";

  return (
    <section className="relative isolate overflow-hidden pt-12 md:pt-20 pb-24 md:pb-36">
      <div className="absolute inset-0 -z-10 gradient-mesh" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 -z-10 h-[460px] w-[460px] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-1/2 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl"
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
              <span className="relative h-2 w-2 rounded-full bg-primary" />
            </span>
            {eyebrow ?? COMPANY_PROFILE.name}
          </span>
          <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3 text-accent" />
            Licensed in 50 states + USVI
          </span>
        </motion.div>

        <div className="grid grid-cols-12 gap-x-8 gap-y-12 items-end">
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display font-semibold tracking-[-0.04em] leading-[0.92] text-balance text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5rem] xl:text-[8.5rem]"
            >
              {lead}
              {tail && (
                <>
                  {" "}
                  <span className="relative inline-block italic">
                    <span className="relative z-10 text-primary">{tail}</span>
                    <svg
                      aria-hidden
                      viewBox="0 0 300 24"
                      className="absolute -bottom-2 left-0 w-full h-3 text-accent"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 18 C 80 4, 160 22, 298 8"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </>
              )}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground text-pretty leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-full px-7"
              >
                <Link
                  href={COMPANY_PROFILE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Book a free consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-full px-6 hover:bg-foreground/5"
              >
                <Link href="/services">
                  Explore services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 xl:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[2rem] overflow-hidden ring-1 ring-border/60 shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-5 -right-5 rotate-[8deg] rounded-2xl bg-accent text-accent-foreground px-4 py-3 shadow-xl">
              <p className="font-display text-2xl font-bold leading-none">
                100%
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] mt-1">
                No cost
              </p>
            </div>
            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-2xl glass-strong px-4 py-3 shadow-xl">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Trusted by families
                </p>
                <p className="text-sm font-semibold">in all 50 states</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
