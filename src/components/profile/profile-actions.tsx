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
import { Check, Copy, QrCode, Share2, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";

const PROFILE = {
  firstName: "Foluke",
  lastName: "Oladipo",
  fullName: "Foluke Oladipo",
  org: "Bildove Financial Services",
  title: "Licensed Financial Professional",
  phone: "+18032501030",
  email: "foluke71@gmail.com",
  url: "https://bildovefinancialservices.com/profile",
  note: "License #19883154",
};

function buildVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${PROFILE.lastName};${PROFILE.firstName};;;`,
    `FN:${PROFILE.fullName}`,
    `ORG:${PROFILE.org}`,
    `TITLE:${PROFILE.title}`,
    `TEL;TYPE=CELL,VOICE:${PROFILE.phone}`,
    `EMAIL;TYPE=INTERNET:${PROFILE.email}`,
    `URL:${PROFILE.url}`,
    `NOTE:${PROFILE.note}`,
    "END:VCARD",
  ];
  return lines.join("\r\n");
}

export default function ProfileActions() {
  const [shareUrl, setShareUrl] = useState(PROFILE.url);
  const [copied, setCopied] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") setShareUrl(window.location.href);
  }, []);

  const handleSaveContact = () => {
    const blob = new Blob([buildVCard()], {
      type: "text/vcard;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Foluke-Oladipo.vcf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const data = {
      title: "Foluke Oladipo - Licensed Financial Professional",
      text: "Connect with Foluke Oladipo at Bildove Financial Services.",
      url: shareUrl,
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        // user cancelled or unsupported - fall through to copy
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&data=${encodeURIComponent(
    shareUrl,
  )}`;

  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        type="button"
        variant="outline"
        onClick={handleSaveContact}
        className="rounded-full bg-background gap-2"
      >
        <UserPlus className="h-4 w-4" />
        <span className="hidden sm:inline">Save Contact</span>
        <span className="sm:hidden">Save</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={handleShare}
        className="rounded-full bg-background gap-2"
      >
        {copied ? (
          <Check className="h-4 w-4 text-primary" />
        ) : (
          <Share2 className="h-4 w-4" />
        )}
        <span className="hidden sm:inline">
          {copied ? "Copied!" : "Share"}
        </span>
        <span className="sm:hidden">{copied ? "Copied" : "Share"}</span>
      </Button>

      <Dialog open={qrOpen} onOpenChange={setQrOpen}>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="rounded-full bg-background gap-2"
          >
            <QrCode className="h-4 w-4" />
            <span className="hidden sm:inline">QR Code</span>
            <span className="sm:hidden">QR</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              Scan to share
            </DialogTitle>
            <DialogDescription>
              Point a phone camera at the code below to open this profile.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrSrc}
              alt="Profile QR code"
              width={280}
              height={280}
              className="rounded-2xl border border-border/60 bg-white p-3"
            />
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(shareUrl);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                } catch {}
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] hover:bg-secondary/80 transition-colors"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copied ? "Link copied" : "Copy link"}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
