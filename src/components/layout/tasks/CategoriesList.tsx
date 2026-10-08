import { useMemo } from "react";
import { useTasks } from "../../../store/tasksStore";
import type {
  TaskCategoryData,
  TaskCategoryItem,
} from "../../../types/category";
import type { Task } from "../../../types/task";
import Accordion from "../../ui/Accordion";
import TaskButton from "./TaskButton";

type CategoriesListProps = {
  openEditTaskModal: (taskId: string) => void;
};

export default function CategoriesList({
  openEditTaskModal,
}: CategoriesListProps) {
  const categoriesList = useTasks((state) => state.categoriesList);
  const tasksList = useTasks((state) => state.tasksList);
  const categoryFiltersChosen = useTasks(
    (state) => state.categoryFiltersChosen,
  );
  const cycleFiltersChosen = useTasks((state) => state.cycleFiltersChosen);

  const filteredTaskIds = useMemo(
    () =>
      tasksList
        .filter((task: Task) => {
          const matchesCategory =
            categoryFiltersChosen.length === 0 ||
            categoryFiltersChosen.includes(task.category.id);

          const matchesCycle =
            cycleFiltersChosen.length === 0 ||
            (task.details.cycleDetails &&
              cycleFiltersChosen.includes(task.details.cycleDetails));

          return matchesCategory && matchesCycle;
        })
        .map((task) => task.id),
    [tasksList, categoryFiltersChosen, cycleFiltersChosen],
  );

  const filteredCategoriesList = useMemo(
    () =>
      categoriesList
        .map((category) => ({
          ...category,
          tasks: category.tasks.filter((task) =>
            filteredTaskIds.includes(task.id),
          ),
        }))
        .filter((category) => category.tasks.length > 0),
    [categoriesList, filteredTaskIds],
  );

  return (
    <div className="px-3 py-4 lg:px-7">
      {filteredCategoriesList.length ? (
        filteredCategoriesList.map((categoryObject: TaskCategoryData) => (
          <Accordion
            key={categoryObject.id}
            title={categoryObject.name}
            initiallyOpen={categoryObject.initiallyOpen}
          >
            {/* Add onClick handler to open task modal */}
            {categoryObject.tasks.map((task: TaskCategoryItem) => (
              <TaskButton
                key={task.id}
                name={task.name}
                onClick={() => openEditTaskModal(task.id)}
              />
            ))}
          </Accordion>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 py-8">
          <p className="text-lg text-text-secondary text-semibold">
            No tasks found for the selected filters.
          </p>
          <p className="text-text-secondary">
            Try adjusting your filters or adding new tasks.
          </p>
        </div>
      )}
    </div>
  );
}
