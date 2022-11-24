import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Tasks from './Tasks';

import styles from './TodoList.module.scss';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      taskID: uuid(),
      taskContent: 'PrimeiraTask',
    },
  ]);
  const [newTask, setNewTask] = useState('');

  const isNewTaskEmpty = newTask.length === 0;

  function markAsCompleteTask() {
    console.log('Completei essa');
  }

  function deleteTask() {
    console.log('Deleta essa');
  }

  function handleNewTask(e: FormEvent) {
    e.preventDefault();

    setTasks([...tasks, { taskID: uuid(), taskContent: newTask }]);
    setNewTask('');
  }

  function handleTaskContentChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  return (
    <div className={styles.content}>
      <form onSubmit={handleNewTask}>
        <input
          onChange={handleTaskContentChange}
          value={newTask}
          placeholder='Adicione uma nova tarefa'
          type='text'
        />
        <button disabled={isNewTaskEmpty} type='submit'>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <header>
        <p className={styles.createdTasks}>
          Tarefas criadas{' '}
          <span className={styles.createdTasksNumber}>{tasks.length}</span>
        </p>
        <p className={styles.completedTasks}>
          Concluidas{' '}
          <span className={styles.completedTasksNumber}>
            {} de {tasks.length}
          </span>
        </p>
      </header>
      <main className={styles.taskContainer}>
        {tasks.map(({ taskContent, taskID }) => {
          return (
            <Tasks
              key={taskID}
              taskContent={taskContent}
              onDeleteTask={deleteTask}
              onMarkAsCompleteTask={markAsCompleteTask}
            />
          );
        })}
      </main>
    </div>
  );
};

export default TodoList;
