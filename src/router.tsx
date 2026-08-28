import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import AppLayout from "./components/layout/AppLayout.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import CalendarPage from "./pages/CalendarPage.tsx";
import TasksPage from "./pages/TasksPage.tsx";
import StatisticsPage from "./pages/StatisticsPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";

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
