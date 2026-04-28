import { useContext, useState } from "react";
import b_off from "../assets/bombilla-off.svg";
import b_on from "../assets/bombilla-on.svg";
import { DebugContext } from "./contexts";

export default function Bombilla() {
  const [encendida, setEncendida] = useState(false);

  const debugMode = useContext(DebugContext)

  return (
    <div
      className={"w-16 p-1 " + (debugMode ? "debug" : "")}
      onClick={() => setEncendida(!encendida)}
    >
      <img src={encendida ? b_on : b_off} alt="Bombilla" />
    </div>
  );
}
