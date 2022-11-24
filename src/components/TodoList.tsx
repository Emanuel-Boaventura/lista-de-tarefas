import { PlusCircle, ClipboardText } from 'phosphor-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Tasks from './Tasks';

import styles from './TodoList.module.scss';

export interface Task {
  _id: string;
  content: string;
  completed: boolean;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const completedTasksNumber = tasks.reduce(
    (accumulator: number, task: Task) => {
      if (task.completed) return accumulator + 1;
      return accumulator;
    },
    0
  );

  function onComplete(id: string) {
    setTasks((state) =>
      state.map((task) => {
        if (task._id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  const isNewTaskEmpty = newTask.length === 0;

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = tasks.filter(({ _id }) => {
      return _id !== taskToDelete;
    });

    setTasks(taskWithoutDeletedOne);
  }

  function handleNewTask(e: FormEvent) {
    e.preventDefault();

    setTasks([...tasks, { _id: uuid(), content: newTask, completed: false }]);
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
            {completedTasksNumber} de {tasks.length}
          </span>
        </p>
      </header>
      <main className={styles.taskContainer}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Tasks
              key={task._id}
              taskData={task}
              onDeleteTask={deleteTask}
              onComplete={onComplete}
            />
          ))
        ) : (
          <div className={styles.noTasks}>
            <ClipboardText size={56} />
            <p className={styles.msgOne}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p className={styles.msgTwo}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default TodoList;
