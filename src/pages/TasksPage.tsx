// import styles from "./TasksPage.css";
import { mockTasks } from "../data/mockTasks";

/* export interface TasksPage.Props {
  prop?: string;
} */

export default function TasksPage(
  /*{prop = 'default value'}: TasksPage.Props*/
) {
  return (
    <div>
      {mockTasks.map((task) => (
        <div key={task.id}>
          <h2>{task.name}</h2>
          <p>{task.category.name}</p>
        </div>
      ))}
    </div>
  );
}
