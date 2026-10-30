import { ArrowRight, CalendarDays, ListChecks, UsersRound } from "lucide-react";
import { HowItWorksStep } from "./HowItWorksStep";

const steps = [
  {
    number: "01",
    icon: UsersRound,
    title: "Create your household",
    description: "Sign up, add your family members and set up your home.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Add and assign tasks",
    description:
      "Create tasks, set due dates, choose categories and assign them to family members.",
  },
  {
    number: "03",
    icon: CalendarDays,
    title: "Keep everyone in sync",
    description:
      "Track progress together in the calendar and get reminders about upcoming tasks.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-background px-4 py-16 md:px-8 md:py-20 xl:px-12 xl:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12 xl:gap-16">
        <div>
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary/70 md:text-sm">
            How it works
          </span>
          <h2
            id="how-it-works-heading"
            className="mt-4 max-w-xs text-3xl font-bold leading-tight tracking-tight text-accent md:text-4xl xl:text-5xl"
          >
            Set it up
            <span className="block">in minutes.</span>
          </h2>
          <p className="mt-4 max-w-sm text-base leading-7 text-text-secondary">
            A simpler way to organize your home, one small step at a time.
          </p>
        </div>
        <ol className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] md:items-start md:gap-3 xl:gap-5">
          <li className="min-w-0">
            <HowItWorksStep {...steps[0]} />
          </li>
          <li
            aria-hidden="true"
            className="hidden pt-4 text-primary/70 md:block"
          >
            <ArrowRight size={24} strokeWidth={1.6} />
          </li>
          <li className="min-w-0">
            <HowItWorksStep {...steps[1]} />
          </li>
          <li
            aria-hidden="true"
            className="hidden pt-4 text-primary/70 md:block"
          >
            <ArrowRight size={24} strokeWidth={1.6} />
          </li>
          <li className="min-w-0">
            <HowItWorksStep {...steps[2]} />
          </li>
        </ol>
      </div>
    </section>
  );
};
