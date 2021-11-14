import "@pizza/ui/base.css";
import { PizzaServiceImpl } from "@pizza/gh-static-assets-api/pizza-service-impl";
import { createBrowserHistory } from "history";
import { render } from "react-dom";
import { App } from "./App";
import { createStore } from "./store/create-store";

const history = createBrowserHistory();
const store = createStore({
    pizzaService: new PizzaServiceImpl(),
    history,
});

const element = <App store={store} history={history} />;

const container = document.querySelector("#app");

render(element, container);
