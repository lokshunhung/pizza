import { Box, Button, VStack } from "@chakra-ui/react";
import { OrderItem } from "@pizza/types";
import { BasketItemList } from "../BasketItemList/BasketItemList";

type Props = {
    orderItems: Array<OrderItem>;
    onCheckout: () => void;
    onEmptyBasket: () => void;
    onRemoveOrder: (id: string) => void;
};

export const Basket = (props: Props) => {
    const { orderItems, onCheckout, onEmptyBasket, onRemoveOrder } = props;
    return (
        <Box>
            <BasketItemList orderItems={orderItems} onRemoveOrder={onRemoveOrder} />
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
