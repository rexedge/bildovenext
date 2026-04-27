"use client";

import { COMPANY_PROFILE } from "@/utils/const";
import { motion } from "framer-motion";
import { Compass, Target } from "lucide-react";

export default function VisionAndMission() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32 bg-background">
      <div
        aria-hidden
        className="absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-y-10 gap-x-8 items-end mb-16">
          <div className="col-span-12 lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Why we exist
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance">
              The compass and{" "}
              <span className="italic text-primary">the map.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {COMPANY_PROFILE.name} exists at the intersection of strategy and
              empathy &mdash; we point the direction, then walk the road
              alongside you.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              n: "01",
              tag: "Vision",
              icon: Compass,
              title: "A world of confident wealth-builders.",
              body: `At ${COMPANY_PROFILE.name}, we envision a world where every individual and family has the knowledge, tools, and confidence to take control of their financial future. We strive to be a trusted partner, empowering clients to achieve lasting financial security and prosperity.`,
              tone: "primary" as const,
            },
            {
              n: "02",
              tag: "Mission",
              icon: Target,
              title:
                "Empower through education, tailored solutions, unwavering support.",
              body: `Our mission is to empower individuals and families to achieve financial freedom through comprehensive education, tailored solutions, and unwavering support — delivered with the highest level of expertise and integrity.`,
              tone: "accent" as const,
            },
          ].map((card, i) => {
            const Icon = card.icon;
            const accent = card.tone === "primary" ? "primary" : "accent";
            return (
              <motion.article
                key={card.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative isolate overflow-hidden rounded-[2rem] border border-border/60 bg-card p-8 md:p-10 hover:shadow-2xl transition-all"
              >
                <div
                  aria-hidden
                  className={`absolute -top-10 -right-10 h-48 w-48 rounded-full ${accent === "primary" ? "bg-primary/10" : "bg-accent/10"} blur-2xl`}
                />
                <div
                  className={`absolute right-6 top-6 font-display text-[7rem] leading-none font-semibold tracking-tighter ${accent === "primary" ? "text-primary/10" : "text-accent/15"} select-none pointer-events-none`}
                >
                  {card.n}
                </div>
                <div
                  className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accent === "primary" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"} shadow-lg mb-6`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <p
                  className={`text-[11px] font-mono uppercase tracking-[0.25em] mb-3 ${accent === "primary" ? "text-primary" : "text-accent"}`}
                >
                  {card.tag}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-balance mb-4">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {card.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
