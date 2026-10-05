import type { Task } from "../types/task";
import { useTasks } from "../store/tasksStore";

export const fetchTaskDetails = (taskId: string): Task | null => {
  /* export const fetchTaskDetails = async (taskId: string): Promise<Task | null> => {
  try {
    const response = await fetch(`/api/tasks/${taskId}`);
    if (!response.ok) {
      throw new Error(`Error fetching task details: ${response.statusText}`);
    }
    const taskDetails: Task = await response.json();
    return taskDetails;
  } catch (error) {
    console.error(error);
    return null;
  }*/
  const tasksList = useTasks.getState().tasksList;
  return tasksList.find((task: Task) => task.id === taskId) || null;
};
