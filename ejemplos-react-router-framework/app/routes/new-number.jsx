import { Form } from "react-router";

const addNumber = async (n) => {
    const file = Bun.file("db.json");
    const numbers = await file.json();
    numbers.push(n);
    await Bun.write("db.json", JSON.stringify(numbers));
};

export async function action({ request }) {
    let formData = await request.formData();
    const num = formData.get("number");
    await addNumber(Number(num));
    return { message: `Added ${num}` };
}

export default function NewNumber({ actionData }) {
    return (
        <main>
            <h1 className="mb-2">New number</h1>
            <Form method="post" className="flex flex-row gap-2">
                <input
                    type="number"
                    name="number"
                    className="border px-1.5 py-1"
                />
                <button>
                    New number
                </button>
            </Form>
            <pre>{JSON.stringify(actionData)}</pre>
        </main>
    );
}
