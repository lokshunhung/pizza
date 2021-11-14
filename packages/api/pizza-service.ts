import { OrderItem, PizzaItem } from "@pizza/types";

export interface PizzaService {
    getPizzaListing(): Promise<Array<PizzaItem>>;

    submitOrder(orderItems: Array<OrderItem>): Promise<void>;
}
