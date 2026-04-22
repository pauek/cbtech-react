import { useState } from "react"
import Bombilla from "./Bombilla"

export default function SetBombillas() {
    const [cantidad, setCantidad] = useState(5)

    const array = Array.from({ length: cantidad }).map((_, i) => i)

    return (
        <div className="debug">
            <div className="grid grid-cols-10 gap-2">
                {array.map((_, i) => (
                    <Bombilla key={i} />
                ))}
            </div>
            <button onClick={() => setCantidad((c) => Math.min(c + 1, 10))}>
                Add
            </button>
            <button onClick={() => setCantidad((c) => Math.max(c - 1, 0))}>Remove</button>
        </div>
    )
}
