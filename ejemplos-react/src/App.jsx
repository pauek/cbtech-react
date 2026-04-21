import { createContext, useState } from "react";
import "./index.css";
import SectionTodos from "./SectionTodos";
import SectionComponentes from "./SectionComponentes";
import SectionUseEffect from "./SectionUseEffect";
import InfiniteLoop from "./InfiniteLoop";

export const DebugContext = createContext(false);
export const UserContext = createContext(null);

export default function App() {
  const [debugMode, setDebugMode] = useState(true);

  return (
    <UserContext value={null}>
      <DebugContext value={debugMode}>
        <main className="py-4 px-6 flex flex-col gap-6">
          <button onClick={() => setDebugMode((prev) => !prev)}>
            {debugMode ? "Exit" : "Enter"}
          </button>

          <SectionTodos />
          {/* <SectionComponentes /> */}
          <SectionUseEffect />

          <InfiniteLoop />
        </main>
      </DebugContext>
    </UserContext>
  );
}
