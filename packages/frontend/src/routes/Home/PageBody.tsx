import { Box, Container, HStack } from "@chakra-ui/react";
import { OrderItem, PizzaItem } from "@pizza/types";
import { Basket } from "@pizza/ui/Basket/Basket";
import { NoPizzaPlaceholder } from "@pizza/ui/NoPizzaPlaceholder/NoPizzaPlaceholder";
import { PizzaGrid } from "@pizza/ui/PizzaGrid/PizzaGrid";

type Props = {
    pizzaListing: Array<PizzaItem>;
    orderItems: Array<OrderItem>;
};

export const PageBody = (props: Props) => {
    const { pizzaListing, orderItems } = props;
    const onCheckout = () => {};
    const onEmptyBasket = () => {};
    return (
        <Container flex="1" maxWidth="container.xl" paddingY={4}>
            <HStack>
                <Box flex="1">
                    {pizzaListing.length === 0 ? <NoPizzaPlaceholder /> : <PizzaGrid pizzaListing={pizzaListing} />}
                </Box>
                <Box flex="0 0">
                    <Basket orderItems={orderItems} onCheckout={onCheckout} onEmptyBasket={onEmptyBasket} />
                </Box>
            </HStack>
        </Container>
    );
};
