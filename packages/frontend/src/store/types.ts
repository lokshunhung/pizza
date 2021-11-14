import { PizzaService } from "@pizza/api/pizza-service";
import { OrderItem, PizzaItem } from "@pizza/types";
import { History } from "history";

export type Dependencies = {
    pizzaService: PizzaService;
    history: History;
};

export type State = {
    loading: {
        [identifier: string]: number;
    };
    app: {
        pizzaListing: Array<PizzaItem>;
        orderItems: Array<OrderItem>;
    };
    modal: {
        pizzaDetails: {
            pizzaId: string;
            selectedSize: string | undefined;
            selectedToppings: Array<string>;
        } | null;
    };
    router?: any;
};
