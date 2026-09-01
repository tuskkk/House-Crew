import { useState } from "react";
import { Menu } from "lucide-react";
import NotificationButton from "./NotificationButton";
import UserMenu from "./UserMenu";

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
        <UserMenu
          username={username}
          avatarUrl={avatarUrl}
          isProfileOpen={isProfileOpen}
          handleProfileToggle={handleProfileToggle}
          onLogout={handleLogout}
        />
      </div>
    </header>
  );
}
