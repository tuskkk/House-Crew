import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import AlertModel from "../../ui/alerts/AlertModel";
import { useTasks } from "../../../store/tasksStore";
import type { CategorySuccessData } from "../../../types/category";

type AddCategoryFormProps = {
  closeForm: () => void;
};

const AddCategoryForm = ({ closeForm }: AddCategoryFormProps) => {
  const [successData, setSuccessData] = useState<CategorySuccessData>({
    isSuccessShown: false,
    categoryName: null,
  });

  const addCategory = useTasks((state) => state.addCategory);

  const categorySchema = z.object({
    name: z
      .string()
      .min(3, "Category name must contain at least 3 characters")
      .max(32, "Category name is too long"),
  });

  type AddCategoryFormData = z.infer<typeof categorySchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCategoryFormData>({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit = (data: AddCategoryFormData) => {
    addCategory({
      id: crypto.randomUUID(),
      name: data.name,
      tasks: [],
    });
    setSuccessData({
      ...successData,
      isSuccessShown: true,
      categoryName: data.name,
    });
    setTimeout(() => {
      closeForm();
    }, 3000);
  };

  return (
    <>
      {successData.isSuccessShown ? (
        <AlertModel
          alertType="success"
          title={`The new category ${successData.categoryName} has been added successfully`}
        />
      ) : (
        <form
          className="w-full flex items-center justify-between gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="h-26 flex-1">
            <Input label="New category name" {...register("name")} />
            <p className="h-4 text-xs text-overdue pt-1.5">
              {errors.name && errors.name.message}
            </p>
          </div>
          <Button type="submit">Save</Button>
        </form>
      )}
    </>
  );
};

export default AddCategoryForm;
