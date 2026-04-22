import { atom, onMount } from "nanostores"
import { useStore } from "@nanostores/react"

const $encendida = atom(false)

onMount($encendida, () => {
    // Álguien está suscrito a los cambios de $encendida
    console.log("Álguien escucha 'encendida'")

    return () => {
        // Ya nadie está suscrito...
        console.log("Nadie escucha 'encendida'")
    }
})

export default function Bombilla() {
    const encendida = useStore($encendida)

    return (
        <div
            className={
                "w-16 h-16 mt-4 border rounded " +
                "flex flex-row justify-center items-center " +
                "cursor-pointer hover:bg-gray-200 select-none"
            }
            onClick={() => $encendida.set(!$encendida.get())}
        >
            {encendida ? "on💡" : "off"}
        </div>
    )
}
