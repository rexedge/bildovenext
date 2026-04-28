"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { COMPANY_PROFILE } from "@/utils/const";
import { CalendarDays, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function BookMeetingDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="w-full rounded-full bg-primary hover:bg-primary/90 gap-2 shadow-lg shadow-primary/25"
        >
          <CalendarDays className="h-5 w-5" />
          Book a Meeting
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-3">
          <DialogTitle className="font-display text-2xl">
            Schedule a 1-on-1 with Foluke
          </DialogTitle>
          <DialogDescription>
            Pick a time that works for you. Free, no obligation, ~30 minutes.
          </DialogDescription>
        </DialogHeader>
        <div className="relative h-[70vh] w-full bg-muted">
          <iframe
            src={COMPANY_PROFILE.calendly}
            className="absolute inset-0 h-full w-full"
            title="Book a meeting with Foluke Oladipo"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-between gap-2 p-4 border-t border-border/60 bg-card">
          <p className="text-xs text-muted-foreground">
            Trouble loading? Open in a new tab.
          </p>
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <a
              href={COMPANY_PROFILE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-1.5"
            >
              Open Calendly <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
