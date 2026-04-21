import { useState } from "react";
import countries from "./countries.json";

export default function FiltroPaises() {
  const [filtro, setFiltro] = useState("");

  return (
    <div className="h-60 flex flex-col items-stretch border p-1 rounded">
      <input
        className="border-2 px-1 py-0.5"
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <div className="overflow-y-scroll">
        {countries
          .filter((c) => c.name.includes(filtro))
          .map((country) => (
            <div>{country.name}</div>
          ))}
      </div>
    </div>
  );
}
