import { Trash } from 'phosphor-react';

import styles from './TodoList.module.scss';

const TodoList = () => {
  const content =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, facilis.';

  return (
    <div className={styles.content}>
      <header>
        <p className={styles.createdTasks}>
          Tarefas criadas <span className={styles.createdTasksNumber}>5</span>
        </p>
        <p className={styles.completedTasks}>
          Concluidas <span className={styles.completedTasksNumber}>2 de 5</span>
        </p>
      </header>
      <div className={styles.task}>
        <input type='checkbox' />
        {content}
        <Trash />
      </div>
      <div className={styles.task}>
        <input type='checkbox' />
        {content}
        <Trash />
      </div>
      <div className={styles.task}>
        <input type='checkbox' />
        {content}
        <Trash />
      </div>
      <div className={styles.completedTask}>
        <input type='checkbox' />
        {content}
        <Trash />
      </div>
      <div className={styles.completedTask}>
        <input type='checkbox' />
        {content}
        <Trash />
      </div>
    </div>
  );
};

export default TodoList;
