import { ArrowRight, CalendarDays, Heart, Users } from "lucide-react";
import { Link } from "react-router";
import { TaskPreview } from "./TaskPreview";
import { Avatar } from "./Avatar";

export const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 size-[28rem] rounded-full bg-secondary/30 blur-3xl md:size-[36rem]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary md:text-base">
            Household task planner
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-accent md:text-5xl lg:text-6xl xl:text-7xl">
            A calmer home
            <br className="hidden md:block" /> with a{" "}
            <span className="text-primary">shared plan.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Plan household tasks, assign them to family members and keep track
            of everything in one place.
          </p>
          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
            <Link
              to="/register"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Get started free
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <a
              href="/app"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-primary/40 bg-transparent px-6 py-3 font-bold text-primary transition duration-200 hover:border-primary hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Explore the app
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-border pt-6 md:gap-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
              <Users
                aria-hidden="true"
                size={25}
                strokeWidth={1.7}
                className="shrink-0 text-primary"
              />
              <span className="text-sm font-medium leading-snug text-text-secondary md:text-base">
                For the whole family
              </span>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
              <CalendarDays
                aria-hidden="true"
                size={25}
                strokeWidth={1.7}
                className="shrink-0 text-primary"
              />
              <span className="text-sm font-medium leading-snug text-text-secondary md:text-base">
                Easy to use
              </span>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
              <Heart
                aria-hidden="true"
                size={25}
                strokeWidth={1.7}
                className="shrink-0 text-primary"
              />
              <span className="text-sm font-medium leading-snug text-text-secondary md:text-base">
                More time for what matters
              </span>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-x-4 bottom-0 top-12 -z-10 rounded-[2.5rem] bg-secondary/45 md:inset-x-8 md:top-16"
          />
          <div className="relative rotate-[-2deg] rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_24px_80px_-24px_rgba(17,29,74,0.2)] backdrop-blur-sm transition-transform duration-500 hover:rotate-0 md:rounded-3xl md:p-6">
            <div className="flex items-center justify-between border-b border-text-primary/10 pb-4">
              <div>
                <p className="text-xl font-bold text-accent md:text-2xl">
                  Today
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Monday, May 12
                </p>
              </div>
              <div className="flex size-10 items-center justify-center rounded-full bg-secondary/40 text-primary">
                <CalendarDays size={20} />
              </div>
            </div>
            <div className="divide-y divide-text-primary/5">
              <TaskPreview
                title="Take out the trash"
                category="Kitchen"
                status="Overdue"
                statusColor="bg-overdue-100 text-overdue-600"
                checked
              />
              <TaskPreview
                title="Water the plants"
                category="Living room"
                status="Today"
                statusColor="bg-pending-100 text-pending-600"
                checked
              />
              <TaskPreview
                title="Vacuum the floor"
                category="Hallway"
                status="Today"
                statusColor="bg-pending-100 text-pending-600"
              />
              <TaskPreview
                title="Clean the bathroom"
                category="Bathroom"
                status="Tomorrow"
                statusColor="bg-accent/5 text-accent"
              />
              <TaskPreview
                title="Prepare dinner"
                category="Kitchen"
                status="This week"
                statusColor="bg-success-100 text-success-600"
              />
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-background px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-accent">
                  Your household
                </p>
                <p className="mt-1 text-xs text-text-secondary">
                  Small steps, shared together.
                </p>
              </div>
              <div className="flex -space-x-2">
                <Avatar initials="A" />
                <Avatar initials="M" />
                <Avatar initials="J" />
              </div>
            </div>
          </div>
          <div className="absolute -right-1 top-5 flex max-w-[185px] items-center gap-3 rounded-xl border border-secondary/60 bg-white p-3 shadow-lg md:-right-5 md:top-8 md:max-w-none md:p-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary/40 text-primary">
              <CalendarDays size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold text-accent md:text-sm">
                Upcoming task
              </p>
              <p className="mt-1 text-xs text-text-secondary">
                Family dinner · 6 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
