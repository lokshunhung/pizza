import { Text, Container, Icon, Spinner, VStack } from "@chakra-ui/react";
import { FaPizzaSlice } from "react-icons/fa";

export const NoPizzaPlaceholder = () => {
    return (
        <Container flex="1" maxWidth="container.xl" paddingY={4}>
            <VStack spacing={8} padding={12} color="gray.300">
                <Text fontSize="6xl">
                    <FaPizzaSlice />
                </Text>
                <Text fontWeight="bold" fontSize="2xl">
                    No pizzas available
                </Text>
            </VStack>
        </Container>
    );
};
