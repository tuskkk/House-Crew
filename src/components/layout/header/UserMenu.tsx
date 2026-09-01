import { ChevronDown } from "lucide-react";
import Avatar from "./Avatar";
import UserDropdown from "./UserDropdown";

interface UserMenuProps {
  username?: string;
  avatarUrl?: string;
  isProfileOpen: boolean;
  handleProfileToggle: () => void;
  onLogout?: () => void;
}

export default function UserMenu({
  username = "Ola",
  avatarUrl,
  isProfileOpen,
  handleProfileToggle,
  onLogout,
}: UserMenuProps) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleProfileToggle}
        aria-expanded={isProfileOpen}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-md p-1.5 transition cursor-pointer hover:bg-surface"
      >
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
      {isProfileOpen && (
        <UserDropdown
          username={username}
          onLogout={onLogout}
          handleProfileToggle={handleProfileToggle}
        />
      )}
    </div>
  );
}
