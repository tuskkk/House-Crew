type Category = {
  id: string;
  name: string;
};

type TaskCategoryData = {
  id: string;
  name: string;
  tasks: string[];
};

export type { Category, TaskCategoryData };
