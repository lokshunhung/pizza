import { CloseIcon } from "@chakra-ui/icons";
import { Box, Divider, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { OrderItem } from "@pizza/types";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { ConfirmRemoveModal } from "./ConfirmRemoveModal";

type Props = {
    orderItems: Array<OrderItem>;
    onRemoveOrder: (id: string) => void;
};

export const BasketItemList = (props: Props) => {
    const { orderItems, onRemoveOrder } = props;
    const [removeOrderId, setRemoveOrderId] = useState<string | null>(null);
    const onRemoveModalConfirm = () => onRemoveOrder(removeOrderId!);
    const onRemoveModalClose = () => setRemoveOrderId(null);
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
                            <IconButton
                                icon={<CloseIcon />}
                                size="xs"
                                variant="ghost"
                                borderRadius="50%"
                                aria-label="Remove"
                                onClick={() => setRemoveOrderId(id)}
                            />
                            <Text flex="1">{item.name}</Text>
                            <Text>${item.price.toFixed(2)}</Text>
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
