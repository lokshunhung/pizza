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
            id: "1",
            item: {
                name: "First pizza",
                price: 10,
                toppings: [],
            },
        },
    ],
};

export const Many = Template.bind({});
Many.args = {
    orderItems: [
        {
            id: "1",
            item: {
                name: "First pizza",
                price: 10,
                toppings: [],
            },
        },
        {
            id: "2",
            item: {
                name: "Second pizza",
                price: 20,
                toppings: [],
            },
        },
        {
            id: "3",
            item: {
                name: "Third pizza",
                price: 30,
                toppings: [],
            },
        },
    ],
};

export default meta;
