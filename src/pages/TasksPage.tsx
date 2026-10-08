import { PageTitle } from "../components/ui/PageTitle";
import SearchBar from "../components/ui/SearchBar";
import Button from "../components/ui/Button";
import CategoriesList from "../components/layout/tasks/CategoriesList";
import Modal from "../components/ui/Modal";
import AddCategoryForm from "../components/layout/tasks/forms/AddCategoryForm";
import AddTaskForm from "../components/layout/tasks/forms/AddTaskForm";
import EditTaskForm from "../components/layout/tasks/forms/EditTaskForm";
import TasksFilters from "../components/layout/filters/TasksFilters";
import { useState, useMemo } from "react";
import { useTasks } from "../store/tasksStore";
import { Plus } from "lucide-react";
import type { ModalType, Task } from "../types/task";
import { fetchTaskDetails } from "../services/taskDetails";

export default function TasksPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const categoriesList = useTasks((state) => state.categoriesList);
  const searchQuery = useTasks((state) => state.searchQuery);
  const activeTask = useTasks((state) => state.activeTask);
  const setSearchQuery = useTasks((state) => state.setSearchQuery);
  const setActiveTask = useTasks((state) => state.setActiveTask);
  const categories = useMemo(
    () =>
      categoriesList.map(({ id, name }) => ({
        id,
        name,
      })),
    [categoriesList],
  );

  const openEditTaskModal = (taskId: string) => {
    setActiveTask(fetchTaskDetails(taskId));
    setActiveModal("editTask");
  };
  const closeEditTaskModal = () => {
    setActiveModal(null);
    setActiveTask(null);
  };
  return (
    <div className="w-full">
      <PageTitle name="Tasks" />
      <section className="bg-white rounded-sm shadow border-disabled">
        <div className="w-full flex flex-col items-start justify-between gap-4 border-b border-b-disabled px-3 py-4 sm:flex-row lg:px-7">
          <SearchBar
            className="w-full sm:w-auto"
            placeholder="Search Tasks..."
            query={searchQuery}
            setQuery={setSearchQuery}
          />
          <Button
            onClick={() => setActiveModal("addTask")}
            children={
              <div className="flex items-center justify-center gap-1">
                <Plus
                  size={20}
                  color="white"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="text-sm tracking-wide">Add Task</span>
              </div>
            }
          />
        </div>
        <div className="flex items-center justify-between gap-2 border-b border-b-disabled px-3 py-4 md:gap-4 lg:px-7">
          <TasksFilters setActiveModal={setActiveModal} />
        </div>
        <CategoriesList openEditTaskModal={openEditTaskModal} />
      </section>
      {activeModal === "addCategory" && (
        <Modal title="Add New Category" onClose={() => setActiveModal(null)}>
          <AddCategoryForm closeForm={() => setActiveModal(null)} />
        </Modal>
      )}
      {activeModal === "addTask" && (
        <Modal title="Add New Task" onClose={() => setActiveModal(null)}>
          <AddTaskForm
            categoriesList={categories}
            closeForm={() => setActiveModal(null)}
          />
        </Modal>
      )}
      {activeModal === "editTask" && (
        <Modal title="Edit Task" onClose={() => setActiveModal(null)}>
          <EditTaskForm
            categoriesList={categories}
            closeForm={() => closeEditTaskModal()}
            task={activeTask as Task}
          />
        </Modal>
      )}
    </div>
  );
}
