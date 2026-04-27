/** @format */

import { ACCORDIONS } from "@/utils/const";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import Image from "next/image";

export default function BAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {ACCORDIONS.map((a, i) => (
        <AccordionItem
          key={i}
          value={a.title}
          className="border border-border/60 rounded-2xl bg-secondary/60 hover:bg-secondary transition-colors overflow-hidden"
        >
          <AccordionTrigger className="px-6 py-5 text-left font-medium hover:no-underline">
            {a.title}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
            {a.text}{" "}
            {a.link && a.link !== "" && (
              <Link
                className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80"
                href={a.link}
              >
                {a.linkText}
              </Link>
            )}{" "}
            {a.contText}
            {a.image && (
              <Image
                width={500}
                height={500}
                src={a.image}
                alt={a.title}
                className="aspect-video w-full object-cover rounded-xl mt-4"
              />
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
