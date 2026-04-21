import { useEffect, useState } from "react";

export default function Watch() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Parte I: efecto al mostrar el component (componentDidMount)
    const ival = setInterval(() => {
      console.log("setInterval");
      setDate(new Date());
    }, 1000);

    // Parte II: deshacer lo hecho en la Parte I (componentWillUnmount)
    return () => {
      console.log("clearInterval");
      clearInterval(ival);
    };
  }, []);

  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const seconds = String(date.getSeconds());

  const HH = hours.padStart(2, "0");
  const MM = minutes.padStart(2, "0");
  const SS = seconds.padStart(2, "0");

  return (
    <div>
      Time is{" "}
      <span className="font-mono">
        {HH}:{MM}:{SS}
      </span>
    </div>
  );
}
