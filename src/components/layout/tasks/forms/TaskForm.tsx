import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import Select from "../../../ui/Select";
import type { Category } from "../../../../types/category";
import type {
  Task,
  Cycle,
  Priority,
  TaskPersonDetails,
} from "../../../../types/task";
import type { TaskFormData } from "./taskSchema";
import { taskSchema } from "./taskSchema";
import { cycleOptions, priorityOptions } from "../../../../types/task";
import { mockUsers } from "../../../../data/mockUsers";

type TaskFormProps = {
  categoriesList: Category[];
  onSubmit: (data: TaskFormData) => void;
  task?: Task;
};

const TaskForm = ({ categoriesList, task, onSubmit }: TaskFormProps) => {
  const mapSelectOptions = (label: string, value: string) => ({ label, value });
  const categorySelectOptions = categoriesList.map((category: Category) =>
    mapSelectOptions(category.name, category.id),
  );
  const cycleSelectOptions = cycleOptions.map((cycleOption: Cycle) =>
    mapSelectOptions(cycleOption, cycleOption),
  );
  const prioritySelectOptions = priorityOptions.map(
    (priorityOption: Priority) =>
      mapSelectOptions(priorityOption, priorityOption),
  );
  const usersSelectOptions = [
    { label: "None", value: "" },
    ...mockUsers.map((user: TaskPersonDetails) =>
      mapSelectOptions(user.name, user.id),
    ),
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema(categoriesList)),
    ...(task && {
      defaultValues: {
        category: task?.category.id,
        name: task?.name,
        cycleDetails: task?.details.cycleDetails,
        dueDate: task?.details.dueDate ?? "",
        priority: task?.details.priority,
        assigneeId: task?.details.assigneeId ?? "",
      },
    }),
  });

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="h-21">
        <Input label="Task name *" {...register("name")} />
        <p className="h-4 text-xs text-overdue pt-1.5">
          {errors.name && errors.name.message}
        </p>
      </div>
      <div className="h-21 flex items-center justify-between gap-4">
        <div className="flex-1">
          <Select
            label="Category *"
            options={categorySelectOptions}
            {...register("category")}
          />
          <p className="h-4 text-xs text-overdue pt-1.5">
            {errors.category && errors.category.message}
          </p>
        </div>
        <div className="flex-1">
          <Select
            label="Cycle"
            options={cycleSelectOptions}
            {...register("cycleDetails")}
          />
          <p className="h-4 text-xs text-overdue pt-1.5">
            {errors.cycleDetails && errors.cycleDetails.message}
          </p>
        </div>
      </div>
      <div className="h-21 flex items-center justify-between gap-4">
        <div className="flex-1">
          <Input type="date" label="Due date" {...register("dueDate")} />
          <p className="h-4 text-xs text-overdue pt-1.5">
            {errors.dueDate && errors.dueDate.message}
          </p>
        </div>
        <div className="flex-1">
          <Select
            label="Priority"
            options={prioritySelectOptions}
            {...register("priority")}
          />
          <p className="h-4 text-xs text-overdue pt-1.5">
            {errors.priority && errors.priority.message}
          </p>
        </div>
      </div>
      <div className="h-21">
        <Select
          label="Assignee"
          options={usersSelectOptions}
          {...register("assigneeId")}
        />
        <p className="h-4 text-xs text-overdue pt-1.5">
          {errors.assigneeId && errors.assigneeId.message}
        </p>
      </div>
      <div className="flex items-start justify-between pt-2">
        <span className="text-text-primary text-sm">* - required</span>
        <Button type="submit" className="w-28">
          Save
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
