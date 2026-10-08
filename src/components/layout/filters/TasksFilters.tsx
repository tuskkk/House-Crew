import Button from "../../../components/ui/Button";
import { Filter } from "./Filter";
import { useMemo } from "react";
import { useTasks } from "../../../store/tasksStore";
import { Plus } from "lucide-react";
import type { ModalType, Cycle, Priority, Task } from "../../../types/task";

interface TasksFiltersProps {
  setActiveModal: (modalType: ModalType) => void;
}

export default function TasksFilters({ setActiveModal }: TasksFiltersProps) {
  const categoriesList = useTasks((state) => state.categoriesList);
  const tasksList = useTasks((state) => state.tasksList);
  const categoryFiltersChosen = useTasks(
    (state) => state.categoryFiltersChosen,
  );
  const setCategoryFilters = useTasks((state) => state.setCategoryFilters);
  const cycleFiltersChosen = useTasks((state) => state.cycleFiltersChosen);
  const setCycleFilters = useTasks((state) => state.setCycleFilters);

  const categories = useMemo(
    () =>
      categoriesList.map(({ id, name }) => ({
        id,
        name,
      })),
    [categoriesList],
  );
  const cycleOptions = useMemo(
    () =>
      tasksList.reduce<{ id: Cycle; name: Cycle }[]>((acc, task: Task) => {
        const cycle = task.details.cycleDetails;

        if (cycle && !acc.some((option) => option.id === cycle)) {
          acc.push({
            name: cycle,
            id: cycle,
          });
        }

        return acc;
      }, []),
    [tasksList],
  );
  return (
    <div className="flex items-center justify-start flex-1 gap-2 md:gap-6">
      <Filter
        filterName="Category"
        options={categories}
        selectedOptions={categoryFiltersChosen}
        submitOptions={setCategoryFilters}
        dropdownChildren={
          <Button
            className="whitespace-nowrap"
            onClick={() => setActiveModal("addCategory")}
            children={
              <div className="flex items-center justify-center gap-1">
                <Plus
                  size={20}
                  color="white"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="text-sm tracking-wide">Add Category</span>
              </div>
            }
          />
        }
      />
      <Filter
        filterName="Cycle"
        options={cycleOptions}
        selectedOptions={cycleFiltersChosen}
        submitOptions={setCycleFilters}
      />
    </div>
  );
}
