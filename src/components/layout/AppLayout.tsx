import { Outlet } from "react-router";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./header/Header";
import Footer from "./Footer";

export default function AppLayout() {
  const [isOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="flex min-h-screen">
        <Sidebar isOpen={isOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex min-w-0 flex-1 flex-col">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-[var(--layout-width-xl)] px-2 pt-10 pb-6 md:px-4 lg:px-0 lg:pt-15">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
