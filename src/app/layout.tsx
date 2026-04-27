import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import NavBar from "@/components/ui/nav-bar";
import Footer from "@/components/ui/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { COMPANY_PROFILE } from "@/utils/const";
import "./globals.css";

const inter = Inter({
     subsets: ["latin"],
     variable: "--font-sans",
     display: "swap",
});

const fraunces = Fraunces({
     subsets: ["latin"],
     variable: "--font-display",
     display: "swap",
});

export const metadata: Metadata = {
     metadataBase: new URL("https://www.bildovefinancialservices.com/"),
     title: {
          default: `${COMPANY_PROFILE.name} — ${COMPANY_PROFILE.tagline}`,
          template: `%s | ${COMPANY_PROFILE.name}`,
     },
     description:
          "Bildove Financial helps families across the United States protect income, build legacy, and unlock long-term financial freedom with tailored insurance and retirement strategies.",
     applicationName: "Bildove Financial Services",
     referrer: "origin-when-cross-origin",
     keywords: [
          "financial planning",
          "life insurance",
          "mortgage protection",
          "retirement planning",
          "infinite banking",
          "final expense",
          "licensed financial professional",
          "IUL",
          "Bildove Financial",
     ],
     alternates: {
          canonical: "https://www.bildovefinancialservices.com/",
     },
     openGraph: {
          title: `${COMPANY_PROFILE.name} — ${COMPANY_PROFILE.tagline}`,
          description:
               "Tailored financial protection, retirement and legacy planning for families nationwide.",
          type: "website",
     },
};

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html
               lang="en"
               suppressHydrationWarning
               className={`${inter.variable} ${fraunces.variable}`}
          >
               <body className="min-h-screen bg-background font-sans text-foreground">
                    <ThemeProvider
                         attribute="class"
                         defaultTheme="light"
                         enableSystem
                         disableTransitionOnChange
                    >
                         <div className="relative flex min-h-screen flex-col">
                              <NavBar />
                              <main className="flex-1">{children}</main>
                              <Footer />
                         </div>
                         <Toaster
                              position="top-right"
                              richColors
                              closeButton
                              theme="system"
                         />
                    </ThemeProvider>
                    <Analytics />
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
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img
                              height="1"
                              width="1"
                              className="hidden"
                              alt=""
                              src="https://www.facebook.com/tr?id=528408153212828&ev=PageView&noscript=1"
                         />
                    </noscript>
               </body>
          </html>
     );
}
