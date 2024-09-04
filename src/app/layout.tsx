import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/nav-bar";
import { COMPANY_PROFILE } from "@/utils/const";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
     title: {
          template: `%s | ${COMPANY_PROFILE.name}`,
          default: COMPANY_PROFILE.name,
     },
     keywords: ["licensed financial professional", "life insurance", "IUL"],
     referrer: "origin-when-cross-origin",
     description: COMPANY_PROFILE.description,
     applicationName: "Bildove Financial Services",
     metadataBase: new URL("https://www.bildovefinancialservices.com/"),
     alternates: {
          canonical: `https://www.bildovefinancialservices.com/`,
     },
};

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html lang="en">
               {/* <GoogleTagManager gtmId="GTM-PRT4WHMD" /> */}

               <body className={`${inter.className}`}>
                    <NavBar />
                    {children}
                    <Footer />
                    <Toaster richColors />
                    <Script id="facebook-pixel" strategy="afterInteractive">
                         {`
                              !function(f,b,e,v,n,t,s)
                              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                              n.queue=[];t=b.createElement(e);t.async=!0;
                              t.src=v;s=b.getElementsByTagName(e)[0];
                              s.parentNode.insertBefore(t,s)}(window, document,'script',
                              'https://connect.facebook.net/en_US/fbevents.js');
                              fbq('init', '528408153212828');
                              fbq('track', 'PageView');
                         `}
                    </Script>

                    <noscript>
                         <img
                              height="1"
                              width="1"
                              className="hidden"
                              src="https://www.facebook.com/tr?id=528408153212828&ev=PageView&noscript=1"
                         />
                    </noscript>
               </body>
          </html>
     );
}
