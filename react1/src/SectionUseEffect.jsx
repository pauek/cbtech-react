import { useContext } from "react";
import { DebugContext } from "./App";
import Watch from "./Watch";

export default function SectionUseEffect() {
  const debugMode = useContext(DebugContext);
  return (
    <section>
      <h2>useEffect</h2>
      {debugMode ? <div>Aquí habría un reló</div> : <Watch />}
    </section>
  );
}
