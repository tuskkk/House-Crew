import { create } from "zustand";
import type { TaskCategoryData } from "../types/category";
import type { Task } from "../types/task";
import { categories } from "../data/mockTasks"; // Mock data for initial state

interface TasksState {
  tasksList: TaskCategoryData[];
  activeTask: Task | null;
  /* save for the moment when tasksList or categories will be taken from API: setCategories: (categories: TaskCategoryData[]) => void;*/
  setActiveTask: (task: Task | null) => void;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  addCategory: (category: TaskCategoryData) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categoryFiltersChosen: string[];
  setCategoryFilters: (filters: string[]) => void;
}

export const useTasks = create<TasksState>((set) => ({
  tasksList: categories, // Initialize with mock data
  /* save for the moment when tasksList or categories will be taken from API:setCategories: (categories: TaskCategoryData[]) =>
    set({ tasksList: categories }), */
  activeTask: null,
  setActiveTask: (task: Task | null) => set({ activeTask: task }),
  addTask: (task: Task) =>
    set((state) => ({
      tasksList: state.tasksList.map((category) =>
        category.id === task.category.id
          ? {
              ...category,
              tasks: [...category.tasks, task],
            }
          : category,
      ),
    })),
  updateTask: (updatedTask: Task) =>
    set((state) => ({
      tasksList: state.tasksList.map((category) =>
        category.id === updatedTask.category.id
          ? {
              ...category,
              tasks: category.tasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task,
              ),
            }
          : category,
      ),
    })),
  addCategory: (category: TaskCategoryData) =>
    set((state) => ({
      tasksList: [...state.tasksList, category],
    })),
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  categoryFiltersChosen: [],
  setCategoryFilters: (filters: string[]) =>
    set({ categoryFiltersChosen: filters }),
}));
