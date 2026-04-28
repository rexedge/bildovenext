import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ReactNode } from "react";

interface HeroSectionProps {
     image: string;
     children: ReactNode;
     className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
     image,
     children,
     className,
}) => {
     return (
          <div
               className={cn(
                    "relative min-h-[calc(120svh-68px)] bg-teal-900 pb-16 text-white lg:min-h-[100svh] xl:min-h-[80svh]",
                    className,
               )}
          >
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
