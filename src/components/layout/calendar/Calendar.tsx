import type { CalendarEvent } from "../../../types/calendar.ts";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import classicThemePlugin from "@fullcalendar/react/themes/classic";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/classic/theme.css";
import "@fullcalendar/react/themes/classic/palette.css";
import styles from "./Calendar.module.css";

interface CalendarProps {
  events: CalendarEvent[];
}

const Calendar = ({ events }: CalendarProps) => {
  const headerToolbar = {
    start: "today prev, next title",
    end: "Month,Week,Day",
  };
  return (
    <div className={styles.calendarWrapper}>
      <FullCalendar
        plugins={[classicThemePlugin, dayGridPlugin]}
        initialView="dayGridMonth"
        firstDay={1}
        headerToolbar={headerToolbar}
        events={events}
        height="auto"
      />
    </div>
  );
};

export default Calendar;
