import { useRef } from "react";

export default function Input({ onInput }) {
  const inputRef = useRef(null);

  function handleEnter(e) {
    const value = e.target.value;
    if (e.key === "Enter" && value.trim()) {
      onInput(value);
      e.target.value = "";
    }
  }

  function handleClick() {
    onInput(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <div className="addField">
      <input
        className="input"
        ref={inputRef}
        maxLength={300}
        onKeyDown={(e) => handleEnter(e)}
        placeholder="... new task"
        autoFocus
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
}
