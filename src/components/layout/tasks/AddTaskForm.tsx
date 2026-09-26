import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { useTasks } from "../../../store/tasksStore";
import type { Category } from "../../../types/category";
import type { Cycle, Priority, TaskPersonDetails } from "../../../types/task";
import { cycleOptions, priorityOptions } from "../../../types/task";
import { mockUsers } from "../../../data/mockUsers";

type AddTaskFormProps = {
  closeForm: () => void;
  categoriesList: Category[];
};

const AddTaskForm = ({ closeForm, categoriesList }: AddTaskFormProps) => {
  const addTask = useTasks((state) => state.addTask);

  const categoryIds = categoriesList.map((category: Category) => category.id);
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
  const usersSelectOptions = mockUsers.map((user: TaskPersonDetails) =>
    mapSelectOptions(user.name, user.id),
  );

  const taskSchema = z.object({
    category: z.enum(categoryIds),
    name: z
      .string()
      .nonempty()
      .min(3, "Task name must contain at least 3 characters")
      .max(32, "Task name is too long"),
    cycleDetails: z.enum(cycleOptions).optional(),
    dueDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date")
      .optional(),
    priority: z.enum(priorityOptions).nullable(),
    assigneeId: z.string().nullable(),
  });

  type AddTaskFormData = z.infer<typeof taskSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddTaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: AddTaskFormData) => {
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
        assigneeId: data.priority ? data.priority : null,
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

    closeForm();
  };

  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="h-27">
        <Select
          label="Category"
          options={categorySelectOptions}
          {...register("category")}
        />
        <p className="h-4 text-xs text-overdue pt-1.5">
          {errors.category && errors.category.message}
        </p>
      </div>

      <div className="h-27">
        <Input label="Task name" {...register("name")} />
        <p className="h-4 text-xs text-overdue pt-1.5">
          {errors.name && errors.name.message}
        </p>
      </div>

      <div className="h-27">
        <Select
          label="Cycle"
          options={cycleSelectOptions}
          {...register("cycleDetails")}
        />
        <p className="h-4 text-xs text-overdue pt-1.5">
          {errors.cycleDetails && errors.cycleDetails.message}
        </p>
      </div>

      <div className="h-27">
        {/* Implement calendar */}
        <Input type="date" label="Due date" {...register("dueDate")} />
        <p className="h-4 text-xs text-overdue pt-1.5">
          {errors.dueDate && errors.dueDate.message}
        </p>
      </div>

      <div className="h-27">
        <Select
          label="Priority"
          options={prioritySelectOptions}
          {...register("priority")}
        />
        <p className="h-4 text-xs text-overdue pt-1.5">
          {errors.priority && errors.priority.message}
        </p>
      </div>

      <div className="h-27">
        <Select
          label="Assignee"
          options={usersSelectOptions}
          {...register("assigneeId")}
        />
        <p className="h-4 text-xs text-overdue pt-1.5">
          {errors.assigneeId && errors.assigneeId.message}
        </p>
      </div>

      <div className="flex justify-end pt-2">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
