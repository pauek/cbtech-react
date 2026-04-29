import { Form } from "react-router";

export async function clientAction({ request }) {
    const formData = await request.formData();
    const search = formData.get("search");

    return { message: `You searched "${search}"` }
}

export default function ABC({ actionData }) {
    return (
        <main>
            <h1>ABC</h1>
            <Form method="post" className="flex flex-row gap-2">
                <input type="text" name="search" className="border px-1" />
                <button>Search</button>
            </Form>
            {actionData?.message}
        </main>
    );
}
