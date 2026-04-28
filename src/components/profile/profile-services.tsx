/** @format */

import {
    Banknote,
    HeartHandshake,
    HomeIcon,
    PiggyBank,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const SERVICES = [
  {
    icon: ShieldCheck,
    title: "Life Insurance",
    desc: "Protect what matters most.",
  },
  {
    icon: HomeIcon,
    title: "Mortgage Protection",
    desc: "Keep your family in their home.",
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    desc: "Annuities & long-term strategies.",
  },
  {
    icon: HeartHandshake,
    title: "Final Expense",
    desc: "Burial & end-of-life coverage.",
  },
  {
    icon: Banknote,
    title: "Infinite Banking",
    desc: "Become your own banker.",
  },
  {
    icon: Sparkles,
    title: "Debt-Free Planning",
    desc: "A clear path to financial freedom.",
  },
];

export default function ProfileServices() {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">
        How I can help
      </p>
      <div className="grid grid-cols-2 gap-2">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-border/60 bg-secondary/60 p-4 hover:bg-secondary transition-colors"
          >
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="h-4.5 w-4.5" />
            </div>
            <p className="text-sm font-medium leading-tight">{s.title}</p>
            <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
