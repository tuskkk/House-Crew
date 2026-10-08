import Button from "../../../components/ui/Button";
import { Filter } from "./Filter";
import { useMemo } from "react";
import { useTasks } from "../../../store/tasksStore";
import { Plus } from "lucide-react";
import type {
  ModalType,
  Task,
  TaskDetailFilterType,
  TaskPersonDetails,
  Cycle,
  Priority,
} from "../../../types/task";
import { mockUsers } from "../../../data/mockUsers";

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
  const priorityFiltersChosen = useTasks(
    (state) => state.priorityFiltersChosen,
  );
  const setPriorityFilters = useTasks((state) => state.setPriorityFilters);
  const assigneeFiltersChosen = useTasks(
    (state) => state.assigneeFiltersChosen,
  );
  const setAssigneeFilters = useTasks((state) => state.setAssigneeFilters);

  const categories = useMemo(
    () =>
      categoriesList.map(({ id, name }) => ({
        id,
        name,
      })),
    [categoriesList],
  );
  const detailsOptions = <T extends string>(
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
  const cycleOptions = useMemo(
    () => detailsOptions<Cycle>("cycleDetails"),
    [tasksList],
  );
  const priorityOptions = useMemo(
    () => detailsOptions<Priority>("priority"),
    [tasksList],
  );
  const assigneeOptions = useMemo(
    () =>
      detailsOptions<string>("assigneeId").map((option) => {
        const user = mockUsers.find(
          (user: TaskPersonDetails) => user.id === option.id,
        );
        return {
          id: option.id,
          name: user ? user.name : option.name,
        };
      }),
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
      <Filter
        filterName="Priority"
        options={priorityOptions}
        selectedOptions={priorityFiltersChosen}
        submitOptions={setPriorityFilters}
      />
      {assigneeOptions.length ? (
        <Filter
          filterName="Assignee"
          options={assigneeOptions}
          selectedOptions={assigneeFiltersChosen}
          submitOptions={setAssigneeFilters}
        />
      ) : null}
    </div>
  );
}
