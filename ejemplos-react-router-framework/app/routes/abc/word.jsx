import { useParams } from "react-router";

export default function Word() {
    const { word } = useParams();

    return (
        <main>
            <h1>Word: {word}</h1>
        </main>
    );
}
