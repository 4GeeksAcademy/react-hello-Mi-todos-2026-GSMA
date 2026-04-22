import React, { useState } from "react";
import { InputTask } from "./InputTask";
import { TaskList } from "./TaskList";

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputvalue, setInputvalue] = useState("");
  const [error, setError] = useState("");

  const addTasks = (e) => {
    if (e.key === "Enter") {
      if (inputvalue === "") {
        setError("No puede estar vacío");
        return;
      }
      if (inputvalue.length < 3) {
        setError("Debe tener al menos 3 caracteres");
        return;
      }

      setTasks([...tasks, inputvalue]);
      setInputvalue("");
      setError("");
    }
  };

  const deleteTasks = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="title">My Todo List</h1>

      <InputTask
        inputvalue={inputvalue}
        setInputvalue={setInputvalue}
        addTasks={addTasks}
        setError={setError}
      />

      {error && <p className="error">{error}</p>}

      <TaskList tasks={tasks} deleteTasks={deleteTasks} />

      <p className="item">
        {tasks.length === 0
          ? "0 item"
          : `${tasks.length} item${tasks.length > 1 ? "s" : ""} left`}
      </p>
    </div>
  );
};