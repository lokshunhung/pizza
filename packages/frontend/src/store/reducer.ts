import { AnyAction } from "redux";
import { documents } from "./actions";
import { State } from "./types";

const initialState: State = {
    loading: 0,
    pizzaListing: [],
    orderItems: [],
};

export const reducer = (state: State = initialState, action: AnyAction): State => {
    if (documents.setLoading.matchActionName(action)) {
        const isLoading = action.payload;
        const loading = state.loading + (isLoading ? 1 : -1);
        return { ...state, loading };
    }

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
