import type { Task, TaskDetailFilterType } from "../types/task";

export const detailsOptions = <T extends string>(
  tasksList: Task[],
  propertyName: TaskDetailFilterType,
) => {
  return tasksList.reduce<{ id: T; name: string }[]>((acc, task: Task) => {
    const detail = task.details[propertyName] as T | null | undefined;

    if (detail && !acc.some((option) => option.id === detail)) {
      acc.push({
        name: detail,
        id: detail,
      });
    }

    return acc;
  }, []);
};
