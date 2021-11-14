import { Container } from "@chakra-ui/layout";
import { createStory } from "@pizza/utils/createStory";
import { BasketItemList } from "./BasketItemList";

const { Template, meta } = createStory(BasketItemList, {
    title: "components/Basket Item List",
    decorators: [
        Story => (
            <Container>
                <Story />
            </Container>
        ),
    ],
});

export const Empty = Template.bind({});
Empty.args = {
    orderItems: [],
};

export const One = Template.bind({});
One.args = {
    orderItems: [
        {
            orderId: "o1",
            pizzaId: "p1",
            pizzaName: "First pizza",
            pizzaPrice: 10,
            selectedSize: "S",
            selectedToppings: ["top 1", "top 2"],
        },
    ],
};

export const Many = Template.bind({});
Many.args = {
    orderItems: [
        {
            orderId: "o1",
            pizzaId: "p1",
            pizzaName: "First pizza",
            pizzaPrice: 10,
            selectedSize: "S",
            selectedToppings: ["top 1", "top 2"],
        },
        {
            orderId: "o2",
            pizzaId: "p2",
            pizzaName: "Second pizza",
            pizzaPrice: 20,
            selectedSize: "S",
            selectedToppings: ["top 1", "top 2", "top 3"],
        },
        {
            orderId: "o3",
            pizzaId: "p3",
            pizzaName: "Third pizza",
            pizzaPrice: 30,
            selectedSize: "S",
            selectedToppings: ["top 1", "top 2", "top 3"],
        },
    ],
};

export default meta;
