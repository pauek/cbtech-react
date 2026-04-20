import TodoList from "./TodoList";

export default function SectionTodos() {
  const todos = [
    { what: "Fregar la terraza", done: true },
    { what: "Comprar patatas", done: false },
    { what: "Reservar vuelos", done: false },
  ];

  return (
    <section>
      <h1>Todos</h1>
      <TodoList todos={todos} />
    </section>
  );
}
