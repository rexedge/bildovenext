import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { COMPANY_PROFILE } from "@/utils/const";
import FormatAddress from "@/utils/format-address";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
     <footer className="bg-teal-800 px-2 py-8 text-white">
          <MaxWidthWrapper className="">
               <div className="flex flex-wrap justify-between">
                    <div className="mb-8 w-full md:w-1/2 lg:mb-0 lg:w-2/5">
                         <Link
                              href="/"
                              className="h-12 w-24 shrink-0 font-bold"
                         >
                              <Image
                                   height={100}
                                   width={100}
                                   src={"/bildoveLogo1.png"}
                                   alt=""
                                   className="h-16 w-auto object-contain"
                              />
                         </Link>
                         <div className="my-3">
                              <FormatAddress
                                   address={COMPANY_PROFILE.address}
                              />
                         </div>
                         <p className="mb-3">Phone: {COMPANY_PROFILE.phone}</p>
                         <p className="">Email: {COMPANY_PROFILE.email}</p>
                    </div>
                    <div className="mb-8 w-[45%] md:mb-0 lg:w-1/5">
                         <h2 className="mb-4 text-lg font-semibold">
                              Quick Links
                         </h2>
                         <ul className="space-y-2">
                              <li>
                                   <Link
                                        href="/"
                                        className="hover:text-gray-300"
                                   >
                                        Home
                                   </Link>
                              </li>
                              <li>
                                   <Link
                                        href="/services"
                                        className="hover:text-gray-300"
                                   >
                                        Services
                                   </Link>
                              </li>
                              <li>
                                   <Link
                                        href="/products"
                                        className="hover:text-gray-300"
                                   >
                                        Products
                                   </Link>
                              </li>
                              <li>
                                   <Link
                                        href="/about"
                                        className="hover:text-gray-300"
                                   >
                                        About Us
                                   </Link>
                              </li>
                              <li>
                                   <Link
                                        href="/contact"
                                        className="hover:text-gray-300"
                                   >
                                        Contact Us
                                   </Link>
                              </li>
                         </ul>
                    </div>
                    <div className="mb-8 w-full md:mb-0 md:w-1/2 lg:w-1/5">
                         <h2 className="mb-4 text-lg font-semibold">
                              Follow Us
                         </h2>
                         <ul className="space-y-2">
                              <li>
                                   <a href="#" className="hover:text-gray-300">
                                        Facebook
                                   </a>
                              </li>
                              <li>
                                   <a href="#" className="hover:text-gray-300">
                                        Twitter
                                   </a>
                              </li>
                              <li>
                                   <a href="#" className="hover:text-gray-300">
                                        Instagram
                                   </a>
                              </li>
                              <li>
                                   <a href="#" className="hover:text-gray-300">
                                        LinkedIn
                                   </a>
                              </li>
                         </ul>
                    </div>
               </div>
               <hr className="my-6 border-gray-200" />
               <div className="text-center">
                    <Link href={"https://rexedge.site"}>
                         <p className="">
                              &copy; {new Date().getFullYear()} Rex Edge Design
                              Studio. All rights reserved.
                         </p>
                    </Link>
               </div>
          </MaxWidthWrapper>
     </footer>
);

export default Footer;
