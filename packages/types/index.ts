export type OrderItem = {
    orderId: string;
    pizzaId: string;
    pizzaName: string;
    pizzaPrice: number;
    selectedSize: string;
    selectedToppings: Array<string>;
};

export type PizzaItem = {
    pizzaId: string;
    image: string;
    name: string;
    price: number;
    toppings: Array<string>;
};
