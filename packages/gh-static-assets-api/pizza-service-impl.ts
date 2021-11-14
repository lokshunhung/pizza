import { PizzaService } from "@pizza/api/pizza-service";
import { PizzaItem, OrderItem } from "@pizza/types";

export class PizzaServiceImpl implements PizzaService {
    async getPizzaListing(): Promise<PizzaItem[]> {
        const url =
            "https://raw.githubusercontent.com/lokshunhung/pizza/ed0ca2afbee4efba7d7d69288c74d9198110b83e/packages/utils/fixtures/pizza-listing.json";
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
