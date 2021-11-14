import { Box, Container, HStack, useBreakpointValue } from "@chakra-ui/react";
import { NoPizzaPlaceholder } from "@pizza/ui/NoPizzaPlaceholder/NoPizzaPlaceholder";
import { PizzaGrid } from "@pizza/ui/PizzaGrid/PizzaGrid";
import { useDispatch } from "react-redux";
import { commands } from "../../store/actions";
import { useTypedSelector } from "../../store/hooks";
import { ConnectedBasket } from "./ConnectedBasket";

export const PageBody = () => {
    const pizzaListing = useTypedSelector(state => state.app.pizzaListing);
    const dispatch = useDispatch();
    const onChoose = (pizzaId: string) => dispatch(commands.openPizzaDetailsModal(pizzaId));
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
                    {isDesktop ? <ConnectedBasket /> : null}
                </Box>
            </HStack>
        </Container>
    );
};
