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

const pizzaSizes = ["S", "M", "L"];

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    topings: Array<string>;
    selectedSize: string;
    onSelectSize: (selectedSize: string) => void;
    selectedTopings: Array<string>;
    onSelectTopings: (selectedTopings: Array<string>) => void;
};

export const PizzaDetailsModal = (props: Props) => {
    const { isOpen, onClose, title, topings, selectedSize, onSelectSize, selectedTopings, onSelectTopings } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <SizeFormRow value={selectedSize} onChange={onSelectSize} />
                        <TopingsFormRow topings={topings} value={selectedTopings} onChange={onSelectTopings} />
                    </VStack>
                </ModalBody>
                <ModalFooter justifyContent="flex-start">
                    <Button colorScheme="blue">Add to basket</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
