import { PizzaService } from "@pizza/api/pizza-service";
import { OrderItem, PizzaItem } from "@pizza/types";

export type Dependencies = {
    pizzaService: PizzaService;
};

export type State = {
    loading: number;
    pizzaListing: Array<PizzaItem>;
    orderItems: Array<OrderItem>;
};
