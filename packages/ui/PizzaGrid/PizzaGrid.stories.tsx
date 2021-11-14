import { createStory } from "@pizza/utils/createStory";
import * as fixtures from "@pizza/utils/fixtures";
import { PizzaGrid } from "./PizzaGrid";

const { Template, meta } = createStory(PizzaGrid, {
    title: "components/Pizza Grid",
});

export const PizzaGrid_ = Template.bind({});
PizzaGrid_.args = {
    pizzaListing: [
        {
            pizzaId: "p1",
            image: fixtures.p1,
            name: "Pizza one",
            price: 1,
            toppings: [],
        },
        {
            pizzaId: "p2",
            image: fixtures.p2,
            name: "Pizza two",
            price: 2,
            toppings: [],
        },
        {
            pizzaId: "p3",
            image: fixtures.p3,
            name: "Pizza three",
            price: 3,
            toppings: [],
        },
        {
            pizzaId: "p4",
            image: fixtures.p4,
            name: "Pizza four",
            price: 4,
            toppings: [],
        },
        {
            pizzaId: "p5",
            image: fixtures.p5,
            name: "Pizza five",
            price: 5,
            toppings: [],
        },
    ],
};

export default meta;
