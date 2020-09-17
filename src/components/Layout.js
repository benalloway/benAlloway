import * as React from "react";

import { Link, useRouteMatch } from "react-router-dom";
import clsx from "clsx";

import { PATHS } from "../RouterPaths";

function Layout({ children }) {
    return (
        <div className="m-0 p-0">
            <header className="max-w-screen-xl w-full py-4 px-10 mx-auto flex flex-row justify-between h-24">
                <nav>
                    <MatchLink to="/home">Home</MatchLink>
                    <MatchLink to="/about">About</MatchLink>
                    <MatchLink to="/services">Services</MatchLink>
                </nav>

                {/* LOGO */}
                <div>
                    <svg></svg>
                </div>

                {/* LOCATION / CONTACT */}
                <div>
                    <Link
                        to="/about"
                        className="btn text-sm uppercase font-bold tracking-custom px-4 py-2"
                    >
                        Contact
                    </Link>
                </div>
            </header>

            <main className="lg:max-w-screen-lg mx-auto">{children}</main>

            <footer></footer>
        </div>
    );
}

function MatchLink({ activeOnlyWhenExact, children, className, to }) {
    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    });

    const classNames = clsx([
        "mr-6 nav-dot no-underline relative text-sm uppercase font-bold tracking-custom focus:outline-none focus:text-blue-700 focus:underline",
        { "nav-dot-active": match },
        { "text-black-700 hover:nav-dot": !match },
        className,
    ]);

    return (
        <Link className={classNames} to={to}>
            {children}
        </Link>
    );
}

export { Layout };
