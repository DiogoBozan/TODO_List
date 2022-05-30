import { useState } from "react";

function TodoInput() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleInput(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((oldState) => [...oldState, todo]);
    setTodo("");
  }

  return (
    <>
      <form>
        <input
          placeholder="Write something"
          value={todo}
          type="text"
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>Add List</button>
      </form>
      {todos.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
}

export default TodoInput;
