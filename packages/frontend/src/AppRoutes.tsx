import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedPizzaDetailsModal } from "./modals/ConnectedPizzaDetailsModal";
import { Home } from "./routes/Home/Home";

export const AppRoutes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>

            <ConnectedPizzaDetailsModal />
        </Fragment>
    );
};
