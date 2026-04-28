/** @format */

"use client";
import { CAROUSEL_IMAGES, COMPANY_PROFILE } from "@/utils/const";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function BCarousel() {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[Autoplay({ delay: 6000, stopOnInteraction: false })]}
      className="relative w-full h-[100svh] overflow-clip"
    >
      <CarouselContent className="h-[100svh]">
        {CAROUSEL_IMAGES.map((a, i) => (
          <CarouselItem key={i} className="h-[100svh] basis-full">
            <div className="relative w-full h-[100svh]">
              <Image
                src={a.src}
                alt={a.alt}
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,theme(colors.primary/35),transparent_60%)]" />
              <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
                <div className="max-w-4xl text-center text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-wider mb-6"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    Trusted financial guidance
                  </motion.div>
                  {a.title && (
                    <motion.h1
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance mb-5"
                    >
                      {a.title}
                    </motion.h1>
                  )}
                  {a.description && (
                    <motion.p
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.25 }}
                      className="mx-auto max-w-2xl text-base md:text-lg lg:text-xl text-white/85 text-balance mb-9"
                    >
                      {a.description}
                    </motion.p>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                  >
                    {a.buttonText && (
                      <Button
                        asChild
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
                      >
                        <Link
                          href={COMPANY_PROFILE.calendly}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CalendarCheck className="mr-2 h-5 w-5" />
                          {a.buttonText}
                        </Link>
                      </Button>
                    )}
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
                    >
                      <Link href="/services">
                        Explore Services
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
