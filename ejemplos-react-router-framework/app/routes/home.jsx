import { Link } from "react-router";

export function meta({}) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <main>
            <h1>Home!!!</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                minima mollitia tempore! Voluptatibus quos velit, modi adipisci
                quas culpa tenetur, ratione repellendus, reprehenderit similique
                amet. Dolorum maiores expedita minus possimus.
            </p>
        </main>
    );
}
