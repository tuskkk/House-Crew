import { useTasks } from "../../../store/tasksStore";
import type {
  TaskCategoryData,
  TaskCategoryItem,
} from "../../../types/category";
import Accordion from "../../ui/Accordion";
import TaskButton from "./TaskButton";

export default function TasksList() {
  const tasksList = useTasks((state) => state.tasksList);
  const categoryFiltersChosen = useTasks(
    (state) => state.categoryFiltersChosen,
  );

  const filteredTasksList = tasksList.filter(
    (categoryObject: TaskCategoryData) =>
      categoryFiltersChosen.length === 0 ||
      categoryFiltersChosen.includes(categoryObject.id),
  );

  return (
    <div className="px-3 py-4 lg:px-7">
      {filteredTasksList.map((categoryObject: TaskCategoryData) => (
        <Accordion
          key={categoryObject.id}
          title={categoryObject.name}
          initiallyOpen={categoryObject.initiallyOpen}
        >
          {/* Add onClick handler to open task modal */}
          {categoryObject.tasks.map((task: TaskCategoryItem) => (
            <TaskButton key={task.id} name={task.name} />
          ))}
        </Accordion>
      ))}
    </div>
  );
}
