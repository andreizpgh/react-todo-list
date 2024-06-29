import { useState } from "react";
import TasksList from "./TasksList";
import Input from "./Input"

export default function TodoList() {
  const [tasks, updateTasks] = useState([]);

  function handleInput(input) {
    const newTaskList = [...tasks, input];
    updateTasks(newTaskList);
  }

  function handleEdit(i, input) {
    const newTaskList = [...tasks];
    if (input) {
      newTaskList[i] = input;
      updateTasks(newTaskList);
    }
  }

  function handleDelete(i) {
    const newTaskList = [...tasks];
    newTaskList.splice(i, 1);
    updateTasks(newTaskList);
  }

  function handleDeleteAll() {
    updateTasks([]);
  }

  return (
    <div className="app">
      <h1 className="title">
        <span style={{ color: "red" }}>^Todo</span>
        <span>List</span>
      </h1>
      <Input onInput={handleInput} />
      <TasksList list={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
}
