import { useRef } from "react"
import { $search, $images } from "./stores"
import { useStore } from "@nanostores/react"

const SearchResults = () => {
    const images = useStore($images)

    if (images === null) {
        return <div className="debug mt-6">Loading...</div>
    }
    return (
        <div className="mt-6 grid grid-cols-2">
            {images.map((imgUrl) => (
                <img key={imgUrl} src={imgUrl} alt="NASA Image" />
            ))}
        </div>
    )
}

export default function NasaImageSearch() {
    const inputRef = useRef()

    const submit = (e) => {
        e.preventDefault()
        // $search.set(inputRef.current.value)
    }

    return (
        <div>
            <form
                onSubmit={submit}
                className="flex flex-row gap-2 my-4 justify-center-safe"
            >
                <input
                    type="text"
                    name="q"
                    className="border px-1.5 py-1"
                    ref={inputRef}
                    onChange={(e) => $search.set(e.target.value)}
                />
                {/* <button>Search</button> */}
            </form>

            <SearchResults />
        </div>
    )
}
