import Bombilla from "./Bombilla"
import "./index.css"
import NasaImageSearch from "./NasaImageSearch"
import NumberList from "./NumberList"
import SetBombillas from "./SetBombillas"
import { $darkMode, addRandomNumber, resetNumberList } from "./stores"
import { useStore } from "@nanostores/react"

/*
https://github.com/nanostores/nanostores

Observer
*/

export function App() {
    const darkMode = useStore($darkMode)
    return (
        <>
            <NasaImageSearch />
            <button onClick={() => $darkMode.set(!$darkMode.get())}>
                {darkMode ? "light" : "dark"}
            </button>
            <SetBombillas />
            <NumberList />

            <button onClick={addRandomNumber}>Add number</button>
            <button onClick={resetNumberList}>Reset numbers</button>
        </>
    )
}

export default App
