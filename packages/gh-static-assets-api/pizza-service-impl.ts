import { PizzaService } from "@pizza/api/pizza-service";
import { PizzaItem, OrderItem } from "@pizza/types";

export class PizzaServiceImpl implements PizzaService {
    async getPizzaListing(): Promise<PizzaItem[]> {
        const url =
            "https://raw.githubusercontent.com/lokshunhung/pizza/0cdc33c5f6e799e159444f3be69ddf639d763f8b/packages/utils/fixtures/pizza-listing.json";
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
