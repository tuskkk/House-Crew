import { useTasks } from "../../../store/tasksStore";
import type {
  TaskCategoryData,
  TaskCategoryItem,
} from "../../../types/category";
import Accordion from "../../ui/Accordion";
import TaskButton from "./TaskButton";

type CategoriesListProps = {
  openEditTaskModal: (taskId: string) => void;
};

export default function CategoriesList({
  openEditTaskModal,
}: CategoriesListProps) {
  const categoriesList = useTasks((state) => state.categoriesList);
  const categoryFiltersChosen = useTasks(
    (state) => state.categoryFiltersChosen,
  );

  const filteredCategoriesList = categoriesList.filter(
    (categoryObject: TaskCategoryData) =>
      categoryFiltersChosen.length === 0 ||
      categoryFiltersChosen.includes(categoryObject.id),
  );

  return (
    <div className="px-3 py-4 lg:px-7">
      {filteredCategoriesList.map((categoryObject: TaskCategoryData) => (
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
      ))}
    </div>
  );
}
