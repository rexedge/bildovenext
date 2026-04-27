/** @format */

import { ReactNode } from "react";
import Link from "next/link";

export default function ButtonItem({
  title,
  icon,
  href,
}: {
  title: string;
  icon: ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-secondary/60 hover:bg-primary hover:text-primary-foreground hover:border-primary px-6 py-5 transition-colors"
    >
      <p className="font-medium">{title}</p>
      <span className="text-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </span>
    </Link>
  );
}
