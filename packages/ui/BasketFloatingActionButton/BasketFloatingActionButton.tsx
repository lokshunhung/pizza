import {
    Box,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Basket } from "../Basket/Basket";

type Props = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    children: React.ReactElement<typeof Basket>;
};

export const BasketFloatingActionButton = (props: Props) => {
    const { isOpen, onOpen, onClose, children } = props;
    return (
        <Fragment>
            <Box borderRadius="50%" shadow="xl">
                <IconButton
                    onClick={onOpen}
                    colorScheme="blue"
                    icon={<TiShoppingCart />}
                    aria-label="View basket"
                    borderRadius="50%"
                    position="fixed"
                    bottom={16}
                    right={8}
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
