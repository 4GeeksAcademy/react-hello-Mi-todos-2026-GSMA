import React from "react";

export const TaskList = ({ tasks, deleteTasks }) => {
  return (
    <ul>
      {tasks.map((task, i) => (
        <li key={i} className="task">
          {task}
          <span
            className="delete"
            onClick={() => deleteTasks(i)}
          >
            ✖
          </span>
        </li>
      ))}
    </ul>
  );
};