import { BrowserRouter, Routes, Route } from "react-router";
import { lazy } from "react";
import LandingPage from "./pages/LandingPage.tsx";
const LoginPage = lazy(() => import("./pages/LoginPage.tsx"));
const RegisterPage = lazy(() => import("./pages/RegisterPage.tsx"));
const DashboardPage = lazy(() => import("./pages/DashboardPage.tsx"));
import AppLayout from "./components/layout/AppLayout.tsx";
const CalendarPage = lazy(() => import("./pages/CalendarPage.tsx"));
const TasksPage = lazy(() => import("./pages/TasksPage.tsx"));
const StatisticsPage = lazy(() => import("./pages/StatisticsPage.tsx"));
const SettingsPage = lazy(() => import("./pages/SettingsPage.tsx"));

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
