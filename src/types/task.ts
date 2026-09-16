/*type TaskPersonDetails = {
  id: string;
  name: string;
  email: string;
  startDate: string;
}*/

type Category = {
  id: string;
  name: string;
};

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
  cycleDetails?:
    "daily" | "weekly" | "fortnightly" | "monthly" | "quarterly" | "yearly";
  dueDate: string | null;
  priority: "low" | "medium" | "high" | null;
  assigneeId: string | null;
  statisticsDetails: TaskStatisticsDetails;
};

type Task = {
  id: string;
  category: Category;
  name: string;
  details: TaskDetails;
};

export type { Task, TaskDetails };
