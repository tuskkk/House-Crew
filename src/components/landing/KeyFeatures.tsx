import { BellRing, CalendarDays, ListChecks, UsersRound } from "lucide-react";
import { FeatureCard } from "./FeatureCard";
// todo: to be replaced by real-app screens
import taskAssignment from "../../assets/task-assignment.webp";
import taskReminders from "../../assets/task-reminders.webp";
import familyCalendar from "../../assets/family-calendar.webp";
import taskCategories from "../../assets/task-categories.webp";

const features = [
  {
    number: "01",
    icon: UsersRound,
    title: "Everyone knows their part",
    description:
      "Assign tasks to family members and make responsibilities clear for everyone.",
    imageSrc: taskAssignment,
    imageAlt: "Household tasks assigned to family members",
    accent: "primary" as const,
  },
  {
    number: "02",
    icon: BellRing,
    title: "Never lose track",
    description:
      "Get reminders for upcoming tasks and keep an eye on overdue ones.",
    imageSrc: taskReminders,
    imageAlt: "Household task list showing overdue, upcoming and planned tasks",
    accent: "pending" as const,
  },
  {
    number: "03",
    icon: CalendarDays,
    title: "One calendar, shared",
    description:
      "See past and planned tasks for the whole family in a clear calendar view.",
    imageSrc: familyCalendar,
    imageAlt:
      "Shared family calendar with dates marked for scheduled household tasks",
    accent: "accent" as const,
  },
  {
    number: "04",
    icon: ListChecks,
    title: "A system that fits your home",
    description:
      "Manage tasks, categories, recurring schedules and priorities — all in one place.",
    imageSrc: taskCategories,
    imageAlt:
      "Household task categories with the number of tasks in each category",
    accent: "success" as const,
  },
];

export const KeyFeatures = () => {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="bg-background px-4 py-16 md:px-8 md:py-24 xl:px-12 xl:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:items-end md:gap-8">
          <div>
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary/70 md:text-sm">
              Key features
            </span>
            <h2
              id="features-heading"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl xl:text-5xl"
            >
              Less mental load.
              <span className="block">More room for life.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-text-secondary md:justify-self-end md:text-lg md:leading-8">
            HouseCrew helps you organize household tasks in a simple, flexible
            way — so everyone knows what to do, nothing gets forgotten, and home
            runs more smoothly.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-5 xl:mt-12 xl:gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
