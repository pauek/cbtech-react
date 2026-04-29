import { Link, NavLink, Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <header>
                <nav className="flex flex-row gap-2 p-2">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/abc">ABC</NavLink>
                    <NavLink to="/abc/second">Second</NavLink>
                    <NavLink to="/new-number">New Number</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    );
}
