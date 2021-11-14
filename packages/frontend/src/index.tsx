import "@pizza/ui/base.css";
import { PizzaServiceImpl } from "@pizza/gh-static-assets-api/pizza-service-impl";
import { render } from "react-dom";
import { App } from "./App";
import { createStore } from "./store/create-store";

const store = createStore({
    pizzaService: new PizzaServiceImpl(),
});

const element = <App store={store} />;

const container = document.querySelector("#app");

render(element, container);
