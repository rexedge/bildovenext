/** @format */

"use client";
import ContactUs from "@/components/home-page/contact-us";
import BCarousel from "@/components/home-page/home-carousel";
import Testimonials from "@/components/home-page/testimonials";
import { Button } from "@/components/ui/button";
import {
     COMPANY_PROFILE,
     INTRO_TEXT,
     WELCOME_TEXT,
     WHY_CHOOSE_US,
} from "@/utils/const";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
     return (
          <main className="flex min-h-screen flex-col">
               <BCarousel />
               <section className="bg-teal-100 px-10 py-20">
                    <div className="text-center text-lg font-bold italic">
                         {WELCOME_TEXT}
                    </div>
               </section>
               <section className="gap-10 px-10 py-20 lg:flex">
                    <div className="mb-10 overflow-hidden rounded-xl lg:w-1/2">
                         <Image
                              src={INTRO_TEXT.image}
                              height={500}
                              width={500}
                              alt=""
                              className="h-full w-full object-cover object-center"
                         />
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2">
                         <div className="">
                              <h2 className="mb-5 text-xl font-normal lg:mb-10 lg:text-3xl">
                                   INTRODUCTION
                              </h2>
                              <div>{INTRO_TEXT.description}</div>
                         </div>
                    </div>
               </section>
               <section className="bg-gradient-to-r from-teal-300 to-blue-300">
                    <div className="grid gap-10 px-5 py-20 md:grid-cols-2 md:px-10 lg:grid-cols-3">
                         <div className="mb-5 text-center text-2xl font-normal md:col-span-2 lg:col-span-3 lg:mb-10 lg:text-3xl">
                              WHY CHOOSE US
                         </div>
                         {WHY_CHOOSE_US.map((why, index) => (
                              <div
                                   key={index}
                                   className="mb-5 rounded-lg bg-white p-5 text-center md:col-span-1"
                              >
                                   <p className="mb-3 text-lg font-bold uppercase">
                                        {why.title}
                                   </p>
                                   <p>{why.description}</p>
                              </div>
                         ))}
                    </div>
                    <div className="px-10 py-20">
                         <div className="text-center text-2xl font-bold lg:mb-10 lg:text-3xl">
                              Ready to Take Control of Your Financial Future?
                         </div>
                         <div className="flex flex-col items-center text-center">
                              <div className="text-md max-w-[600px] pb-5 tracking-tight">
                                   Discover how our expertise and products can
                                   help you achieve financial security, protect
                                   your income, and build a lasting legacy. Take
                                   the first step today by getting in touch with
                                   our team. We&apos;re excited to embark on
                                   this financial journey with you!
                              </div>
                              <Button className="mt-10 max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 px-10 py-4 font-bold shadow-lg transition-all duration-500 hover:bg-gradient-to-tl">
                                   <Link href={COMPANY_PROFILE.calendly}>
                                        GET STARTED
                                   </Link>
                              </Button>
                         </div>
                    </div>
               </section>
               <Testimonials />
               <ContactUs />
          </main>
     );
}
