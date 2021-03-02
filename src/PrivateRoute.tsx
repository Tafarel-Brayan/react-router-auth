import { Redirect, Route, RouteProps } from "react-router-dom";
// import { isAuthenticated } from "./Auth";

interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
    isAuthenticated: boolean;
}

export function PrivateRoute(  props: PrivateRouteProps ){
    const { component: Component, isAuthenticated, ...rest } = props;

    return (
        <Route { ...rest } render={ props => (
            isAuthenticated ? (
                <Component { ... props } />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        ) } />
    )
}