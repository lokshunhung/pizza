import { Container } from "@chakra-ui/layout";
import { createStory } from "../utils/createStory";
import imgPizza from "./p1.jpg";
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
        image: imgPizza,
        description: {
            name: "Pizza Name",
            price: 10,
            toppings: [],
        },
    },
};

export default meta;
