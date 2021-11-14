import { Button, HStack, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
};

export const ConfirmRemoveModal = (props: Props) => {
    const { isOpen, onClose, onConfirm } = props;
    const onConfirmClose = () => {
        onConfirm();
        onClose();
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Are you sure you want to remove?</ModalHeader>
                <ModalFooter>
                    <HStack>
                        <Button onClick={onConfirmClose} colorScheme="red">
                            Remove
                        </Button>
                        <Button onClick={onClose} colorScheme="gray">
                            Cancel
                        </Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
