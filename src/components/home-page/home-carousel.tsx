/** @format */

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { CAROUSEL_IMAGES, COMPANY_PROFILE } from "@/utils/const";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

export default function BCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full h-[100svh] overflow-clip"
    >
      <CarouselContent>
        {CAROUSEL_IMAGES.map((a, i) => (
          <CarouselItem key={i}>
            <div className="relative w-full h-full">
              <Image
                src={a.src}
                alt={a.alt}
                className="w-full object-cover"
                style={{
                  height: "100%",
                  maxWidth: "100%",
                }}
                height={900}
                width={1600}
              />
              <div className="absolute flex items-center justify-center bottom-0 top-0 right-0 left-0 z-30 p-4 text-white">
                <div className="absolute z-10 left-0 right-0 top-0 bottom-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center max-w-3xl">
                    {a.title && (
                      <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl mb-3 md:mb-6 lg:mb-9">
                        {a.title}
                      </h1>
                    )}
                    {a.description && (
                      <p className="mb-3 md:mb-6 lg:mb-9 md:text-xl lg:text-2xl">
                        {a.description}
                      </p>
                    )}
                    {a.buttonText && (
                      <Button className="shrink-0 text-sm py-2 px-4  bg-teal-500 text-white  hover:bg-teal-400  rounded-lg cursor-pointer">
                        <Link href={COMPANY_PROFILE.calendly}></Link>
                        {a.buttonText}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
