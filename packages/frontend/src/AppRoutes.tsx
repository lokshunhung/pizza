import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedPizzaDetailsModal } from "./modals/ConnectedPizzaDetailsModal";
import { HomePage } from "./routes/HomePage/HomePage";
import { OrderSuccessPage } from "./routes/OrderSuccessPage/OrderSuccessPage";

export const AppRoutes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/order-success" component={OrderSuccessPage} />
                <Route exact path="/" component={HomePage} />
            </Switch>

            <ConnectedPizzaDetailsModal />
        </Fragment>
    );
};
