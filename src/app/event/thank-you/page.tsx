import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
     return (
          <div
               className="min-h-screen bg-cover bg-center px-4 py-12 sm:px-6 lg:px-8"
               style={{
                    backgroundImage: `url('https://www.bildovefinancialservices.com/modern-business-buildings-financial-district.jpg')`,
               }}
          >
               <div className="mx-auto max-w-3xl">
                    <div className="rounded-lg bg-white/90 p-8 shadow-xl backdrop-blur-sm">
                         <div className="text-center">
                              <h1 className="mb-4 text-4xl font-bold text-[#115e59]">
                                   Thank You for Registering!
                              </h1>
                              <p className="mb-8 text-2xl font-semibold text-[#ca8a04]">
                                   Free Workshop!
                              </p>
                         </div>

                         <div className="mb-8">
                              <h2 className="mb-4 text-2xl font-bold text-[#115e59]">
                                   You will benefit from this seminar by
                                   learning:
                              </h2>
                              <ul className="space-y-4">
                                   {[
                                        "Gain actionable steps to overcome debt: Learn practical strategies and create a personalized debt repayment plan to achieve financial freedom faster.",
                                        "How to set your child up early for financial success.",
                                        "Credit building strategies for your teens and first time builders.",
                                        "Build a strong financial foundation: Discover how to create and maintain a sustainable budget, establish an emergency fund, and invest wisely for long-term financial security.",
                                        "Ways to receive up to 100% of your Social Security benefits tax-free.",
                                        "Develop a mindset of abundance: Shift your perspective from scarcity to abundance, empowering you to make informed financial decisions and attract wealth.",
                                   ].map((benefit, index) => (
                                        <li
                                             key={index}
                                             className="flex items-start"
                                        >
                                             <CheckCircle2 className="mr-2 mt-1 h-6 w-6 flex-shrink-0 text-[#ca8a04]" />
                                             <span className="text-[#115e59]">
                                                  {benefit}
                                             </span>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="text-center">
                              <Button className="transform rounded-full bg-[#115e59] px-6 py-3 text-lg font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-[#0f4c45]">
                                   Go Home
                              </Button>
                         </div>
                    </div>
               </div>
          </div>
     );
}
