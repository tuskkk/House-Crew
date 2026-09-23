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
  tasks: TaskCategoryItem[];
};

export type { Category, TaskCategoryItem, TaskCategoryData };
