const sleep = async (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
};

export function links() {
    return [];
}

export async function clientLoader() {
    console.log("clientLoader!");
    await sleep(1000);
    return { data: "this is the data" };
}

export function HydrateFallback() {
    return <div>Loading...</div>;
}

export function ErrorBoundary({ error }) {
    return (
        <div className="bg-red-400 text-white">
            There was an error: {error.toString()}
        </div>
    );
}

export default function Second({ loaderData }) {
    // throw new Error(`Panic!!`);
    return (
        <main>
            <h1>Second</h1>
            <pre>{JSON.stringify(loaderData)}</pre>
        </main>
    );
}
