import { Link } from "react-router";
import { LogOut, Settings } from "lucide-react";
import Dropdown from "../../ui/Dropdown";

interface UserDropdownProps {
  username?: string;
  handleProfileToggle: () => void;
  onLogout?: () => void;
}

export default function UserDropdown({
  username = "Ola",
  onLogout,
  handleProfileToggle,
}: UserDropdownProps) {
  const handleLogout = () => {
    handleProfileToggle();
    onLogout?.();
  };
  return (
    <Dropdown>
      <div className="border-b border-border px-3 py-2">
        <p className="text-sm font-medium text-text-primary">{username}</p>
      </div>
      <Link
        to="/app/settings"
        role="menuitem"
        onClick={() => handleProfileToggle()}
        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-text-secondary transition hover:bg-surface hover:text-text-primary"
      >
        <Settings size={17} />
        Settings
      </Link>
      <button
        type="button"
        role="menuitem"
        onClick={handleLogout}
        className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-text-secondary transition hover:bg-surface hover:text-text-primary"
      >
        <LogOut size={17} />
        Log out
      </button>
    </Dropdown>
  );
}
