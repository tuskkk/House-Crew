import { useTasks } from "../../../store/tasksStore";
import FilterBadge from "./FilterBadge";
import type { Cycle, Priority } from "../../../types/task";
import type { ReactNode } from "react";

type FilterOption<T extends string = string> = {
  id: T;
  name: string;
};

interface ActiveFiltersProps {
  categoriesOptions: FilterOption[];
  cycleOptions: FilterOption<Cycle>[];
  priorityOptions: FilterOption<Priority>[];
  assigneeOptions: FilterOption[];
}

export default function ActiveFilters({
  categoriesOptions,
  cycleOptions,
  priorityOptions,
  assigneeOptions,
}: ActiveFiltersProps) {
  const categoryFiltersChosen = useTasks(
    (state) => state.categoryFiltersChosen,
  );
  const setCategoryFilters = useTasks((state) => state.setCategoryFilters);
  const cycleFiltersChosen = useTasks((state) => state.cycleFiltersChosen);
  const setCycleFilters = useTasks((state) => state.setCycleFilters);
  const priorityFiltersChosen = useTasks(
    (state) => state.priorityFiltersChosen,
  );
  const setPriorityFilters = useTasks((state) => state.setPriorityFilters);
  const assigneeFiltersChosen = useTasks(
    (state) => state.assigneeFiltersChosen,
  );
  const setAssigneeFilters = useTasks((state) => state.setAssigneeFilters);

  const handleRenderFilterBadges = <T extends string>(
    label: string,
    options: FilterOption<T>[],
    filtersArray: T[],
    filterSetter: (filters: T[]) => void,
  ): ReactNode => {
    if (filtersArray.length === 0) {
      return null;
    }
    return filtersArray.map((filter) => {
      const option = options.find((option) => option.id === filter);
      return (
        <FilterBadge
          key={filter}
          name={option?.name ?? filter}
          label={label}
          onClick={() => filterSetter(filtersArray.filter((f) => f !== filter))}
        />
      );
    });
  };

  return (
    <div className="flex items-start justify-start flex-1 gap-4 flex-wrap">
      {handleRenderFilterBadges(
        "Category",
        categoriesOptions,
        categoryFiltersChosen,
        setCategoryFilters,
      )}
      {handleRenderFilterBadges(
        "Cycle",
        cycleOptions,
        cycleFiltersChosen,
        setCycleFilters,
      )}
      {handleRenderFilterBadges(
        "Priority",
        priorityOptions,
        priorityFiltersChosen,
        setPriorityFilters,
      )}
      {handleRenderFilterBadges(
        "Assignee",
        assigneeOptions,
        assigneeFiltersChosen,
        setAssigneeFilters,
      )}
    </div>
  );
}
