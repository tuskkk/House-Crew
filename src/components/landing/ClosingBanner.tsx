import { ArrowRight, Heart, Sprout, UsersRound } from "lucide-react";
import { Link } from "react-router";
import makeSpaceIllustration from "../../assets/make-space.webp";

const benefits = [
  {
    icon: Sprout,
    label: "Free to get started",
  },
  {
    icon: Heart,
    label: "For the whole family",
  },
  {
    icon: UsersRound,
    label: "A more organized home",
  },
];

export const ClosingBanner = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="px-4 py-10 md:px-8 md:py-12 xl:px-12 xl:py-16"
    >
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-2xl bg-accent text-white shadow-sm">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-24 size-72 rounded-full bg-secondary/20 blur-3xl md:size-96"
        />
        <div className="relative grid min-h-72 grid-cols-1 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10 flex flex-col items-start px-6 py-8 md:px-8 md:py-10 xl:px-12 xl:py-12">
            <h2
              id="cta-heading"
              className="max-w-xl text-3xl font-bold leading-tight tracking-tight md:text-4xl xl:text-5xl"
            >
              Make space
              <span className="block">
                for <span className="text-secondary">more than chores.</span>
              </span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/85 md:text-base">
              Join HouseCrew and turn household tasks into a simple, shared
              plan.
            </p>
            <div className="mt-6 flex w-full flex-wrap items-center gap-3">
              <Link
                to="/register"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary md:px-5"
              >
                Create your free account
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                to="/login"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                Log in
              </Link>
            </div>
            <ul className="mt-7 grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-3 xl:gap-5">
              {benefits.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-xs leading-5 text-white/90"
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    className="shrink-0 text-white"
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            aria-hidden="true"
            className="relative hidden min-h-72 overflow-hidden md:block"
          >
            {/* Organic transition between the navy background and the image */}
            <svg
              aria-hidden="true"
              viewBox="0 0 200 400"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 h-full w-1/2"
            >
              <path
                d="M 0 0 H 90 C 105 80, 150 110, 175 160 C 190 190, 145 220, 145 260 C 145 310, 175 350, 200 400 H 0 Z"
                fill="var(--color-accent)"
              />
            </svg>
            <img
              src={makeSpaceIllustration}
              alt=""
              className="absolute inset-0 size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
