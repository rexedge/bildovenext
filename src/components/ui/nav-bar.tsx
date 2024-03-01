/** @format */

"use client";
import { MenuIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { COMPANY_PROFILE } from "@/utils/const";
import { Button } from "./button";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Separator } from "./separator";

export default function NavBar() {
  return (
    <div className="w-screen bg-teal-100 h-fit flex justify-between items-center py-2 px-10">
      <Link href="/" className="shrink-0 font-bold h-12 w-24">
        <Image
          height={100}
          width={100}
          src={"/logo.png"}
          alt=""
          className="h-full object-contain w-full"
        />
      </Link>
      <div className="lg:flex justify-center w-full hidden">
        <Link
          className="py-2 px-4 hover:text-teal-800  hover:scale-110 transition-all duration-500"
          href={"/about"}
        >
          ABOUT
        </Link>
        <Link
          className="py-2 px-4 hover:text-teal-800  hover:scale-110 transition-all duration-500"
          href={"/products"}
        >
          PRODUCTS
        </Link>
        <Link
          className="py-2 px-4 hover:text-teal-800  hover:scale-110 transition-all duration-500"
          href={"/services"}
        >
          SERVICES
        </Link>
        <Link
          className="py-2 px-4 hover:text-teal-800  hover:scale-110 transition-all duration-500"
          href={"/contact"}
        >
          CONTACT
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size={"icon"}
            className="shrink-0 bg-teal-200 text-teal-800 hover:bg-teal-400 lg:hidden relative"
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px] bg-white pb-2 pt-10 px-4 flex flex-col gap-10 items-center ">
          <Link href="/" className="shrink-0 font-bold h-24 w-32">
            <Image
              height={100}
              width={100}
              src={"/logo.png"}
              alt=""
              className="h-full object-contain w-full"
            />
          </Link>
          <Separator />
          <Link
            className="py-2 px-4 hover:text-teal-800  hover:scale-110 transition-all"
            href={"/about"}
          >
            ABOUT
          </Link>
          <Link
            className="py-2 px-4 hover:text-teal-800  hover:scale-110 transition-all"
            href={"/products"}
          >
            PRODUCTS
          </Link>
          <Link
            className="py-2 px-4 hover:text-teal-800  hover:scale-110 transition-all"
            href={"/services"}
          >
            SERVICES
          </Link>
          <Link
            className="py-2 px-4 hover:text-teal-800  hover:scale-110 transition-all"
            href={"/contact"}
          >
            CONTACT
          </Link>
          <Button
            asChild
            className="shrink-0 py-2 px-4  bg-teal-200 hover:bg-teal-400 rounded-lg cursor-pointer transition-shadow"
          >
            <Link
              href={COMPANY_PROFILE.calendly}
              className="text-stone-500 hover:text-stone-600"
            >
              BOOK CONSULTATION
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}
