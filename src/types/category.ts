type Category = {
  id: string;
  name: string;
};

type TaskCategoryItem = {
  id: string;
  category: Category;
  name: string;
};

type TaskCategoryData = {
  id: string;
  name: string;
  initiallyOpen?: boolean;
  tasks: TaskCategoryItem[] | [];
};

type CategorySuccessData = {
  isSuccessShown: boolean;
  categoryName: string | null;
};

export type {
  Category,
  TaskCategoryItem,
  TaskCategoryData,
  CategorySuccessData,
};
