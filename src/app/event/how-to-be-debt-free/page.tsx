import { EventForm } from "@/components/forms/event-form";
import ImageList from "@/components/image-list";
import HeroSection from "@/components/layout/hero-section";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
     title: "Live Workshop - Starting 2025 stronger!",
     description:
          "Are you tired of traditional life insurance policies that offer limited growth potential? Are you looking for a financial vehicle that can help you build wealth, protect your family, and enjoy tax-efficient growth? Look no further than Index Universal Life (IUL) insurance.",
};
const images1 = [
     {
          image: "/foluke.jpg",
          name: "Foluke Oladipo",
          designation: "Financial Strategist",
     },
     {
          image: "/team/michael-shusi.jpg",
          name: "Michael Shusi",
          designation: "Financial Strategist",
     },
     {
          image: "/team/blessing-oladipo.jpg",
          name: "Blessing Oladipo",
          designation: "Financial Strategist",
     },
];
const images2 = [
     {
          image: "/team/emmanuel-oso.jpg",
          name: "Emmanuel Oso",
          designation: "Financial Strategist",
     },
     {
          image: "/team/foluke-oladele.jpg",
          name: "Foluke Oladele",
          designation: "Financial Strategist",
     },
     {
          image: "/team/dare-adeniyi.jpg",
          name: "Dare Adeniyi",
          designation: "Financial Strategist",
     },
];
const images3 = [
     {
          image: "/team/oladele-olaoye.jpg",
          name: "Oladele Olaoye",
          designation: "Financial Strategist",
     },
     {
          image: "/team/funmi-ogunsola.jpg",
          name: "Funmi Ogunsola",
          designation: "Financial Strategist",
     },
     {
          image: "/team/nosa-owens.jpg",
          name: "Nosa Owens",
          designation: "Financial Strategist",
     },
];

export default function EventsPage() {
     return (
          <>
               <HeroSection image="/modern-business-buildings-financial-district.jpg">
                    <MaxWidthWrapper className="flex flex-col justify-center gap-6 py-10 text-center lg:text-start">
                         <h1 className="mb-2 text-2xl font-bold lg:text-6xl">
                              Starting 2025 stronger, <br /> A secret to <br />{" "}
                              Financial Freedom
                         </h1>
                         <p className="max-w-2xl text-lg lg:text-2xl">
                              Discover proven methods and strategies for
                              eliminating debt, creating a sustainable budget,
                              increasing your income, and investing wisely for a
                              secure financial future.
                         </p>
                         <Link href={"#"} className="font-bold lg:text-3xl">
                              Saturday, September 14th at 12:00 PM
                         </Link>
                         <div className="text-lg lg:text-2xl">
                              <div className="font-bold">
                                   Holiday Inn Express Hotel & Suite,
                                   Lawrenceville, an IHG Hotel
                              </div>
                              <div className="">
                                   520 John B, Wilson Court <br />
                                   Lawrenceville, GA.
                              </div>
                         </div>
                         <Button
                              asChild
                              size={"lg"}
                              className="mx-auto max-w-min bg-teal-600 text-xl hover:bg-teal-700 lg:ml-0.5 lg:py-2"
                         >
                              <Link href={"#registration-form"}>
                                   Get Started
                              </Link>
                         </Button>
                    </MaxWidthWrapper>
               </HeroSection>
               <div className="bg-teal-800 text-white">
                    <MaxWidthWrapper className="grid gap-5 px-5 py-10">
                         <div className="text-center text-xl lg:text-2xl">
                              Secure Your Benefits has been featured in the
                              following publications:
                         </div>
                         <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
                              <div className="flex h-auto w-full items-center justify-center">
                                   <Image
                                        alt=""
                                        src={"/companies/Forbes.png"}
                                        height={80}
                                        width={240}
                                        className="w-full object-contain"
                                   />
                              </div>
                              <div className="flex h-auto w-full items-center justify-center">
                                   <Image
                                        alt=""
                                        src={"/companies/icn.png"}
                                        height={80}
                                        width={240}
                                        className="w-full object-contain"
                                   />
                              </div>
                              <div className="flex h-auto w-full items-center justify-center">
                                   <Image
                                        alt=""
                                        src={"/companies/kip.png"}
                                        height={80}
                                        width={240}
                                        className="w-full object-contain"
                                   />
                              </div>
                              <div className="flex h-auto w-full items-center justify-center">
                                   <Image
                                        alt=""
                                        src={"/companies/marketwatch.png"}
                                        height={80}
                                        width={240}
                                        className="w-full object-contain"
                                   />
                              </div>
                              <div className="flex h-auto w-full items-center justify-center">
                                   <Image
                                        alt=""
                                        src={"/companies/msn.png"}
                                        height={80}
                                        width={240}
                                        className="w-full object-contain"
                                   />
                              </div>
                              <div className="flex h-auto w-full items-center justify-center">
                                   <Image
                                        alt=""
                                        src={"/companies/usa-today.png"}
                                        height={80}
                                        width={240}
                                        className="w-full object-contain"
                                   />
                              </div>
                         </div>
                    </MaxWidthWrapper>
               </div>
               <div className="grid bg-white">
                    <div className="m-6 grid gap-6 py-6 lg:m-0 lg:grid-cols-2 lg:py-0">
                         <div className="flex h-52 w-full items-center justify-center overflow-hidden">
                              <Image
                                   alt=""
                                   src={"/financial-advice.jpg"}
                                   height={600}
                                   width={1800}
                                   className="w-full object-cover"
                              />
                         </div>
                         <div className="flex flex-col justify-center gap-4 text-center lg:text-start">
                              <p className="max-w-2xl text-2xl">
                                   We believe that education leads to
                                   confidence, and confidence to peace of mind.
                              </p>
                              <Button
                                   asChild
                                   size={"lg"}
                                   className="mx-auto max-w-min bg-teal-600 text-xl hover:bg-teal-700 lg:ml-0.5 lg:py-2"
                              >
                                   <Link href={"#registration-form"}>
                                        Get Started
                                   </Link>
                              </Button>
                         </div>
                    </div>
               </div>
               <div className="bg-teal-800 px-5 py-10 text-white">
                    <MaxWidthWrapper className="grid gap-6 lg:grid-cols-5">
                         <div className="flex flex-col justify-center gap-4 text-center lg:col-span-2 lg:text-start">
                              <h3 className="text-xl text-yellow-500">
                                   Free Workshop!
                              </h3>
                              <p className="max-w-2xl font-serif text-2xl lg:text-5xl">
                                   You will benefit from this seminar by
                                   learning:
                              </p>
                              <Button
                                   asChild
                                   size={"lg"}
                                   className="mx-auto max-w-min bg-yellow-600 text-xl hover:bg-yellow-700 lg:ml-0.5 lg:py-2"
                              >
                                   <Link href={"#registration-form"}>
                                        Get Started
                                   </Link>
                              </Button>
                         </div>
                         <ul className="flex list-decimal flex-col justify-center gap-3 px-6 text-xl lg:col-span-3">
                              <li>
                                   Gain actionable steps to overcome debt: Learn
                                   practical strategies and create a
                                   personalized debt repayment plan to achieve
                                   financial freedom faster.
                              </li>
                              <li>
                                   Build a strong financial foundation: Discover
                                   how to create and maintain a sustainable
                                   budget, establish an emergency fund, and
                                   invest wisely for long-term financial
                                   security.
                              </li>
                              <li>
                                   Ways to receive up to 100% of your Social
                                   Security benefits tax-free.
                              </li>
                              <li>
                                   Develop a mindset of abundance: Shift your
                                   perspective from scarcity to abundance,
                                   empowering you to make informed financial
                                   decisions and attract wealth.
                              </li>
                         </ul>
                    </MaxWidthWrapper>
               </div>
               <div className="grid bg-white">
                    <MaxWidthWrapper className="mx-auto grid gap-6 lg:grid-cols-5">
                         <div className="flex h-96 w-full items-center justify-center overflow-hidden p-6 lg:col-span-2">
                              <Image
                                   alt=""
                                   src={"/presentation.jpg"}
                                   height={600}
                                   width={1800}
                                   className="h-full w-full object-cover"
                              />
                         </div>
                         <div className="flex flex-col justify-center gap-4 pb-6 text-center lg:col-span-3 lg:text-start">
                              <h2 className="text-2xl">
                                   This presentation will cover:
                              </h2>
                              <ul className="flex list-inside list-disc flex-col justify-center px-6 text-start text-lg">
                                   <li>
                                        The uncertain future of Social Security
                                        and what other options are available.
                                   </li>
                                   <li>
                                        Maintaining the &quot;new normal&quot;
                                        in 2024 and projections for the market
                                        this year.
                                   </li>
                                   <li>
                                        Why income that lasts is important
                                        during retirement.
                                   </li>
                                   <li>
                                        Common myths associated with annuities
                                        and the truth about how they function.
                                   </li>
                                   <li>
                                        What &quot;sequence of returns
                                        withdrawing&quot; means and how you can
                                        benefit from it.
                                   </li>
                                   <li>
                                        How to lay the perfect foundation for
                                        your dream retirement.
                                   </li>
                              </ul>
                              <Button
                                   asChild
                                   size={"lg"}
                                   className="mx-auto max-w-min bg-teal-600 text-xl hover:bg-teal-700 lg:ml-0.5 lg:py-2"
                              >
                                   <Link href={"#registration-form"}>
                                        Get Started
                                   </Link>
                              </Button>
                         </div>
                    </MaxWidthWrapper>
               </div>
               <div className="grid gap-6 bg-teal-800 px-5 py-10 text-white">
                    <MaxWidthWrapper className="text-center lg:text-left">
                         <h3 className="text-xl text-yellow-500">
                              Meet your host team:
                         </h3>
                         <p className="max-w-2xl font-serif text-2xl lg:text-4xl">
                              Bildove Financial Team
                         </p>
                    </MaxWidthWrapper>
                    <MaxWidthWrapper className="flex flex-col gap-6 lg:flex-row-reverse">
                         <div className="flex grow flex-col justify-center gap-4 text-center lg:col-span-2 lg:text-start">
                              <div className="flex w-full flex-col items-center justify-center pb-6 lg:col-span-2">
                                   <ImageList data={images1} />
                                   <ImageList data={images2} />
                                   <ImageList data={images3} />
                              </div>
                         </div>
                         <div className="">
                              <div className="flex flex-col justify-center gap-3 text-lg lg:max-w-2xl">
                                   <p>
                                        Team Bildove is a dedicated team of
                                        financial experts committed to providing
                                        tailored financial solutions for
                                        individuals, families, businesses,
                                        groups, and any entity seeking financial
                                        stability and growth. Our core belief,
                                        &quot;No family member left
                                        behind,&quot; extends to every client,
                                        ensuring that we offer comprehensive
                                        support across all sectors.
                                   </p>
                                   <p>
                                        Whether you&apos;re an individual
                                        looking to secure your future, a family
                                        aiming to build a strong financial
                                        foundation, a business owner seeking
                                        growth strategies, or a group in need of
                                        financial management solutions, Team
                                        Bildove is your trusted partner. We
                                        offer a wide range of financial services
                                        designed to meet the unique needs of
                                        each client.
                                   </p>
                                   <p>
                                        With our expertise, compassion, and
                                        commitment, we empower our clients to
                                        make informed financial decisions,
                                        achieve their goals, and create a
                                        prosperous future.
                                   </p>
                                   <Button
                                        asChild
                                        size={"lg"}
                                        className="mx-auto max-w-min bg-yellow-600 text-xl hover:bg-yellow-700 lg:ml-0.5 lg:py-2"
                                   >
                                        <Link href={"#registration-form"}>
                                             Get Started
                                        </Link>
                                   </Button>
                              </div>
                         </div>
                    </MaxWidthWrapper>
               </div>
               <div className="">
                    <MaxWidthWrapper className="grid place-items-center gap-5 px-5 py-10">
                         <div className="max-w-4xl text-center text-xl lg:text-3xl">
                              Attend this free educational workshop to learn all
                              there is to know about attaining financial freedom
                              before the end of 2024
                         </div>
                         <Button
                              asChild
                              size={"lg"}
                              className="mx-auto max-w-min bg-teal-600 text-xl hover:bg-teal-700 lg:py-2"
                         >
                              <Link href={"#registration-form"}>
                                   Get Started
                              </Link>
                         </Button>
                    </MaxWidthWrapper>
               </div>
               <div className="bg-teal-800 px-5 py-10 text-white">
                    <h3 className="mb-5 text-center text-2xl lg:text-4xl">
                         Topics of Discussion Includes:
                    </h3>
                    <MaxWidthWrapper className="grid gap-6 lg:grid-cols-5">
                         <div className="flex h-96 w-full items-center justify-center overflow-hidden lg:col-span-2">
                              <Image
                                   alt=""
                                   src={"/coffee-break.jpg"}
                                   height={600}
                                   width={1800}
                                   className="h-full w-full object-cover"
                              />
                         </div>
                         <div className="grid items-center px-6 text-xl lg:col-span-3 lg:justify-center">
                              <div className="flex flex-col flex-wrap place-items-start lg:flex-row">
                                   <div className="flex w-full items-center gap-3 lg:w-1/2 lg:p-5">
                                        <Mail className="h-12 w-12 shrink-0" />
                                        Retirement Planning
                                   </div>
                                   {/* <div className="flex w-full items-center gap-3 lg:w-1/2 lg:p-5">
                                        <Mail className="h-12 w-12 shrink-0" />
                                        Business Ownership
                                   </div> */}
                                   <div className="flex w-full items-center gap-3 lg:w-1/2 lg:p-5">
                                        <Mail className="h-12 w-12 shrink-0" />
                                        Estate Planning
                                   </div>

                                   <div className="flex w-full items-center gap-3 lg:w-1/2 lg:p-5">
                                        <Mail className="h-12 w-12 shrink-0" />
                                        Investment Portfolios
                                   </div>
                                   <div className="flex w-full items-center gap-3 lg:w-1/2 lg:p-5">
                                        <Mail className="h-12 w-12 shrink-0" />
                                        Income Growth and Protection
                                   </div>
                                   <div className="flex w-full items-center gap-3 lg:w-1/2 lg:p-5">
                                        <Mail className="h-12 w-12 shrink-0" />
                                        Mortgage Protection
                                   </div>
                                   <div className="flex w-full items-center gap-3 lg:w-1/2 lg:p-5">
                                        <Mail className="h-12 w-12 shrink-0" />
                                        Side hustles / Passive income Generation
                                   </div>
                                   <div className="flex w-full items-center gap-3 lg:w-1/2 lg:p-5">
                                        <Mail className="h-12 w-12 shrink-0" />
                                        Building Credits & Credit Repair
                                   </div>
                                   <div className="flex w-full items-center gap-3 lg:w-1/2 lg:p-5">
                                        <Mail className="h-12 w-12 shrink-0" />
                                        Debt Management
                                   </div>
                                   <div className="flex w-full items-center gap-3 lg:w-1/2 lg:p-5">
                                        <Mail className="h-12 w-12 shrink-0" />
                                        Budgeting and Financial Planning
                                   </div>
                              </div>
                              <Button
                                   asChild
                                   size={"lg"}
                                   className="mx-auto max-w-min bg-yellow-600 text-xl hover:bg-yellow-700 lg:ml-0.5 lg:py-2"
                              >
                                   <Link href={"#registration-form"}>
                                        Get Started
                                   </Link>
                              </Button>
                         </div>
                    </MaxWidthWrapper>
               </div>
               <HeroSection image="/modern-business-buildings-financial-district.jpg">
                    <MaxWidthWrapper className="flex flex-col justify-center gap-6 py-10">
                         <Card
                              id="registration-form"
                              className="mx-auto w-full max-w-sm p-6"
                         >
                              <EventForm />
                         </Card>
                    </MaxWidthWrapper>
               </HeroSection>
          </>
     );
}
