import { useState } from "react";
import { useRef } from "react";

function TasksList({ list, onEdit, onDelete }) {
  const listItems = list.map((string, i) => 
    <li key={i}>
      <div className="taskText">{string}</div>
      <button onClick={() => onEdit(i, prompt('Edit task:', list[i]))}>
        Edit
      </button>
      <button onClick={() => onDelete(i)}>
        Delete
      </button>
    </li>);

  return <ul className="list">{listItems}</ul>
}

function Input({ onInput }) {
  const inputRef = useRef(null);

  function handleEnter(e) {
    const value = e.target.value;
    if (e.key === 'Enter' && value.trim()) {
      onInput(value);
      e.target.value = '';
    }
  }

  function handleClick() {
    const target = document.querySelector('input');
    onInput(target.value);
    inputRef.current.value = '';
  }

  return <>
    <input 
      className="input" 
      ref={inputRef}
      maxLength={300}
      onKeyDown={e => handleEnter(e)}
      placeholder="+ Add task" 
      autoFocus
    />
    <button onClick={handleClick}>Add Todo</button>
  </>
}

export default function TodoList() {
  const [tasks, updateTasks] = useState([]);

  function handleInput(input) {
    const newTaskList = [...tasks, input];
    updateTasks(newTaskList);
  }

  function handleEdit(i, input) {
    const newTaskList = [...tasks];
    newTaskList[i] = input;
    updateTasks(newTaskList);
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
    <>
      <h1 className="title">Todo List</h1>
      <Input onInput={handleInput} />
      <TasksList list={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      <button onClick={handleDeleteAll}>Delete All</button>
    </>
  );
}
