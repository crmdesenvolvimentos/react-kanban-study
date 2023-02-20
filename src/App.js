import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

const pendente = "A Fazer";
const executando = "Executando";
const finalizado = "Finalizado";
const task_states = [pendente, executando, finalizado];

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((exitingTasks) => {
      return exitingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title={pendente}
          onAddTask={addTask}
          taskState={pendente}
          tasks={tasks.filter((t) => t.state === pendente)}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          task_states={task_states}
        />
        <TaskList
          title={executando}
          onAddTask={addTask}
          taskState={executando}
          tasks={tasks.filter((t) => t.state === executando)}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          task_states={task_states}
        />
        <TaskList
          title={finalizado}
          onAddTask={addTask}
          taskState={finalizado}
          tasks={tasks.filter((t) => t.state === finalizado)}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          task_states={task_states}
        />
      </div>
    </div>
  );
}
