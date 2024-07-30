import Image from "next/image";
import React, { ReactNode } from "react";

interface HeroSectionProps {
     image: string;
     children: ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ image, children }) => {
     return (
          <div className="relative min-h-[calc(100svh-68px)] bg-teal-900 pb-16 text-white lg:min-h-[70svh]">
               <div className="absolute inset-0 h-full w-full">
                    <Image
                         src={image}
                         alt="Hero Image"
                         height={2160}
                         width={2160}
                         className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-teal-900 opacity-80" />
               </div>
               <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform px-4 py-4">
                    {children}
               </div>
          </div>
     );
};

export default HeroSection;
