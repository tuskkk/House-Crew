import { Outlet } from "react-router";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./header/Header";

export default function AppLayout() {
  const [isOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="flex min-h-screen">
        <Sidebar isOpen={isOpen} setIsOpen={setIsSidebarOpen} />

        {/* Main layout */}
        <div className="flex min-w-0 flex-1 flex-col">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />

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
