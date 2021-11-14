import { Container, Spinner, Text, VStack } from "@chakra-ui/react";

export const PizzaLoadingSpinner = () => {
    return (
        <Container flex="1" maxWidth="container.xl" paddingY={4}>
            <VStack spacing={8} padding={12} color="gray.300">
                <Spinner size="xl" />
                <Text fontWeight="bold" fontSize="2xl">
                    Loading pizzas...
                </Text>
            </VStack>
        </Container>
    );
};
