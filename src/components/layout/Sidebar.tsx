import { NavLink } from "react-router";
import {
  CalendarDays,
  ChartNoAxesColumn,
  CheckSquare,
  LayoutDashboard,
  Settings,
  X,
} from "lucide-react";
import Logo from "../common/Logo";

const navigation = [
  {
    name: "Dashboard",
    path: "/app",
    icon: LayoutDashboard,
  },
  {
    name: "Tasks",
    path: "/app/tasks",
    icon: CheckSquare,
  },
  {
    name: "Calendar",
    path: "/app/calendar",
    icon: CalendarDays,
  },
  {
    name: "Settings",
    path: "/app/settings",
    icon: Settings,
  },
  {
    name: "Statistics",
    path: "/app/statistics",
    icon: ChartNoAxesColumn,
  },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (shouldOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-white transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-3">
          <Logo />

          {/* Mobile close button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-secondary/30 hover:text-text-primary lg:hidden"
          >
            <X size={21} strokeWidth={1.8} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/app"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-text-secondary hover:bg-gray-100 hover:text-text-primary"
                      }`
                    }
                  >
                    <Icon size={20} strokeWidth={1.8} className="shrink-0" />

                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User */}
        <div className="shrink-0 border-t border-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
              A
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-text-primary">
                User Name
              </p>

              <p className="truncate text-xs text-text-secondary">
                user@example.com
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
