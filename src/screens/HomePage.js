import * as React from "react";

import { Link, useRouteMatch } from "react-router-dom";
import clsx from "clsx";

import { PATHS } from "../RouterPaths";
import { Layout } from "../components/Layout";

function HomePage() {
    return (
        <Layout>
            <div>Home Page</div>
        </Layout>
    );
}

export { HomePage };
