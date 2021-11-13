import * as fixtures from "../fixtures";
import { createStory } from "../utils/createStory";
import { PizzaGrid } from "./PizzaGrid";

const { Template, meta } = createStory(PizzaGrid, {
    title: "components/Pizza Grid",
});

export const PizzaGrid_ = Template.bind({});
PizzaGrid_.args = {
    pizzaListing: [
        {
            image: fixtures.p1,
            description: {
                name: "Pizza one",
                price: 1,
                toppings: [],
            },
        },
        {
            image: fixtures.p2,
            description: {
                name: "Pizza two",
                price: 2,
                toppings: [],
            },
        },
        {
            image: fixtures.p3,
            description: {
                name: "Pizza three",
                price: 3,
                toppings: [],
            },
        },
        {
            image: fixtures.p4,
            description: {
                name: "Pizza four",
                price: 4,
                toppings: [],
            },
        },
        {
            image: fixtures.p5,
            description: {
                name: "Pizza five",
                price: 5,
                toppings: [],
            },
        },
    ],
};

export default meta;
