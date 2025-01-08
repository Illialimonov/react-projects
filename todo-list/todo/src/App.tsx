import { FC, ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";
import "./App.css";
import Task from "./ccomponenets/Task";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    console.log(newTask);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="input container">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />

          <input
            type="number"
            value={deadline}
            placeholder="Deadline (days)..."
            name="deadline"
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList"></div>
      <div className="todoList">
        {todo.map((task: ITask, key: number) => {
          return (
            <Task
              key={key}
              taskName={task.taskName}
              deadline={task.deadline}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
