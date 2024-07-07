import { useState } from "react";
import TasksList from "./TasksList";
import Input from "./Input";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  function handleInput(input) {
    const newTaskList = [...tasks, input];
    setTasks(newTaskList);
  }

  function handleEdit(i, input) {
    const newTaskList = [...tasks];
    if (input) {
      newTaskList[i] = input;
      setTasks(newTaskList);
    }
  }

  function handleDelete(i) {
    const newTaskList = [...tasks];
    newTaskList.splice(i, 1);
    setTasks(newTaskList);
  }

  function handleDeleteAll() {
    setTasks([]);
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
