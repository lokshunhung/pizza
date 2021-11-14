import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    VStack,
} from "@chakra-ui/react";
import { SizeFormRow } from "./SizeFormRow";
import { TopingsFormRow } from "./TopingsFormRow";

type Props = {
    isOpen: boolean;
    onAddToBasket: () => void;
    onClose: () => void;
    title: string;
    sizes: Array<string>;
    topings: Array<string>;
    selectedSize: string;
    onSelectSize: (selectedSize: string) => void;
    selectedTopings: Array<string>;
    onSelectTopings: (selectedTopings: Array<string>) => void;
};

export const PizzaDetailsModal = (props: Props) => {
    const {
        isOpen,
        onAddToBasket,
        onClose,
        title,
        sizes,
        topings,
        selectedSize,
        onSelectSize,
        selectedTopings,
        onSelectTopings,
    } = props;
    const disabled = !selectedSize;
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <SizeFormRow sizes={sizes} value={selectedSize} onChange={onSelectSize} />
                        <TopingsFormRow topings={topings} value={selectedTopings} onChange={onSelectTopings} />
                    </VStack>
                </ModalBody>
                <ModalFooter justifyContent="flex-start">
                    <Button disabled={disabled} onClick={onAddToBasket} colorScheme="blue">
                        Add to basket
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
