import { Container } from "@chakra-ui/react";
import { PizzaItem } from "@pizza/types";
import { PizzaGrid } from "@pizza/ui/PizzaGrid/PizzaGrid";

type Props = {
    pizzaListing: Array<PizzaItem>;
};

export const PageBody = (props: Props) => {
    const { pizzaListing } = props;
    return (
        <Container flex="1" maxWidth="container.xl" paddingY={4}>
            <PizzaGrid pizzaListing={pizzaListing} />
        </Container>
    );
};
