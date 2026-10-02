import { useState } from "react";
import AlertModel from "../../../ui/alerts/AlertModel";
import TaskForm from "./TaskForm";
import { useTasks } from "../../../../store/tasksStore";
import type { Category } from "../../../../types/category";
import type { Task, TaskSuccessData } from "../../../../types/task";
import type { TaskFormData } from "./taskSchema";

type EditTaskFormProps = {
  closeForm: () => void;
  categoriesList: Category[];
  task: Task;
};

const EditTaskForm = ({
  closeForm,
  categoriesList,
  task,
}: EditTaskFormProps) => {
  const [successData, setSuccessData] = useState<TaskSuccessData>({
    isSuccessShown: false,
    taskName: null,
  });

  const updateTask = useTasks((state) => state.updateTask);

  const onSubmit = (data: TaskFormData) => {
    updateTask({
      ...task,
      category: {
        id: data.category,
        name:
          categoriesList.find(
            (category: Category) => category.id === data.category,
          )?.name ?? "",
      },
      name: data.name,
      details: {
        ...task.details,
        ...(data.cycleDetails
          ? { cycleDetails: data.cycleDetails }
          : { cycleDetails: undefined }),
        dueDate: data.dueDate || null,
        priority: data.priority || null,
        assigneeId: data.assigneeId || null,
      },
    });

    setSuccessData({
      isSuccessShown: true,
      taskName: data.name,
    });

    setTimeout(() => {
      closeForm();
    }, 5000);
  };

  return (
    <>
      {successData.isSuccessShown ? (
        <AlertModel
          alertType="success"
          title={`The task ${successData.taskName} has been updated successfully`}
          description="Your task details have been saved."
        />
      ) : (
        <TaskForm
          categoriesList={categoriesList}
          task={task}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default EditTaskForm;
