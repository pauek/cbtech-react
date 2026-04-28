import { useContext } from "react";
import { DebugContext } from "./contexts";
import "./index.css";

export default function App() {
    const { debugMode, setDebugMode } = useContext(DebugContext);

    return (
        <main className="py-4 px-6 flex flex-col gap-6">
            <button onClick={() => setDebugMode((prev) => !prev)}>
                {debugMode ? "Exit" : "Enter"}
            </button>
        </main>
    );
}
