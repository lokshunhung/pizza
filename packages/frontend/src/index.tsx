import "@pizza/ui/base.css";
import { App } from "./App";
import { render } from "react-dom";

const element = <App />;

const container = document.querySelector("#app");

render(element, container);
