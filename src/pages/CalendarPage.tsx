import { PageTitle } from "../components/ui/PageTitle.tsx";
import Calendar from "../components/layout/calendar/Calendar.tsx";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/classic/theme.css";
import "@fullcalendar/react/themes/classic/palette.css";
//todo: Mock data for events!
const events = [
  {
    id: "1",
    title: "Vacuum living room",
    start: "2026-11-19",
    color: "#ffcf99",
    contrastColor: "#1e1e24",
  },
  {
    id: "2",
    title: "Family lunch",
    start: "2026-11-27",
    color: "#bcc2e0",
    contrastColor: "#111d4a",
  },
];

const CalendarPage = () => {
  return (
    <section className="w-full min-w-0 p-6">
      <PageTitle name="Tasks" />
      <div className="w-full min-w-0 p-4 overflow-hidden bg-background rounded-sm border border-disabled shadow-sm">
        <Calendar events={events} />
      </div>
    </section>
  );
};

export default CalendarPage;
