import { PizzaService } from "@pizza/api/pizza-service";
import { PizzaItem, OrderItem } from "@pizza/types";

export class PizzaServiceImpl implements PizzaService {
    async getPizzaListing(): Promise<PizzaItem[]> {
        const url =
            "https://raw.githubusercontent.com/lokshunhung/pizza/master/packages/utils/fixtures/pizza-listing.json";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("API call failed");
        }
        const json = await response.json();
        return json;
    }

    async submitOrder(orderItems: OrderItem[]): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return;
    }
}
