import { create } from "zustand";
import type { TaskCategoryData } from "../types/category";
import { categories } from "../data/mockTasks"; // Mock data for initial state

interface TasksState {
  tasksList: TaskCategoryData[];
  setCategories: (categories: TaskCategoryData[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categoryFiltersChosen: string[];
  setCategoryFilters: (filters: string[]) => void;
}

export const useTasks = create<TasksState>((set) => ({
  tasksList: categories, // Initialize with mock data
  setCategories: (categories: TaskCategoryData[]) =>
    set({ tasksList: categories }),
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  categoryFiltersChosen: [],
  setCategoryFilters: (filters: string[]) =>
    set({ categoryFiltersChosen: filters }),
}));
