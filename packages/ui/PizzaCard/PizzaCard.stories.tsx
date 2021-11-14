import { Container } from "@chakra-ui/layout";
import { createStory } from "@pizza/utils/createStory";
import * as fixtures from "@pizza/utils/fixtures";
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
        pizzaId: "p1",
        image: fixtures.p1,
        name: "Pizza Name",
        price: 10,
        toppings: [],
    },
};

export default meta;
