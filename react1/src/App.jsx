import Bombilla from "./Bombilla";
import BurguerCookPoint from "./BurguerCookPoint";
import BurguerExtras from "./BurguerExtras";
import ChooseNumber from "./ChooseNumber";
import FiltroPaises from "./FiltroPaises";
import "./index.css";
import TodoList from "./TodoList";

export default function App() {
  const todos = [
    { what: "Fregar la terraza", done: true },
    { what: "Comprar patatas", done: false },
    { what: "Reservar vuelos", done: false },
  ];

  return (
    <main className="py-4 px-6 flex flex-col gap-6">
      <section>
        <h1>Todos</h1>
        <TodoList todos={todos} />
      </section>
      <section>
        <h2>Componentes con estado</h2>
        <div className="grid grid-cols-2 gap-2">
          <Bombilla />
          <BurguerExtras />
          <BurguerCookPoint />
          <FiltroPaises />
          <ChooseNumber initial={4} low={0} high={10} />
          <ChooseNumber initial={2} low={0} high={4} />
        </div>
      </section>
    </main>
  );
}
