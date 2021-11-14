import {
    Box,
    Flex,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Basket } from "../Basket/Basket";

type Props = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    basketCount: number;
    children: React.ReactElement<typeof Basket>;
};

export const BasketFloatingActionButton = (props: Props) => {
    const { isOpen, onOpen, onClose, basketCount, children } = props;
    return (
        <Fragment>
            <Box borderRadius="50%" shadow="xl" position="fixed" bottom={16} right={8}>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    width={6}
                    height={6}
                    borderRadius="50%"
                    backgroundColor="red.400"
                    position="absolute"
                    top={-2}
                    right={-2}
                    zIndex={1}
                >
                    <Text fontSize="xs" fontWeight="bold">
                        {basketCount}
                    </Text>
                </Flex>
                <IconButton
                    onClick={onOpen}
                    colorScheme="blue"
                    icon={<TiShoppingCart />}
                    aria-label="View basket"
                    borderRadius="50%"
                />
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Basket</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{children}</ModalBody>
                </ModalContent>
            </Modal>
        </Fragment>
    );
};
