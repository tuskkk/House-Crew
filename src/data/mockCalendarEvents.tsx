import type { CalendarEvent } from "../types/calendar";
import { mockTasks } from "./mockTasks";
import { getContrastColor } from "../utils/getContrastColor";

export const mockCalendarEvents: CalendarEvent[] = mockTasks.flatMap(
  (task): CalendarEvent[] => {
    const dueDate = task.details.dueDate;

    if (!dueDate) return [];

    return [
      {
        id: task.id,
        title: task.name,
        start: dueDate,
        color: task.category.color,
        contrastColor: getContrastColor(task.category.color),
      },
    ];
  },
);
