import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main layout */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
          <header className="flex h-16 shrink-0 items-center border-b border-secondary bg-background px-6">
            <span className="text-sm font-medium">Header</span>
          </header>

          {/* Content */}
          <main className="flex-1">
            <div className="mx-auto w-full max-w-[var(--layout-width-xl)] px-6 pt-16 pb-6 md:px-4 lg:px-8 lg:pt-0">
              <Outlet />
            </div>
          </main>

          {/* Footer */}
          <footer className="shrink-0 border-t border-secondary bg-background px-6 py-4">
            <div className="mx-auto w-full max-w-[var(--layout-width-xl)]">
              <span className="text-sm text-text-secondary">Footer</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
