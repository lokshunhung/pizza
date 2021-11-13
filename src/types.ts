export type OrderItem = {
    id: string;
    item: PizzaDescription;
};

export type PizzaItem = {
    image: string;
    description: PizzaDescription;
};

export type PizzaDescription = {
    name: string;
    price: number;
    toppings: Array<string>;
};
