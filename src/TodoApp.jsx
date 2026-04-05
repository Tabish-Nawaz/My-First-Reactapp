import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input === "") return;
    setTodos([...todos, { text: input, done: false }]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTodo(index)}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;