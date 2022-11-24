import { Circle, Trash, CheckCircle } from 'phosphor-react';

import styles from './Tasks.module.scss';

interface TasksProps {
  completed?: boolean;
  taskContent: string;
  onDeleteTask: (id: string) => void;
  onMarkAsCompleteTask: (id: string) => void;
}

const Tasks = ({
  completed,
  taskContent,
  onDeleteTask,
  onMarkAsCompleteTask,
}: TasksProps) => {
  if (completed) {
    return (
      <div className={styles.taskCompleted}>
        <CheckCircle weight='fill' className={styles.checkIcon} size={24} />
        {taskContent}
        <Trash className={styles.trashIcon} size={24} />
      </div>
    );
  } else {
    return (
      <div className={styles.task}>
        <Circle className={styles.checkIcon} size={24} />
        <p className={styles.taskContent}>{taskContent}</p>
        <Trash className={styles.trashIcon} size={32} />
      </div>
    );
  }
};

export default Tasks;
