import { useContext } from "react";
import { DebugContext } from "./contexts";
import Watch from "./Watch";
import NasaImageSearch from "./NasaImageSearch";

export default function SectionUseEffect() {
  const debugMode = useContext(DebugContext);
  return (
    <section>
      <h2>useEffect</h2>
      {debugMode ? <div>Aquí habría un reló</div> : <Watch />}

      <div className="h-12" />

      <h2 className="border-t">NASA Image Search</h2>
      
    </section>
  );
}
