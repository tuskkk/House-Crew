import { useState } from "react";
import AlertModel from "../../../ui/alerts/AlertModel";
import TaskForm from "./TaskForm";
import { useTasks } from "../../../../store/tasksStore";
import type { Category } from "../../../../types/category";
import type { TaskSuccessData } from "../../../../types/task";
import type { TaskFormData } from "./taskSchema";

type AddTaskFormProps = {
  closeForm: () => void;
  categoriesList: Category[];
};

const AddTaskForm = ({ closeForm, categoriesList }: AddTaskFormProps) => {
  const [successData, setSuccessData] = useState<TaskSuccessData>({
    isSuccessShown: false,
    taskName: null,
  });
  const addTask = useTasks((state) => state.addTask);

  const onSubmit = (data: TaskFormData) => {
    addTask({
      id: crypto.randomUUID(),
      category: {
        id: data.category,
        name:
          categoriesList.find(
            (category: Category) => category.id === data.category,
          )?.name || "",
      },
      name: data.name,
      details: {
        ...(data.cycleDetails && { cycleDetails: data.cycleDetails }),
        dueDate: data.dueDate ? data.dueDate : null,
        priority: data.priority ? data.priority : null,
        assigneeId: data.assigneeId ? data.assigneeId : null,
        statisticsDetails: {
          count: {
            general: 0,
            byTime: {},
          },
          completionPercentage: {
            general: 0,
            byTime: {},
          },
        },
      },
    });

    setSuccessData({
      ...successData,
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
          title={`The new task ${successData.taskName} has been added successfully`}
        />
      ) : (
        <TaskForm categoriesList={categoriesList} onSubmit={onSubmit} />
      )}
    </>
  );
};

export default AddTaskForm;
