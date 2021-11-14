import { CloseIcon } from "@chakra-ui/icons";
import { Box, Divider, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { OrderItem } from "@pizza/types";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { ConfirmRemoveModal } from "./ConfirmRemoveModal";

type Props = {
    orderItems: Array<OrderItem>;
    onRemoveOrder: (orderId: string) => void;
};

export const BasketItemList = (props: Props) => {
    const { orderItems: basketItems, onRemoveOrder } = props;
    const [removeOrderId, setRemoveOrderId] = useState<string | null>(null);
    const onRemoveModalConfirm = () => onRemoveOrder(removeOrderId!);
    const onRemoveModalClose = () => setRemoveOrderId(null);
    const total = basketItems.reduce((acc, cur) => acc + cur.pizzaPrice, 0);
    return (
        <Box>
            <VStack alignItems="stretch">
                {basketItems.length === 0 ? (
                    <HStack color="gray.300">
                        <Text fontSize="xl">
                            <TiShoppingCart />
                        </Text>
                        <Text>No orders</Text>
                    </HStack>
                ) : (
                    basketItems.map(item => (
                        <HStack justifyContent="space-between" key={item.orderId}>
                            <IconButton
                                icon={<CloseIcon />}
                                size="xs"
                                variant="ghost"
                                borderRadius="50%"
                                aria-label="Remove"
                                onClick={() => setRemoveOrderId(item.orderId)}
                            />
                            <Text flex="1">{item.pizzaName}</Text>
                            <Text>${item.pizzaPrice.toFixed(2)}</Text>
                        </HStack>
                    ))
                )}
                <Divider />
                <HStack justifyContent="space-between" fontWeight="bold">
                    <Box padding={3} />
                    <Text flex="1">Total</Text>
                    <Text>${total.toFixed(2)}</Text>
                </HStack>
            </VStack>

            <ConfirmRemoveModal
                isOpen={removeOrderId !== null}
                onClose={onRemoveModalClose}
                onConfirm={onRemoveModalConfirm}
            />
        </Box>
    );
};
