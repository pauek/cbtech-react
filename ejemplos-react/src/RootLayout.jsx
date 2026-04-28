import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { DebugContext, UserContext } from "./contexts";

export default function RootLayout() {
    const { pathname } = useLocation();
    const [debugMode, setDebugMode] = useState(true);

    const Link_ = ({ path, name }) => (
        <Link to={path} className={pathname === path ? "border-b-4" : ""}>
            {name}
        </Link>
    );

    return (
        <UserContext.Provider value={null}>
            <DebugContext.Provider value={{ debugMode, setDebugMode }}>
                <header>
                    <nav>
                        <Link_ path="/" name="Home" />
                        <Link_ path="/stop-watch" name="Stop Watches" />
                        <Link_ path="/components" name="Component Gallery" />
                        <Link_ path="/todos" name="Todo list" />
                        <Link_ path="/nasa" name="NASA Image Search" />
                    </nav>
                </header>
                <div className="max-w-[50em] m-auto pt-6">
                    <Outlet />
                </div>
            </DebugContext.Provider>
        </UserContext.Provider>
    );
}
