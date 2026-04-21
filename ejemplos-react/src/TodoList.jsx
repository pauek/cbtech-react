import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const loadTodos = async () => {
  const response = await fetch(
    `http://localhost:3000/api/todos`,
  );
  const todos = await response.json();
  return todos;
};

export default function TodoList() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    loadTodos().then(setTodos);
  }, []);

  if (todos === null) {
    return <div>Loading...</div>;
  }
  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ol>
  );
}
