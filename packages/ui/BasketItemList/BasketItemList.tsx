import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { OrderItem } from "@pizza/types";
import { TiShoppingCart } from "react-icons/ti";

type Props = {
    orderItems: Array<OrderItem>;
};

export const BasketItemList = (props: Props) => {
    const { orderItems } = props;
    const total = orderItems.reduce((acc, cur) => acc + cur.item.price, 0);
    return (
        <Box>
            <VStack alignItems="stretch">
                {orderItems.length === 0 ? (
                    <HStack color="gray.300">
                        <Text fontSize="xl">
                            <TiShoppingCart />
                        </Text>
                        <Text>No orders</Text>
                    </HStack>
                ) : (
                    orderItems.map(({ id, item }) => (
                        <HStack justifyContent="space-between" key={id}>
                            <Text>{item.name}</Text>
                            <Text>${item.price.toFixed(2)}</Text>
                        </HStack>
                    ))
                )}
                <Divider />
                <HStack justifyContent="space-between" fontWeight="bold">
                    <Text>Total</Text>
                    <Text>${total.toFixed(2)}</Text>
                </HStack>
            </VStack>
        </Box>
    );
};
