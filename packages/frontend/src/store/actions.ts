import { OrderItem, PizzaItem } from "@pizza/types";
import { createActions } from "@pizza/utils/createActions";

export const commands = createActions("cmd", {
    fetchPizzaListing() {
        return {} as const;
    },

    addPizzaOrderItem(orderItem: OrderItem) {
        return { payload: orderItem } as const;
    },

    removePizzaOrderItem(id: string) {
        return { payload: id } as const;
    },

    submitPizzaOrder(orderItems: Array<OrderItem>) {
        return { payload: orderItems } as const;
    },

    clearAllPizzaOrderItem() {
        return {} as const;
    },
});

export const documents = createActions("doc", {
    setLoading(isLoading: boolean) {
        return { payload: isLoading } as const;
    },

    setPizzaListing(pizzaListing: Array<PizzaItem>) {
        return { payload: pizzaListing } as const;
    },

    setPizzaOrder(orderItems: Array<OrderItem>) {
        return { payload: orderItems } as const;
    },
});
