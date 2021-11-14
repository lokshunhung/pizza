import { OrderItem, PizzaItem } from "@pizza/types";
import { createActions } from "@pizza/utils/createActions";
import { State } from "./types";

export const commands = createActions("cmd", {
    fetchPizzaListing() {
        return {} as const;
    },

    openPizzaDetailsModal(pizzaId: string) {
        return { payload: pizzaId } as const;
    },

    closePizzaDetailsModal() {
        return {} as const;
    },

    updatePizzaDetailsModalSelection(
        options: Partial<Pick<NonNullable<State["modal"]["pizzaDetails"]>, "selectedSize" | "selectedToppings">>,
    ) {
        return { payload: options } as const;
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
    setLoading(isLoading: boolean, identifier: string = "global") {
        return { payload: { isLoading, identifier } } as const;
    },

    setPizzaListing(pizzaListing: Array<PizzaItem>) {
        return { payload: pizzaListing } as const;
    },

    setPizzaOrder(orderItems: Array<OrderItem>) {
        return { payload: orderItems } as const;
    },

    setModal(options: Partial<State["modal"]>) {
        return { payload: options } as const;
    },
});
