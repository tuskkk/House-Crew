import { Link } from "react-router";
import { Bell } from "lucide-react";
import Dropdown from "../../ui/Dropdown";
import type { Notification } from "../../../types/notification";

interface NotificationsDropdownProps {
  notifications?: Notification[];
  handleNotificationsToggle: () => void;
}

export default function NotificationsDropdown({
  notifications = [],
  handleNotificationsToggle,
}: NotificationsDropdownProps) {
  return (
    <Dropdown>
      {/* User info */}
      <div className="border-b border-border px-3 py-2">
        <Bell size={17} className="text-text-secondary" />
      </div>
      {notifications.length ? (
        notifications.map((notification) => (
          <Link
            key={notification.id}
            to={notification.url}
            role="notification"
            onClick={() => handleNotificationsToggle()}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-text-secondary transition hover:bg-surface hover:text-text-primary"
          >
            {notification.message}
          </Link>
        ))
      ) : (
        <p className="px-3 py-2 text-sm text-text-secondary">
          No notifications
        </p>
      )}
    </Dropdown>
  );
}
