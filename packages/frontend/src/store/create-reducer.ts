import { connectRouter } from "connected-react-router";
import { History } from "history";
import { AnyAction, combineReducers } from "redux";
import { documents } from "./actions";
import { State } from "./types";

const loadingInitialState: State["loading"] = {};

const loadingReducer = (state: State["loading"] = loadingInitialState, action: AnyAction): State["loading"] => {
    if (documents.setLoading.matchActionName(action)) {
        const { isLoading, identifier } = action.payload;
        const count = (state[identifier] || 0) + (isLoading ? 1 : -1);
        return { ...state, [identifier]: count };
    }
    return state;
};

const appInitialState: State["app"] = { pizzaListing: [], orderItems: [] };

const appReducer = (state: State["app"] = appInitialState, action: AnyAction): State["app"] => {
    if (documents.setPizzaListing.matchActionName(action)) {
        const pizzaListing = action.payload;
        return { ...state, pizzaListing };
    }
    if (documents.setPizzaOrder.matchActionName(action)) {
        const orderItems = action.payload;
        return { ...state, orderItems };
    }
    return state;
};

const modalInitialState: State["modal"] = { pizzaDetails: null };

const modalReducer = (state: State["modal"] = modalInitialState, action: AnyAction): State["modal"] => {
    if (documents.setModal.matchActionName(action)) {
        const options = action.payload;
        return { ...state, ...options };
    }
    return state;
};

export const createReducer = (history: History) => {
    return combineReducers({
        loading: loadingReducer,
        app: appReducer,
        modal: modalReducer,
        router: connectRouter(history),
    });
};
