import * as React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// import { SignIn } from "./screens/SignIn";
// import { ForgotPassword } from "./screens/ForgotPassword";
import { Dashboard } from "./screens/Dashboard";
import { HomePage } from "./screens/HomePage";
import { AboutPage } from "./screens/AboutPage";
import { ServicesPage } from "./screens/ServicesPage";

import { FullPageSpinner } from "./components/Animation";

import { PATHS } from "./RouterPaths";

// Lazy are screens you don't want to ship - so ones hid behind login, authentication, etc.
// const Admin = lazy(() => import("./screens/Admin"));

/**
 * Route definitions.
 */
const routes = [
    // {
    //     path: PATHS.signIn,
    //     component: SignIn,
    // },
    // {
    //     path: PATHS.forgotPassword,
    //     component: ForgotPassword,
    // },
    {
        path: PATHS.dashboard,
        secure: false,
        component: Dashboard,
    },
    {
        path: PATHS.homepage,
        secure: false,
        component: HomePage,
    },
    {
        path: PATHS.aboutpage,
        secure: false,
        component: AboutPage,
    },
    {
        path: PATHS.servicespage,
        secure: false,
        component: ServicesPage,
    },
    {
        path: "/",
        secure: false,
        component: () => <Redirect to={PATHS.homepage} />,
    },
];

function Router({ auth, firebase }) {
    return (
        <BrowserRouter>
            <Suspense fallback={<FullPageSpinner />}>
                <Switch>
                    {routes.map((route, index) => (
                        <CustomRoute
                            {...route}
                            // auth={auth}
                            // firebase={firebase}
                            key={index}
                        />
                    ))}
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

function CustomRoute({ auth, firebase, ...route }) {
    return (
        <Route
            exact={route.exact}
            path={route.path}
            render={(props) => {
                // THIS IS FOR WHEN YOU HAVE AUTH
                // if (
                //     route.secure &&
                //     !auth?.signedIn &&
                //     props.location.pathname !== PATHS.signIn
                // ) {
                //     return (
                //         <Redirect
                //             to={{
                //                 pathname: PATHS.signIn,
                //                 state: { from: props.location },
                //             }}
                //         />
                //     );
                // } else if (route.admin && !auth?.admin) {
                //     return <Redirect to={PATHS.dashboard} />;
                // } else if (route.superAdmin && !auth?.superAdmin) {
                //     return <Redirect to={PATHS.dashboard} />;
                // }

                return (
                    <route.component
                        {...props}
                        // auth={auth}
                        // firebase={firebase}
                        routes={route.routes}
                    />
                );
            }}
        ></Route>
    );
}

export { Router, CustomRoute };
