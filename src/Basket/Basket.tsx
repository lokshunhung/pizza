import { Box, Button, VStack } from "@chakra-ui/react";
import { BasketItemList } from "../BasketItemList/BasketItemList";
import { OrderItem } from "../types";

type Props = {
    orderItems: Array<OrderItem>;
    onCheckout: () => void;
    onEmptyBasket: () => void;
};

export const Basket = (props: Props) => {
    const { orderItems, onCheckout, onEmptyBasket } = props;
    return (
        <Box>
            <BasketItemList orderItems={orderItems} />
            <VStack paddingY={4}>
                <Button minWidth={60} colorScheme="blue" onClick={onCheckout}>
                    Checkout
                </Button>
                <Button minWidth={60} colorScheme="gray" onClick={onEmptyBasket}>
                    Empty Basket
                </Button>
            </VStack>
        </Box>
    );
};
