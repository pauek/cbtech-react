import { index, route, layout, prefix } from "@react-router/dev/routes";

export default [
    layout("layout.jsx", [
        index("routes/home.jsx"),
        route("about", "routes/about.jsx"),
        ...prefix("abc", [
            index("routes/abc/abc.jsx"),
            route("second", "routes/abc/second.jsx"),
            route(":word", "routes/abc/word.jsx"),
        ]),
        route("new-number", "routes/new-number.jsx"),
    ]),
];
