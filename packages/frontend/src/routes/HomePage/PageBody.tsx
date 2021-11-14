import { Box, Container, HStack, useBreakpointValue } from "@chakra-ui/react";
import { Basket } from "@pizza/ui/Basket/Basket";
import { NoPizzaPlaceholder } from "@pizza/ui/NoPizzaPlaceholder/NoPizzaPlaceholder";
import { PizzaGrid } from "@pizza/ui/PizzaGrid/PizzaGrid";
import { useDispatch } from "react-redux";
import { commands } from "../../store/actions";
import { useIsLoading, useTypedSelector } from "../../store/hooks";

export const PageBody = () => {
    const pizzaListing = useTypedSelector(state => state.app.pizzaListing);
    const orderItems = useTypedSelector(state => state.app.orderItems);
    const isLoading = useIsLoading("checkout");

    const dispatch = useDispatch();
    const onChoose = (pizzaId: string) => dispatch(commands.openPizzaDetailsModal(pizzaId));
    const onCheckout = () => dispatch(commands.submitPizzaOrder(orderItems));
    const onEmptyBasket = () => dispatch(commands.clearAllPizzaOrderItem());
    const onRemoveOrder = (orderId: string) => dispatch(commands.removePizzaOrderItem(orderId));

    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Container flex="1" maxWidth="container.xl" paddingY={4}>
            <HStack alignItems="flex-start">
                <Box flex="1">
                    {pizzaListing.length === 0 ? (
                        <NoPizzaPlaceholder />
                    ) : (
                        <PizzaGrid pizzaListing={pizzaListing} onChoose={onChoose} />
                    )}
                </Box>
                <Box flex="0 0" padding={2}>
                    {isDesktop ? (
                        <Basket
                            orderItems={orderItems}
                            onCheckout={onCheckout}
                            onEmptyBasket={onEmptyBasket}
                            onRemoveOrder={onRemoveOrder}
                            isLoading={isLoading}
                        />
                    ) : null}
                </Box>
            </HStack>
        </Container>
    );
};
