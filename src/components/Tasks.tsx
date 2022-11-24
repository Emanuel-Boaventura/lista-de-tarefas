import { Circle, Trash, CheckCircle } from 'phosphor-react';

import styles from './Tasks.module.scss';
import { Task } from './TodoList';

interface TasksProps {
  taskData: Task;
  onDeleteTask: (id: string) => void;
  onComplete: (id: string) => void;
}

const Tasks = ({
  taskData,
  onDeleteTask,
  onComplete,
}: TasksProps) => {
  function handleDeleteTask() {
    onDeleteTask(taskData._id);
  }

  function handleSetAsMarked() {
    onComplete(taskData._id);
  }

  return (
    <div className={`${styles.task} ${taskData.completed && styles.completed}`}>
      <button
        onClick={handleSetAsMarked}
        type='button'
        className={styles.checkIcon}
      >
        {taskData.completed ? (
          <CheckCircle weight='fill' size={24} />
        ) : (
          <Circle size={24} />
        )}
      </button>

      <p className={styles.taskContent}>{taskData.content}</p>

      <button
        type='button'
        onClick={handleDeleteTask}
        className={styles.trashIcon}
      >
        <Trash size={24} />
      </button>
    </div>
  );
};

export default Tasks;
