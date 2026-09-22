import { create } from "zustand";

interface TasksState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categoryFiltersChosen: string[];
  setCategoryFilters: (filters: string[]) => void;
}

export const useTasks = create<TasksState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  categoryFiltersChosen: [],
  setCategoryFilters: (filters: string[]) =>
    set({ categoryFiltersChosen: filters }),
}));
