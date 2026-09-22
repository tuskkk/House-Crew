import { create } from "zustand";

interface TasksState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categoryFilters: string[];
  setCategoryFilters: (filters: string[]) => void;
}

export const useTasks = create<TasksState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  categoryFilters: [],
  setCategoryFilters: (filters: string[]) => set({ categoryFilters: filters }),
}));
