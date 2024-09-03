/** @format */

"use client";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { COMPANY_PROFILE } from "@/utils/const";
import { MenuIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { Separator } from "./separator";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

export default function NavBar() {
     const pathName = usePathname();
     const needsNavLinks = pathName?.startsWith("/event");

     return (
          <div className="bg-teal-100">
               <MaxWidthWrapper className="flex h-fit items-center justify-between p-2">
                    <Link href="/" className="h-12 w-24 shrink-0 font-bold">
                         <Image
                              height={100}
                              width={100}
                              src={"/bildoveLogo1.png"}
                              alt=""
                              className="h-full w-full object-contain"
                         />
                    </Link>
                    <div className="hidden w-full justify-center lg:flex">
                         {!needsNavLinks && (
                              <>
                                   <Link
                                        className="px-4 py-2 transition-all duration-500 hover:scale-110 hover:text-teal-800"
                                        href={"/about"}
                                   >
                                        ABOUT
                                   </Link>
                                   <Link
                                        className="px-4 py-2 transition-all duration-500 hover:scale-110 hover:text-teal-800"
                                        href={"/products"}
                                   >
                                        PRODUCTS
                                   </Link>
                                   <Link
                                        className="px-4 py-2 transition-all duration-500 hover:scale-110 hover:text-teal-800"
                                        href={"/services"}
                                   >
                                        SERVICES
                                   </Link>
                                   <Link
                                        className="px-4 py-2 transition-all duration-500 hover:scale-110 hover:text-teal-800"
                                        href={"/contact"}
                                   >
                                        CONTACT
                                   </Link>
                              </>
                         )}
                    </div>
                    <div className="flex items-center">
                         <Button
                              className="hidden bg-teal-800 lg:block"
                              asChild
                         >
                              <Link
                                   href={COMPANY_PROFILE.calendly}
                                   className="text-yellow-400"
                              >
                                   BOOK CONSULTATION
                              </Link>
                         </Button>
                         <Sheet>
                              <SheetTrigger asChild>
                                   <Button
                                        size={"icon"}
                                        className="relative shrink-0 bg-teal-200 text-teal-800 hover:bg-teal-400 lg:hidden"
                                   >
                                        <MenuIcon className="h-6 w-6" />
                                   </Button>
                              </SheetTrigger>
                              <SheetContent className="flex w-[400px] flex-col items-center gap-10 bg-white px-4 pb-2 pt-10 sm:w-[540px]">
                                   <Link
                                        href="/"
                                        className="h-24 w-32 shrink-0 font-bold"
                                   >
                                        <Image
                                             height={100}
                                             width={100}
                                             src={"/logo.png"}
                                             alt=""
                                             className="h-full w-full object-contain"
                                        />
                                   </Link>
                                   <Separator />
                                   <Link
                                        className="px-4 py-2 transition-all hover:scale-110 hover:text-teal-800"
                                        href={"/about"}
                                   >
                                        ABOUT
                                   </Link>
                                   <Link
                                        className="px-4 py-2 transition-all hover:scale-110 hover:text-teal-800"
                                        href={"/products"}
                                   >
                                        PRODUCTS
                                   </Link>
                                   <Link
                                        className="px-4 py-2 transition-all hover:scale-110 hover:text-teal-800"
                                        href={"/services"}
                                   >
                                        SERVICES
                                   </Link>
                                   <Link
                                        className="px-4 py-2 transition-all hover:scale-110 hover:text-teal-800"
                                        href={"/contact"}
                                   >
                                        CONTACT
                                   </Link>
                                   <Button
                                        asChild
                                        className="rounded-lg bg-teal-700 px-4 py-2 transition-shadow hover:bg-teal-800"
                                   >
                                        <Link
                                             href={COMPANY_PROFILE.calendly}
                                             className="text-yellow-400"
                                        >
                                             BOOK CONSULTATION
                                        </Link>
                                   </Button>
                              </SheetContent>
                         </Sheet>
                    </div>
               </MaxWidthWrapper>
          </div>
     );
}
