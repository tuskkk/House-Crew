import { PageTitle } from "../components/ui/PageTitle";
import SearchBar from "../components/ui/SearchBar";
import Button from "../components/ui/Button";
import FilterButton from "../components/layout/filters/FilterButton";
import TasksList from "../components/layout/tasks/TasksList";
import Modal from "../components/ui/Modal";
import AddCategoryForm from "../components/layout/tasks/AddCategoryForm";
import { useState } from "react";
import { useTasks } from "../store/tasksStore";
import { Plus } from "lucide-react";
import { categories } from "../data/mockCategories";
import type { ModalType } from "../types/task";

/* export interface TasksPage.Props {
  prop?: string;
} */

export default function TasksPage(
  /*{prop = 'default value'}: TasksPage.Props*/
) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const searchQuery = useTasks((state) => state.searchQuery);
  const setSearchQuery = useTasks((state) => state.setSearchQuery);
  const categoryFiltersChosen = useTasks(
    (state) => state.categoryFiltersChosen,
  );
  const setCategoryFilters = useTasks((state) => state.setCategoryFilters);
  return (
    <div className="w-full">
      <PageTitle name="Tasks" />
      <section className="bg-white rounded-sm shadow border-disabled">
        <div className="w-full flex items-center justify-between gap-4 border-b border-b-disabled px-7 py-4">
          <SearchBar
            placeholder="Search Tasks..."
            query={searchQuery}
            setQuery={setSearchQuery}
          />
          <Button
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
        <div className="flex items-center justify-between gap-4 border-b border-b-disabled px-7 py-4">
          <div className="w-full flex items-center justify-start gap-4">
            <FilterButton
              filterName="Category"
              options={categories}
              selectedOptions={categoryFiltersChosen}
              submitOptions={setCategoryFilters}
            />
          </div>
          <Button
            className="w-48 whitespace-nowrap"
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
    </div>
  );
}
