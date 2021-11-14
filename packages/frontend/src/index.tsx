import "@pizza/ui/base.css";
import { render } from "react-dom";
import { App } from "./App";
import { createStore } from "./store/create-store";

const store = createStore({
    pizzaService: {} as any,
});

const element = <App store={store} />;

const container = document.querySelector("#app");

render(element, container);
