import type { TaskCategoryItem } from "./category";

type TaskPersonDetails = {
  id: string;
  name: string;
  email: string;
  startDate: string;
};

export const cycleOptions = [
  "daily",
  "weekly",
  "fortnightly",
  "monthly",
  "quarterly",
  "yearly",
] as const;
export const priorityOptions = ["low", "medium", "high"] as const;

type Cycle = (typeof cycleOptions)[number];
type Priority = (typeof priorityOptions)[number];

type TimePeriodValues = {
  day?: number;
  week?: number;
  month?: number;
  year?: number;
};

type StatisticsData = {
  general: number | string;
  byTime: TimePeriodValues;
};

type TaskStatisticsDetails = {
  count: StatisticsData;
  completionPercentage: StatisticsData;
};

type TaskDetails = {
  cycleDetails?: Cycle;
  dueDate: string | null;
  priority: Priority | null;
  assigneeId: string | null;
  statisticsDetails: TaskStatisticsDetails;
};

type Task = TaskCategoryItem & {
  details: TaskDetails;
};

type ModalType = "addCategory" | "addTask" | "editTask" | "deleteTask" | null;

type TaskDetailFilterType = "cycleDetails" | "priority" | "assigneeId";

type TaskSuccessData = {
  isSuccessShown: boolean;
  taskName: string | null;
};

export type {
  TaskPersonDetails,
  Cycle,
  Priority,
  Task,
  TaskDetails,
  ModalType,
  TaskDetailFilterType,
  TaskSuccessData,
};
