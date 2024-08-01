import React from "react";
import Image from "next/image";
import { COMPANY_PROFILE } from "@/utils/const";
import { Button } from "./button";
import Link from "next/link";

interface HeroSectionProps {
     title: string;
     description: string;
     image: string;
}

const Hero: React.FC<HeroSectionProps> = ({ title, description, image }) => {
     return (
          <div className="relative h-96 bg-gray-900 pb-16 text-white">
               <div className="absolute inset-0 h-full w-full">
                    <Image
                         src={image}
                         alt="Hero Image"
                         height={1080}
                         width={1080}
                         className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black opacity-50" />
               </div>
               <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-4 text-center">
                    <h1 className="mb-2 text-4xl font-bold">{title}</h1>
                    <p className="mx-auto mb-8 max-w-xl text-lg">
                         {description}
                    </p>
                    <Button className="shrink-0 cursor-pointer rounded-lg bg-teal-200 px-4 py-2 text-sm text-black hover:bg-teal-400">
                         <Link href={COMPANY_PROFILE.calendly}></Link>
                         Get Started
                    </Button>
               </div>
          </div>
     );
};

export default Hero;
