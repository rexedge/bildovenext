/** @format */

import { CAROUSEL_IMAGES, COMPANY_PROFILE } from "@/utils/const";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

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
               className="h-fit w-full overflow-clip"
          >
               <CarouselContent>
                    {CAROUSEL_IMAGES.map((a, i) => (
                         <CarouselItem key={i}>
                              <div className="relative h-full w-full">
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
                                   <div className="absolute bottom-0 left-0 right-0 top-0 z-30 flex items-center justify-center p-4 text-white">
                                        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-black bg-opacity-40">
                                             <div className="max-w-3xl text-center">
                                                  {a.title && (
                                                       <h1 className="mb-3 text-2xl font-bold md:mb-6 md:text-5xl lg:mb-9 lg:text-7xl">
                                                            {a.title}
                                                       </h1>
                                                  )}
                                                  {a.description && (
                                                       <p className="mb-3 md:mb-6 md:text-xl lg:mb-9 lg:text-2xl">
                                                            {a.description}
                                                       </p>
                                                  )}
                                                  {a.buttonText && (
                                                       <Button className="shrink-0 cursor-pointer rounded-lg bg-teal-500 px-4 py-2 text-sm text-white hover:bg-teal-400">
                                                            <Link
                                                                 href={
                                                                      COMPANY_PROFILE.calendly
                                                                 }
                                                            ></Link>
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
