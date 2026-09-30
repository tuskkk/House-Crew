import { type ReactNode } from "react";
import { Check, X, TriangleAlert } from "lucide-react";
import type { AlertType } from "../../../types/alert";

type AlertModelProps = {
  alertType: AlertType;
  title: string;
  description?: string;
  children?: ReactNode;
};

const AlertModel = ({
  alertType,
  title,
  description,
  children,
}: AlertModelProps) => {
  const modelStyleData = {
    success: {
      icon: Check,
      mainColor: "bg-success",
      backgroundColor: "bg-success-100",
      borderColor: "border-success",
      textColor: "text-success-600",
    },
    error: {
      icon: X,
      mainColor: "bg-overdue",
      backgroundColor: "bg-overdue-100",
      borderColor: "border-overdue",
      textColor: "text-overdue-600",
    },
    info: {
      icon: TriangleAlert,
      mainColor: "bg-pending",
      backgroundColor: "bg-pending-100",
      borderColor: "border-pending",
      textColor: "text-pending-600",
    },
  };

  const alertStyleData = modelStyleData[alertType];

  const messageIcon = () => {
    const TagName = alertStyleData.icon;
    return <TagName size={28} color="white" strokeWidth={2} />;
  };

  return (
    <div
      className={`w-full px-3 py-6 flex items-start justify-start gap-6 rounded border-l-4 ${alertStyleData.borderColor} ${alertStyleData.mainColor} ${alertStyleData.backgroundColor} md:py-8.5 md:px-7.5`}
    >
      <div
        className={`flex items-center justify-center ${alertStyleData.mainColor} rounded-md p-2`}
      >
        {messageIcon()}
      </div>
      <div
        className={`flex items-start justify-start flex-col tracking-wide ${alertStyleData.textColor}`}
      >
        <h3 className="text-md font-bold">{title}</h3>
        {description && <p className="tracking-wide pt-2">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default AlertModel;
