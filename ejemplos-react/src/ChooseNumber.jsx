import { useContext, useState } from "react";
import { DebugContext } from "./contexts";

export default function ChooseNumber({ initial, low, high }) {
  const [num, setNum] = useState(initial);
  const debugMode = useContext(DebugContext);

  const decrement = () => {
    setNum((lastNum) => Math.max(low, lastNum - 1));
  };

  const increment = () => {
    setNum((lastNum) => Math.min(high, lastNum + 1));
  };

  return (
    <div className="border flex flex-row justify-center items-center gap-3">
      <button
        className="w-8 h-8 font-mono text-2xl border rounded"
        onClick={decrement}
      >
        -
      </button>
      <span
        className={
          "text-5xl font-bold w-14 text-center " +
          (debugMode ? "text-red-500" : "")
        }
      >
        {num}
      </span>
      <button
        className="w-8 h-8 font-mono text-2xl border rounded"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
