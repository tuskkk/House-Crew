import { Check } from "lucide-react";

type TaskPreviewProps = {
  title: string;
  category: string;
  status: string;
  statusColor: string;
  checked?: boolean;
};

export const TaskPreview = ({
  title,
  category,
  status,
  statusColor,
  checked = false,
}: TaskPreviewProps) => {
  return (
    <div className="flex items-center gap-3 py-4 md:gap-4">
      <span
        aria-hidden="true"
        className={`flex size-5 shrink-0 items-center justify-center rounded border ${
          checked
            ? "border-primary bg-primary text-white"
            : "border-accent/50 bg-white"
        }`}
      >
        {checked && <Check size={16} />}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-text-primary md:text-base">
          {title}
        </p>
        <p className="mt-1 text-xs text-text-secondary md:text-sm">
          {category}
        </p>
      </div>
      <span
        className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold md:px-3 md:text-xs ${statusColor}`}
      >
        {status}
      </span>
    </div>
  );
};
