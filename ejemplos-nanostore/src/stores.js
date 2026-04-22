import { atom, effect } from "nanostores"

export const $darkMode = atom(false)

/*
$darkMode.get() -> bool
$darkMode.set(bool)

bool | number | string | arrays

*/

export const $currentUser = atom(null)

export const $cookPoint = atom("raw")

// Number List

export const $numberList = atom([1, 2, 3])

export const addRandomNumber = () => {
    const numbers = $numberList.get()
    const rndNum = 1 + Math.floor(Math.random() * 10)
    $numberList.set([...numbers, rndNum])
}

export const resetNumberList = () => $numberList.set([])

// Nasa Image Search

const BASE_URL = "https://images-api.nasa.gov"

const searchImages = async (search) => {
    if (search === "") {
        return []
    }
    const response = await fetch(`${BASE_URL}/search?q=${search}&page_size=10`)
    const { collection } = await response.json()
    return [].concat(...collection.items.map((item) => item.links[0]?.href))
}

export const $search = atom("")

export const $debouncedSearch = atom("")

effect([$search], (search) => {
    const timeout = setTimeout(() => {
        $debouncedSearch.set(search)
    }, 800)

    return () => {
        clearTimeout(timeout)
    }
})

export const $images = atom(null) // null == "loading..."

effect([$debouncedSearch], (debouncedSearch) => {
    searchImages(debouncedSearch).then((images) => $images.set(images))
})
