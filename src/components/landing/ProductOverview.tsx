import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import calendarExample from "../../assets/calendar_example.webp";

export const ProductOverview = () => {
  return (
    <section
      id="product"
      aria-labelledby="product-overview-heading"
      className="relative isolate overflow-hidden bg-background px-4 py-16 md:px-8 md:py-24 xl:px-12 xl:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl md:h-96 md:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[35%] h-64 w-64 rounded-full bg-primary-100/50 blur-3xl md:h-80 md:w-80"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10 xl:gap-16">
        <div className="relative z-10">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary/70 md:text-sm">
            Product overview
          </span>
          <h2
            id="product-overview-heading"
            className="mt-4 max-w-lg text-3xl font-bold leading-tight tracking-tight text-accent md:text-4xl xl:text-5xl"
          >
            The whole household,
            <span className="block">in sync.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-text-secondary md:text-lg md:leading-8">
            A clear overview of tasks, deadlines and family members — everything
            you need to keep your home organized, in one place.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3 text-sm leading-6 text-text-secondary md:text-base">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-success-600"
                aria-hidden="true"
              />
              See upcoming and completed tasks
            </li>
            <li className="flex items-start gap-3 text-sm leading-6 text-text-secondary md:text-base">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-success-600"
                aria-hidden="true"
              />
              Keep everyone on the same page
            </li>
            <li className="flex items-start gap-3 text-sm leading-6 text-text-secondary md:text-base">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-success-600"
                aria-hidden="true"
              />
              Plan household routines together
            </li>
          </ul>
          <Link
            to="/app/calendar"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Explore the app
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="relative mx-auto w-full min-w-0 max-w-3xl lg:py-10">
          <div
            aria-hidden="true"
            className="absolute inset-x-4 inset-y-4 rotate-[-5deg] rounded-[2rem] bg-secondary/50 md:inset-x-8 md:inset-y-6"
          />
          <div
            aria-hidden="true"
            className="absolute -right-2 top-0 h-20 w-20 rounded-full bg-primary-100/80 md:-right-5 md:h-28 md:w-28"
          />
          <div className="relative z-10 rounded-xl border border-white/80 bg-white/80 p-1 shadow-xl transition-transform duration-500 ease-out md:rotate-[-2deg] md:hover:rotate-0">
            <img
              src={calendarExample}
              alt="HouseCrew shared household calendar showing scheduled tasks for May 2026 in a color-coded monthly view"
              className="block h-auto w-full rounded-lg"
            />
          </div>
          <div className="absolute -bottom-6 left-2 z-20 flex items-center gap-3 rounded-xl border border-border/70 bg-white p-3 shadow-lg md:-bottom-5 md:left-6 md:gap-4 md:p-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-600">
              <CheckCircle2 size={22} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-text-primary md:text-base">
                8 tasks completed
              </p>
              <p className="mt-0.5 text-xs text-text-secondary md:text-sm">
                Your home is in sync!
              </p>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-5 right-5 z-0 h-16 w-16 rounded-full bg-primary/10 md:-bottom-8 md:right-10 md:h-24 md:w-24"
          />
        </div>
      </div>
    </section>
  );
};
