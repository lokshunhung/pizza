import { Container } from "@chakra-ui/layout";
import * as fixtures from "../fixtures";
import { createStory } from "../utils/createStory";
import { PizzaCard } from "./PizzaCard";

const { Template, meta } = createStory(PizzaCard, {
    title: "components/Pizza Card",
    decorators: [
        Story => (
            <Container maxWidth="400px">
                <Story />
            </Container>
        ),
    ],
});

export const PizzaCard_ = Template.bind({});
PizzaCard_.args = {
    pizza: {
        image: fixtures.p1,
        description: {
            name: "Pizza Name",
            price: 10,
            toppings: [],
        },
    },
};

export default meta;
