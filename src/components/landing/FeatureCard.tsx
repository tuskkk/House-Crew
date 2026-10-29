import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  accent?: "primary" | "accent" | "success" | "pending";
};

const accentStyles = {
  primary: {
    icon: "bg-primary/30 text-primary",
    background: "bg-primary-100",
  },
  accent: {
    icon: "bg-accent/30 text-accent",
    background: "bg-accent-100",
  },
  success: {
    icon: "bg-success/30 text-success-600",
    background: "bg-success-100",
  },
  pending: {
    icon: "bg-pending/30 text-pending-600",
    background: "bg-pending-100",
  },
};

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  imageSrc,
  imageAlt,
  accent = "primary",
}: FeatureCardProps) => {
  const styles = accentStyles[accent];

  return (
    <article
      className={`grid h-full grid-cols-2 items-start gap-2 rounded-2xl border border-border ${styles.background} p-5
     transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:gap-5 md:p-6 xl:gap-6 xl:p-7`}
    >
      <div className="flex min-w-0 flex-col items-start">
        <div
          className={`flex size-12 shrink-0 items-center justify-center rounded-full ${styles.icon} mb-2`}
        >
          <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold leading-snug text-text-primary mb-2 md:text-xl">
          {title}
        </h3>
        <p className="text-sm leading-6 text-text-secondary md:text-base">
          {description}
        </p>
      </div>
      <div className="h-full flex items-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-auto w-full min-w-0 rounded-xl object-contain border-4 border-white shadow"
        />
      </div>
    </article>
  );
};
