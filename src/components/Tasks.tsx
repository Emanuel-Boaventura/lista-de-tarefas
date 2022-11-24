import { Circle, Trash, CheckCircle } from 'phosphor-react';

import styles from './Tasks.module.scss';

interface TasksProps {
  completed?: boolean;
  content: string;
}

const Tasks = ({ completed, content }: TasksProps) => {
  if (completed) {
    return (
      <div className={styles.taskCompleted}>
        <CheckCircle weight='fill' className={styles.checkIcon} size={24} />
        {content}
        <Trash className={styles.trashIcon} size={24} />
      </div>
    );
  } else {
    return (
      <div className={styles.task}>
        <Circle className={styles.checkIcon} size={24} />
        {content}
        <Trash className={styles.trashIcon} size={24} />
      </div>
    );
  }
};

export default Tasks;
