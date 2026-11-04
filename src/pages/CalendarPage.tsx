import { PageTitle } from "../components/ui/PageTitle.tsx";
import Calendar from "../components/layout/calendar/Calendar.tsx";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/classic/theme.css";
import "@fullcalendar/react/themes/classic/palette.css";
import { mockCalendarEvents } from "../data/mockCalendarEvents.tsx";

const CalendarPage = () => {
  return (
    <section className="w-full min-w-0">
      <PageTitle name="Calendar" />
      <div className="w-full min-w-0 p-4 overflow-hidden bg-background rounded-sm border border-disabled shadow-sm">
        <Calendar events={mockCalendarEvents} />
      </div>
    </section>
  );
};

export default CalendarPage;
