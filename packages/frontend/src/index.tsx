import { render } from "react-dom";
import { App } from "./App/App";

const element = <App />;

const container = document.querySelector("#app");

render(element, container);
