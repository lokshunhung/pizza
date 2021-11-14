import { Route, Switch } from "react-router-dom";
import { Home } from "./routes/Home";

export const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    );
};
