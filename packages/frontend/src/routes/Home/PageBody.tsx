import { Box, Container, HStack } from "@chakra-ui/react";
import { Basket } from "@pizza/ui/Basket/Basket";
import { NoPizzaPlaceholder } from "@pizza/ui/NoPizzaPlaceholder/NoPizzaPlaceholder";
import { PizzaGrid } from "@pizza/ui/PizzaGrid/PizzaGrid";
import { useDispatch } from "react-redux";
import { commands } from "../../store/actions";
import { useTypedSelector } from "../../store/hooks";

export const PageBody = () => {
    const pizzaListing = useTypedSelector(state => state.pizzaListing);
    const orderItems = useTypedSelector(state => state.orderItems);

    const dispatch = useDispatch();
    const onCheckout = () => dispatch(commands.submitPizzaOrder(orderItems));
    const onEmptyBasket = () => dispatch(commands.clearAllPizzaOrderItem());
    const onRemoveOrder = (id: string) => dispatch(commands.removePizzaOrderItem(id));

    return (
        <Container flex="1" maxWidth="container.xl" paddingY={4}>
            <HStack>
                <Box flex="1">
                    {pizzaListing.length === 0 ? <NoPizzaPlaceholder /> : <PizzaGrid pizzaListing={pizzaListing} />}
                </Box>
                <Box flex="0 0">
                    <Basket
                        orderItems={orderItems}
                        onCheckout={onCheckout}
                        onEmptyBasket={onEmptyBasket}
                        onRemoveOrder={onRemoveOrder}
                    />
                </Box>
            </HStack>
        </Container>
    );
};
