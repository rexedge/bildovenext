"use client";

import React, { useState } from "react";
import {
     AnimatePresence,
     motion,
     useMotionValue,
     useSpring,
     useTransform,
} from "framer-motion";
import Image from "next/image";

export default function ImageList({
     data,
}: {
     data: { image: string; name: string; designation: string }[];
}) {
     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
     const springConfig = { stiffness: 100, damping: 5 };
     const x = useMotionValue(0); // going to set this value on mouse move
     // rotate the tooltip
     const rotate = useSpring(
          useTransform(x, [-100, 100], [-45, 45]),
          springConfig,
     );
     // translate the tooltip
     const translateX = useSpring(
          useTransform(x, [-100, 100], [-50, 50]),
          springConfig,
     );
     const handleMouseMove = (event: any) => {
          const halfWidth = event.target.offsetWidth / 2;
          x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
     };
     return (
          <div className="flex items-center justify-center">
               {data.map((image, idx) => (
                    <motion.div
                         key={"images" + idx}
                         style={{
                              rotate: Math.random() * 20 - 10,
                         }}
                         whileHover={{
                              scale: 1.1,
                              rotate: 0,
                              zIndex: 100,
                         }}
                         whileTap={{
                              scale: 1.1,
                              rotate: 0,
                              zIndex: 100,
                         }}
                         onMouseEnter={() => setHoveredIndex(idx)}
                         onMouseLeave={() => setHoveredIndex(null)}
                         className="-mr-4 mt-4 flex-shrink-0 rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                    >
                         <AnimatePresence mode="popLayout">
                              {hoveredIndex === idx && (
                                   <motion.div
                                        initial={{
                                             opacity: 0,
                                             y: 20,
                                             scale: 0.6,
                                        }}
                                        animate={{
                                             opacity: 1,
                                             y: 0,
                                             scale: 1,
                                             transition: {
                                                  type: "spring",
                                                  stiffness: 260,
                                                  damping: 10,
                                             },
                                        }}
                                        exit={{
                                             opacity: 0,
                                             y: 20,
                                             scale: 0.6,
                                        }}
                                        style={{
                                             translateX: translateX,
                                             rotate: rotate,
                                             whiteSpace: "nowrap",
                                        }}
                                        className="absolute -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                                   >
                                        <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                                        <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                                        <div className="relative z-30 text-base font-bold text-white">
                                             {image.name}
                                        </div>
                                        <div className="text-xs text-white">
                                             {image.designation}
                                        </div>
                                   </motion.div>
                              )}
                         </AnimatePresence>
                         <Image
                              onMouseMove={handleMouseMove}
                              src={image.image}
                              alt="bali images"
                              width="500"
                              height="500"
                              className="h-[100px] w-[100px] flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40"
                         />
                    </motion.div>
               ))}
          </div>
     );
}
