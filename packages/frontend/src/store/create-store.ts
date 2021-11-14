import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore as createReduxStore } from "redux";
import { createMiddlewareMap } from "./create-middleware-map";
import { createReducer } from "./create-reducer";
import { Dependencies } from "./types";

export const createStore = (dependencies: Dependencies) => {
    const composeEnhancers: typeof compose =
        (typeof window !== "undefined" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const middlewares = Object.values(createMiddlewareMap(dependencies));

    const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(dependencies.history), ...middlewares));

    const reducer = createReducer(dependencies.history);

    const store = createReduxStore(reducer, enhancer);

    return store;
};
