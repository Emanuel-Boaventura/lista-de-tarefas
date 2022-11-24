import Tasks from './Tasks';

import styles from './TodoList.module.scss';

const TodoList = () => {
  const content =
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.';

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
      <main className={styles.taskContainer}>
        <Tasks content={content} />
        <Tasks content={content} completed={true} />
      </main>
    </div>
  );
};

export default TodoList;
