import { useState } from "react";

export default function BurguerExtras() {
  const [cebolla, setCebolla] = useState(false);
  const [queso, setQueso] = useState(false);
  const [pepinillos, setPepinillos] = useState(false);

  const Button = ({ texto, setter, value }) => (
    <div
      className={
        "p-1 border flex flex-col justify-center " +
        (value ? "bg-black text-white" : "")
      }
      onClick={() => setter(!value)}
    >
      {texto}
    </div>
  );

  return (
    <div className="flex flex-row *:hover:outline-2 *:hover:cursor-pointer">
      <Button
        texto="cebolla"
        setter={setCebolla}
        value={cebolla}
      />
      <Button texto="queso" setter={setQueso} value={queso} />
      <Button
        texto="pepinillos"
        setter={setPepinillos}
        value={pepinillos}
      />
    </div>
  );
}
