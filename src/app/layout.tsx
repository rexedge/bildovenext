import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
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
  title: {
    default: `${COMPANY_PROFILE.name} — ${COMPANY_PROFILE.tagline}`,
    template: `%s | ${COMPANY_PROFILE.name}`,
  },
  description:
    "Bildove Financial helps families across the United States protect income, build legacy, and unlock long-term financial freedom with tailored insurance and retirement strategies.",
  keywords: [
    "financial planning",
    "life insurance",
    "mortgage protection",
    "retirement planning",
    "infinite banking",
    "final expense",
    "Bildove Financial",
  ],
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
      <body className="min-h-screen font-sans bg-background text-foreground">
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
          <Toaster position="top-right" richColors closeButton theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
}
