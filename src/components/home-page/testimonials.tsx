/** @format */

import { COMPANY_PROFILE, TESTIMONIES } from "@/utils/const";
import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <section className="px-5 md:px-10 py-20  grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="md:col-span-2 lg:col-span-3 text-center text-2xl lg:text-3xl font-normal mb-5 lg:mb-10">
        TESTIMONIALS
      </div>
      {TESTIMONIES.map((testimony, index) => (
        <div
          key={index}
          className="md:col-span-1 bg-stone-100 p-5 rounded-lg mb-5 text-center shadow-xl hover:-translate-y-5 transition duration-500"
        >
          <Image
            height={200}
            width={200}
            alt=""
            src={testimony.image}
            className="mx-auto rounded-full h-20 w-20 object-cover object-center mb-5"
          />
          <p className="font-bold text-lg uppercase mb-8">{testimony.title}</p>
          <p>{testimony.description}</p>
        </div>
      ))}
    </section>
  );
}
