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
      <section className="px-10 py-20 bg-teal-100">
        <div className="text-lg font-bold italic text-center">
          {WELCOME_TEXT}
        </div>
      </section>
      <section className="px-10 py-20 lg:flex gap-10">
        <div className="lg:w-1/2 overflow-hidden rounded-xl mb-10">
          <Image
            src={INTRO_TEXT.image}
            height={500}
            width={500}
            alt=""
            className=" object-cover object-center h-full w-full"
          />
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="">
            <h2 className="text-xl lg:text-3xl font-normal mb-5 lg:mb-10">
              INTRODUCTION
            </h2>
            <div>{INTRO_TEXT.description}</div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-teal-300 to-blue-300">
        <div className="px-5 md:px-10 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="md:col-span-2 lg:col-span-3 text-center text-2xl lg:text-3xl font-normal mb-5 lg:mb-10">
            WHY CHOOSE US
          </div>
          {WHY_CHOOSE_US.map((why, index) => (
            <div
              key={index}
              className="md:col-span-1 bg-white p-5 rounded-lg mb-5 text-center"
            >
              <p className="font-bold text-lg uppercase mb-3">{why.title}</p>
              <p>{why.description}</p>
            </div>
          ))}
        </div>
        <div className="px-10 py-20">
          <div className="text-center text-2xl lg:text-3xl font-bold lg:mb-10">
            Ready to Take Control of Your Financial Future?
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="text-md max-w-[600px] mt-5">
              Discover how our expertise and products can help you achieve
              financial security, protect your income, and build a lasting
              legacy. Take the first step today by getting in touch with our
              team. We&apos;re excited to embark on this financial journey with
              you!
            </div>
            <Button className="mt-10 max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 px-10 shadow-lg font-bold hover:bg-gradient-to-tl transition duration-500">
              <Link href={COMPANY_PROFILE.calendly}>GET STARTED</Link>
            </Button>
          </div>
        </div>
      </section>
      <Testimonials />
      <ContactUs />
    </main>
  );
}
