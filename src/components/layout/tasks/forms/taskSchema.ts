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
      .max(64, "Task name is too long"),
    cycleDetails: z
      .union([z.enum(cycleOptions), z.literal(""), z.null()])
      .transform((value) => (value === "" ? null : value))
      .optional(),
    dueDate: z
      .string()
      .refine(
        (value) => value === "" || /^\d{4}-\d{2}-\d{2}$/.test(value),
        "Invalid date",
      ),
    priority: z
      .union([z.enum(priorityOptions), z.literal(""), z.null()])
      .transform((value) => (value === "" ? null : value)),
    assigneeId: z.string().transform((value) => (value === "" ? null : value)),
  });
};

export type TaskFormInput = z.input<ReturnType<typeof taskSchema>>;
export type TaskFormData = z.output<ReturnType<typeof taskSchema>>;
