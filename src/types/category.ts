type Category = {
  id: string;
  name: string;
  color: string;
};

type TaskCategoryItem = {
  id: string;
  category: Category;
  name: string;
};

type TaskCategoryItemInput = {
  id: string;
  category: Omit<Category, "color">;
  name: string;
};

type TaskCategoryData = {
  id: string;
  name: string;
  initiallyOpen?: boolean;
  color: string;
  tasks: TaskCategoryItem[] | [];
};

type TaskCategoryInput = {
  id: string;
  name: string;
  initiallyOpen?: boolean;
  tasks: TaskCategoryItemInput[] | [];
};

type CategorySuccessData = {
  isSuccessShown: boolean;
  categoryName: string | null;
};

export type {
  Category,
  TaskCategoryItem,
  TaskCategoryData,
  TaskCategoryInput,
  CategorySuccessData,
};
