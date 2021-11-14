import { Middleware } from "redux";
import { commands, documents } from "./actions";
import { Dependencies, State } from "./types";

type AppMiddleware = Middleware<{}, State>;

export const createMiddlewareMap = ({ pizzaService }: Dependencies): Record<string, AppMiddleware> => {
    return {
        fetchPizzaListing: middleware => next => action => {
            next(action);

            if (commands.fetchPizzaListing.matchActionName(action)) {
                middleware.dispatch(documents.setLoading(true));
                pizzaService
                    .getPizzaListing()
                    .then(pizzaListing => middleware.dispatch(documents.setPizzaListing(pizzaListing)))
                    .catch(() => middleware.dispatch(documents.setPizzaListing([])))
                    .finally(() => middleware.dispatch(documents.setLoading(false)));
            }
        },

        pizzaOrderItems: middleware => next => action => {
            next(action);

            if (commands.addPizzaOrderItem.matchActionName(action)) {
                const { orderItems } = middleware.getState();
                const newOrderItems = [...orderItems, action.payload];
                middleware.dispatch(documents.setPizzaOrder(newOrderItems));
            }

            if (commands.removePizzaOrderItem.matchActionName(action)) {
                const { orderItems } = middleware.getState();
                const newOrderItems = orderItems.filter(orderItem => orderItem.id !== action.payload);
                middleware.dispatch(documents.setPizzaOrder(newOrderItems));
            }

            if (commands.clearAllPizzaOrderItem.matchActionName(action)) {
                middleware.dispatch(documents.setPizzaOrder([]));
            }
        },

        submitPizzaOrder: middleware => next => action => {
            next(action);

            if (commands.submitPizzaOrder.matchActionName(action)) {
                middleware.dispatch(documents.setLoading(true));
                pizzaService
                    .submitOrder(action.payload)
                    .then(() => {})
                    .catch(() => {})
                    .finally(() => middleware.dispatch(documents.setLoading(false)));
            }
        },
    };
};
