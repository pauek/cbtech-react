import Counter from "../components/Counter";

export function meta({}) {
    return [{ title: "About this app" }];
}

export async function loader() {
    console.log("loader!");
    const file = Bun.file("db.json")
    return await file.json()
}

export default function About({ loaderData }) {
    console.log("About!");
    return (
        <main>
            <h1>About</h1>
            <Counter />
            <pre>{JSON.stringify(loaderData)}</pre>
        </main>
    );
}
