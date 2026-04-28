"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as Icons from "@/utils/svgs";
import { motion } from "framer-motion";
import {
    Globe2,
    LinkedinIcon,
    Mail,
    MessageSquare,
    Phone,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import BAccordion from "./accordion";
import BookMeetingDialog from "./book-meeting-dialog";
import ProfileActions from "./profile-actions";
import ProfileButton from "./profilebutton";
import ProfileServices from "./profile-services";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M19.05 4.91A10 10 0 0 0 4.4 18.3L3 22l3.78-1.38A10 10 0 1 0 19.05 4.9Zm-7.04 15.4a8.4 8.4 0 0 1-4.27-1.17l-.31-.18-2.24.82.83-2.18-.2-.32a8.39 8.39 0 1 1 6.19 3.03Zm4.85-6.27c-.27-.13-1.57-.78-1.81-.86-.24-.09-.42-.13-.6.13-.18.27-.69.86-.85 1.04-.16.18-.31.2-.58.07a6.85 6.85 0 0 1-3.41-2.97c-.26-.45.26-.42.74-1.39.08-.18.04-.34-.02-.47-.07-.13-.6-1.43-.82-1.96-.21-.51-.43-.45-.6-.45h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.21 0 1.31.95 2.57 1.08 2.75.13.18 1.87 2.86 4.54 4.01.63.27 1.13.43 1.51.55.64.2 1.21.17 1.67.1.51-.07 1.57-.64 1.79-1.27.22-.62.22-1.16.16-1.27-.07-.11-.24-.18-.51-.31Z" />
  </svg>
);

export default function ProfileComponent() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 gradient-mesh" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 -z-10 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-1/2 -left-32 -z-10 h-[360px] w-[360px] rounded-full bg-primary/25 blur-3xl"
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-[2rem] border border-border/60 bg-card/90 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Banner */}
            <div className="relative h-32 md:h-40 bg-gradient-to-br from-primary via-primary/80 to-accent">
              <div
                aria-hidden
                className="absolute inset-0 opacity-20 [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:32px_32px]"
              />
              <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur border border-background/20 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-background">
                <ShieldCheck className="h-3 w-3" />
                License #19883154
              </div>
            </div>

            <div className="p-6 md:p-10 -mt-16 md:-mt-20 space-y-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="h-32 w-32 md:h-36 md:w-36 ring-4 ring-background shadow-xl">
                  <AvatarImage alt="Foluke Oladipo" src="/foluke.jpg" />
                  <AvatarFallback>FO</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent mb-2">
                    /Profile
                  </p>
                  <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                    Foluke Oladipo
                  </h1>
                  <p className="text-sm text-primary mt-1">
                    Licensed Financial Professional
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 rounded-full"
                >
                  <a href="sms:+18032501030" className="gap-2">
                    <MessageSquare className="h-4 w-4" /> SMS
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 rounded-full"
                >
                  <a href="tel:+18032501030" className="gap-2">
                    <Phone className="h-4 w-4" /> Phone
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full"
                >
                  <a
                    href="https://wa.me/18032501030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 rounded-full"
                >
                  <a href="mailto:foluke71@gmail.com" className="gap-2">
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-border bg-background col-span-3 md:col-span-1"
                >
                  <Link href="/" className="gap-2">
                    <Globe2 className="h-4 w-4" /> Website
                  </Link>
                </Button>
              </div>

              <BookMeetingDialog />

              <ProfileActions />

              <ProfileServices />

              <div>
                <BAccordion />
                <ProfileButton />
              </div>

              <div className="flex flex-col items-center space-y-4 pt-6 border-t border-border/60">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Let&apos;s connect
                </p>
                <div className="flex gap-3">
                  <Link
                    href="/#"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                  >
                    <Icons.FacebookIcon />
                  </Link>
                  <Link
                    href="/#"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/#"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
                  >
                    <Icons.InstagramIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
