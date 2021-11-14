import { applyMiddleware, compose, createStore as createReduxStore } from "redux";
import { createMiddlewareMap } from "./create-middleware-map";
import { reducer } from "./reducer";
import { Dependencies } from "./types";

export const createStore = (dependencies: Dependencies) => {
    const composeEnhancers: typeof compose =
        (typeof window !== "undefined" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const middlewares = Object.values(createMiddlewareMap(dependencies));

    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    const store = createReduxStore(reducer, enhancer);

    return store;
};
