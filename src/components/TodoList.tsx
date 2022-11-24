import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Tasks from './Tasks';

import styles from './TodoList.module.scss';

export interface Task {
  _id: string;
  content: string;
  completed: boolean;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      _id: uuid(),
      content: 'Primeira Task',
      completed: false,
    },
  ]);
  const [newTask, setNewTask] = useState('');

  const isNewTaskEmpty = newTask.length === 0;

  function markAsCompleteTask() {
    console.log('Completei essa');
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = tasks.filter(({ _id }) => {
      return _id !== taskToDelete;
    });

    setTasks(taskWithoutDeletedOne);
  }

  function handleNewTask(e: FormEvent) {
    e.preventDefault();

    setTasks([...tasks, { _id: uuid(), content: newTask, completed: true }]);
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
        {tasks.map((task) => (
          <Tasks
            key={task._id}
            taskData={task}
            onDeleteTask={deleteTask}
            onMarkAsCompleteTask={markAsCompleteTask}
          />
        ))}
      </main>
    </div>
  );
};

export default TodoList;
