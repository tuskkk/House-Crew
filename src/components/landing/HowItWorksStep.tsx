import type { LucideIcon } from "lucide-react";

type HowItWorksStepProps = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const HowItWorksStep = ({
  number,
  icon: Icon,
  title,
  description,
}: HowItWorksStepProps) => {
  return (
    <article className="flex h-full min-w-0 flex-col">
      <div className="flex items-center gap-4 md:gap-3 xl:gap-5">
        <span
          className="text-2xl font-bold tracking-tight text-primary-200"
          aria-hidden="true"
        >
          {number}
        </span>
        <Icon
          className="flex shrink-0 items-center justify-center text-primary"
          size={40}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-5 text-lg font-bold leading-snug text-text-primary md:mt-6 md:text-xl">
        {title}
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary md:text-base md:leading-7">
        {description}
      </p>
    </article>
  );
};
