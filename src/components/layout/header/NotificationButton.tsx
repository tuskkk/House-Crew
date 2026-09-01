import { Link } from "react-router";
import { Bell } from "lucide-react";

interface NotificationButtonProps {
  hasUnreadNotifications?: boolean;
}

export default function NotificationButton({
  hasUnreadNotifications = false,
}: NotificationButtonProps) {
  return (
    <>
      <Link
        to="/notifications"
        aria-label={
          hasUnreadNotifications ? "Notifications, unread" : "Notifications"
        }
        className="relative rounded-md p-2 text-text-secondary transition hover:bg-surface hover:text-text-primary"
      >
        <Bell size={21} />
        {hasUnreadNotifications && (
          <span
            aria-label="Unread notifications"
            className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary"
          />
        )}
      </Link>
    </>
  );
}
