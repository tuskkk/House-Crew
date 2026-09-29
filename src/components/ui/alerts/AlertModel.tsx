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
      mainColor: "success",
      backgroundColor: "success-100",
      textColor: "success-600",
    },
    error: {
      icon: X,
      mainColor: "overdue",
      backgroundColor: "overdue-100",
      textColor: "overdue-600",
    },
    info: {
      icon: TriangleAlert,
      mainColor: "pending",
      backgroundColor: "pending-100",
      textColor: "pending-600",
    },
  };

  const alertStyleData = modelStyleData[alertType || "success"];

  const messageIcon = () => {
    const TagName = alertStyleData.icon;
    return <TagName size={28} color="white" strokeWidth={2} />;
  };

  return (
    <div
      className={`w-full py-9 px-7.5 flex items-start justify-start gap-6 rounded border-l border-l-4 border-${alertStyleData.mainColor} background-${alertStyleData.backgroundColor}`}
    >
      <div
        className={`flex items-center justify-center bg-${alertStyleData.mainColor} rounded-md p-2`}
      >
        {messageIcon()}
      </div>
      <div className="flex items-start justify-start">
        <h3
          className={`text-md text-${alertStyleData.textColor} font-bold tracking-wide`}
        >
          {title}
        </h3>
        {description && (
          <p className={`text-${alertStyleData.textColor} tracking-wide pt-2`}>
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default AlertModel;
