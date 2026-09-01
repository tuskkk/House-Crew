import { Bell } from "lucide-react";
import NotificationsDropdown from "./NotificationsDropdown";

interface NotificationButtonProps {
  hasUnreadNotifications?: boolean;
  areNotificationsOpen?: boolean;
  handleNotificationsToggle: () => void;
}

export default function NotificationButton({
  hasUnreadNotifications = false,
  areNotificationsOpen,
  handleNotificationsToggle,
}: NotificationButtonProps) {
  return (
    <div className="relative">
      <button
        onClick={handleNotificationsToggle}
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
      </button>
      {areNotificationsOpen && (
        <NotificationsDropdown
          notifications={[]}
          handleNotificationsToggle={handleNotificationsToggle}
        />
      )}
    </div>
  );
}
