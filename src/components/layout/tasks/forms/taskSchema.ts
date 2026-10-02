import { z } from "zod";
import type { Category } from "../../../../types/category";
import { cycleOptions, priorityOptions } from "../../../../types/task";

export const taskSchema = (categoriesList: Category[]) => {
  const mapCategoryIds = (categoriesList: Category[]) =>
    categoriesList.map((category: Category) => category.id);

  return z.object({
    category: z
      .enum(mapCategoryIds(categoriesList))
      .refine((value) => value !== "", "Category is required"),
    name: z
      .string()
      .min(3, "Task name must contain at least 3 characters")
      .max(32, "Task name is too long"),
    cycleDetails: z.enum(cycleOptions).optional(),
    dueDate: z
      .string()
      .refine(
        (value) => value === "" || /^\d{4}-\d{2}-\d{2}$/.test(value),
        "Invalid date",
      ),
    priority: z.enum(priorityOptions).nullable(),
    assigneeId: z.string().nullable(),
  });
};

export type TaskFormData = z.infer<ReturnType<typeof taskSchema>>;
