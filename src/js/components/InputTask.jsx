import React from "react";

export const InputTask = ({ inputvalue, setInputvalue, addTasks, setError }) => {
  return (
    <input
      type="text"
      placeholder="Escribir mis tareas"
      value={inputvalue}
      onChange={(e) => {
        setInputvalue(e.target.value);
        setError("");
      }}
      onKeyDown={addTasks}
    />
  );
};