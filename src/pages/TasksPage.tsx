import { PageTitle } from "../components/ui/PageTitle";
import SearchBar from "../components/ui/SearchBar";
import Button from "../components/ui/Button";
import FilterButton from "../components/layout/filters/FilterButton";
import TasksList from "../components/layout/tasks/TasksList";
import Modal from "../components/ui/Modal";
import AddCategoryForm from "../components/layout/tasks/AddCategoryForm";
import AddTaskForm from "../components/layout/tasks/AddTaskForm";
import { useState, useMemo } from "react";
import { useTasks } from "../store/tasksStore";
import { Plus } from "lucide-react";
import type { ModalType } from "../types/task";

export default function TasksPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const tasksList = useTasks((state) => state.tasksList);
  const searchQuery = useTasks((state) => state.searchQuery);
  const setSearchQuery = useTasks((state) => state.setSearchQuery);
  const categoryFiltersChosen = useTasks(
    (state) => state.categoryFiltersChosen,
  );
  const setCategoryFilters = useTasks((state) => state.setCategoryFilters);
  const categories = useMemo(
    () =>
      tasksList.map(({ id, name }) => ({
        id,
        name,
      })),
    [tasksList],
  );
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
          <div className="flex items-center justify-start flex-1 gap-2 md:gap-4">
            <FilterButton
              filterName="Category"
              options={categories}
              selectedOptions={categoryFiltersChosen}
              submitOptions={setCategoryFilters}
            />
          </div>
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
        </div>
        <TasksList />
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
    </div>
  );
}
