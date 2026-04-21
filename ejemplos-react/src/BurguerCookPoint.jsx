import { useState } from "react";

const puntosCoccion = ["cruda", "normal", "bien hecha"];
const cruda = 0,
  normal = 1,
  bienHecha = 2;

export default function BurguerCookPoint() {
  const [coccion, setCoccion] = useState(normal);

  const Button = ({ texto, setter, value }) => (
    <div
      className={
        "p-1 border flex flex-row justify-center " +
        (value === coccion ? "bg-black text-white" : "")
      }
      onClick={() => setter(value)}
    >
      {texto}
    </div>
  );

  return (
    <div className="flex flex-col *:hover:outline-2 *:hover:cursor-pointer">
      {puntosCoccion.map((punto, i) => (
        <Button texto={punto} setter={setCoccion} value={i} />
      ))}
    </div>
  );
}
