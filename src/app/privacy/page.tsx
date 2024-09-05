import { COMPANY_PROFILE } from "@/utils/const";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function PrivacyPage() {
     return (
          <div className="container mx-auto py-8">
               <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
               <ScrollArea className="w-full rounded-md border p-4">
                    <div className="space-y-6">
                         <section>
                              <h2 className="mb-3 text-2xl font-semibold">
                                   Introduction
                              </h2>
                              <p>
                                   At Bildove Financial Solutions, we are
                                   committed to protecting your privacy and
                                   ensuring the security of your personal
                                   information. This Privacy Policy outlines how
                                   we collect, use, disclose, and safeguard your
                                   data in alignment with our mission to provide
                                   personalized financial guidance and empower
                                   individuals to achieve their financial goals.
                              </p>
                         </section>

                         <section>
                              <h2 className="mb-3 text-2xl font-semibold">
                                   Information We Collect
                              </h2>
                              <p>
                                   To provide you with our services and
                                   personalized financial solutions, we may
                                   collect the following types of information:
                              </p>
                              <ul className="ml-4 mt-2 list-inside list-disc">
                                   <li>
                                        Personal identification information
                                        (name, email address, phone number)
                                   </li>
                                   <li>
                                        Financial information (income, expenses,
                                        assets, debts)
                                   </li>
                                   <li>Employment information</li>
                                   <li>
                                        Information about your financial goals
                                        and preferences
                                   </li>
                                   <li>
                                        Usage data and interactions with our
                                        website and services
                                   </li>
                              </ul>
                         </section>

                         <section>
                              <h2 className="mb-3 text-2xl font-semibold">
                                   How We Use Your Information
                              </h2>
                              <p>We use the collected information to:</p>
                              <ul className="ml-4 mt-2 list-inside list-disc">
                                   <li>
                                        Provide personalized financial guidance
                                        and solutions
                                   </li>
                                   <li>
                                        Improve our services and develop new
                                        features
                                   </li>
                                   <li>
                                        Communicate with you about your account
                                        and our services
                                   </li>
                                   <li>
                                        Conduct research and analysis to enhance
                                        financial literacy resources
                                   </li>
                                   <li>
                                        Comply with legal and regulatory
                                        requirements
                                   </li>
                              </ul>
                         </section>

                         <section>
                              <h2 className="mb-3 text-2xl font-semibold">
                                   Data Protection and Security
                              </h2>
                              <p>
                                   We implement robust security measures to
                                   protect your personal and financial
                                   information from unauthorized access,
                                   disclosure, alteration, and destruction.
                                   These measures include encryption, secure
                                   data storage, and regular security audits.
                              </p>
                         </section>

                         <section>
                              <h2 className="mb-3 text-2xl font-semibold">
                                   Sharing of Information
                              </h2>
                              <p>
                                   We do not sell your personal information to
                                   third parties. We may share your information
                                   with:
                              </p>
                              <ul className="ml-4 mt-2 list-inside list-disc">
                                   <li>
                                        Service providers who assist us in
                                        delivering our services
                                   </li>
                                   <li>
                                        Legal and regulatory authorities when
                                        required by law
                                   </li>
                                   <li>
                                        Business partners, with your explicit
                                        consent
                                   </li>
                              </ul>
                         </section>

                         <section>
                              <h2 className="mb-3 text-2xl font-semibold">
                                   Your Rights and Choices
                              </h2>
                              <p>You have the right to:</p>
                              <ul className="ml-4 mt-2 list-inside list-disc">
                                   <li>
                                        Access and review your personal
                                        information
                                   </li>
                                   <li>Request corrections to your data</li>
                                   <li>
                                        Opt-out of certain data collection and
                                        use
                                   </li>
                                   <li>
                                        Request deletion of your account and
                                        associated data
                                   </li>
                              </ul>
                         </section>

                         <section>
                              <h2 className="mb-3 text-2xl font-semibold">
                                   Updates to This Policy
                              </h2>
                              <p>
                                   We may update this Privacy Policy from time
                                   to time to reflect changes in our practices
                                   or for legal reasons. We will notify you of
                                   any significant changes and obtain your
                                   consent where required.
                              </p>
                         </section>

                         <section>
                              <h2 className="mb-3 text-2xl font-semibold">
                                   Contact Us
                              </h2>
                              <p>
                                   If you have any questions, concerns, or
                                   requests regarding this Privacy Policy or our
                                   data practices, please contact us at:
                              </p>
                              <p className="mt-2">
                                   Bildove Financial Solutions
                                   <br />
                                   Email: privacy@bildovefinancial.com
                                   <br />
                                   Phone: {COMPANY_PROFILE.phone}
                              </p>
                         </section>

                         <section>
                              <h2 className="mb-3 text-2xl font-semibold">
                                   Commitment to Our Vision and Mission
                              </h2>
                              <p>
                                   This Privacy Policy reflects our commitment
                                   to our vision of creating a future where
                                   financial freedom is within reach for all
                                   individuals. We strive to maintain the
                                   highest standards of privacy and security
                                   while empowering you with the knowledge and
                                   tools needed to achieve your financial goals.
                              </p>
                         </section>
                    </div>
               </ScrollArea>
          </div>
     );
}
