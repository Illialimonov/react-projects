import React from "react";

interface Props {
  taskName: string;
  deadline: number;
  completeTask(task: string): void;
}

const Task = ({ taskName, deadline, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{taskName}</span>
        <span>{deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Task;
