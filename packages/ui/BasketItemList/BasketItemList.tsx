import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { OrderItem } from "@pizza/types";

type Props = {
    orderItems: Array<OrderItem>;
};

export const BasketItemList = (props: Props) => {
    const { orderItems } = props;
    const total = orderItems.reduce((acc, cur) => acc + cur.item.price, 0);
    return (
        <Box>
            <VStack alignItems="stretch">
                {orderItems.map(({ id, item }) => (
                    <HStack justifyContent="space-between" key={id}>
                        <Text>{item.name}</Text>
                        <Text>${item.price.toFixed(2)}</Text>
                    </HStack>
                ))}
                <Divider />
                <HStack justifyContent="space-between" fontWeight="bold">
                    <Text>Total</Text>
                    <Text>${total.toFixed(2)}</Text>
                </HStack>
            </VStack>
        </Box>
    );
};
