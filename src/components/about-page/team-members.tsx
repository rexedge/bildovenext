"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  photo: string;
  age?: number;
}

export default function Team({ teamMembers }: { teamMembers: TeamMember[] }) {
  if (!teamMembers?.length) return null;
  const [first, ...rest] = teamMembers;

  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32 bg-muted/40">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-y-10 items-end mb-16">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              The team
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance">
              The people behind{" "}
              <span className="italic text-primary">your peace of mind.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Click any portrait to read the full bio. Real humans, real
              experience, ready to talk.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="col-span-12 lg:col-span-7 group relative text-left rounded-[2rem] overflow-hidden border border-border/60 bg-card hover:shadow-2xl transition-all"
              >
                <div className="relative aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5] overflow-hidden">
                  <Image
                    src={first.photo}
                    alt={first.name}
                    fill
                    sizes="(max-width:1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-background">
                    <span className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 backdrop-blur px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] mb-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Lead advisor
                    </span>
                    <h3 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-balance leading-tight">
                      {first.name}
                    </h3>
                    <p className="mt-2 text-background/85">{first.position}</p>
                  </div>
                </div>
              </motion.button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">
                  {first.name}
                </DialogTitle>
                <DialogDescription className="text-primary">
                  {first.position}
                </DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={first.photo}
                  alt={first.name}
                  fill
                  sizes="(max-width:640px) 100vw, 512px"
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {first.bio}
              </p>
            </DialogContent>
          </Dialog>

          <div className="col-span-12 lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {rest.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="group relative w-full text-left rounded-[1.5rem] border border-border/60 bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                      <div className="flex">
                        <div className="relative w-1/2 aspect-square overflow-hidden">
                          <Image
                            src={m.photo}
                            alt={m.name}
                            fill
                            sizes="(max-width:768px) 50vw, 25vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 p-5 flex flex-col justify-between">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
                              /0{i + 2}
                            </p>
                            <h3 className="font-display text-xl font-semibold leading-tight">
                              {m.name}
                            </h3>
                            <p className="text-xs text-primary mt-1">
                              {m.position}
                            </p>
                          </div>
                          {m.age != null && (
                            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                              Age {m.age}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="font-display text-2xl">
                        {m.name}
                      </DialogTitle>
                      <DialogDescription className="text-primary">
                        {m.position}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        sizes="(max-width:640px) 100vw, 512px"
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {m.bio}
                    </p>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
