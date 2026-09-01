import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, LogOut, Menu, Settings } from "lucide-react";
import Avatar from "./Avatar";
import NotificationButton from "./NotificationButton";

interface HeaderProps {
  username?: string;
  avatarUrl?: string;
  hasUnreadNotifications?: boolean;
  onMenuClick?: () => void;
  onLogout?: () => void;
}

export default function Header({
  username = "Ola",
  avatarUrl,
  hasUnreadNotifications = false,
  onMenuClick,
  onLogout,
}: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileToggle = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setIsProfileOpen(false);
    onLogout?.();
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-4 md:px-6">
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          className="rounded-md p-2 text-text-secondary transition hover:bg-surface hover:text-text-primary md:hidden"
        >
          <Menu size={22} />
        </button>

        {/* Page title / logo */}
        <div className="text-lg font-semibold text-text-primary">HouseCrew</div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <NotificationButton hasUnreadNotifications={hasUnreadNotifications} />

        {/* User profile */}
        <div className="relative">
          <button
            type="button"
            onClick={handleProfileToggle}
            aria-expanded={isProfileOpen}
            aria-haspopup="menu"
            className="flex items-center gap-2 rounded-md p-1.5 transition cursor-pointer hover:bg-surface"
          >
            {/* Avatar */}
            <Avatar username={username} avatarUrl={avatarUrl} />

            {/* Username — hidden on small screens */}
            <span className="hidden text-sm font-medium text-text-primary sm:block">
              {username}
            </span>

            <ChevronDown
              size={16}
              className="hidden text-text-secondary sm:block"
            />
          </button>

          {/* Profile dropdown */}
          {isProfileOpen && (
            <div
              role="menu"
              className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-border bg-background p-1 shadow-lg"
            >
              {/* User info */}
              <div className="border-b border-border px-3 py-2">
                <p className="text-sm font-medium text-text-primary">
                  {username}
                </p>
              </div>

              {/* Settings */}
              <Link
                to="/settings"
                role="menuitem"
                onClick={() => setIsProfileOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-text-secondary transition hover:bg-surface hover:text-text-primary"
              >
                <Settings size={17} />
                Settings
              </Link>

              {/* Logout */}
              <button
                type="button"
                role="menuitem"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-text-secondary transition hover:bg-surface hover:text-text-primary"
              >
                <LogOut size={17} />
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
