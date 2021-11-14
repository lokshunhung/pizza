import { CheckCircleIcon } from "@chakra-ui/icons";
import { Container, Text, VStack } from "@chakra-ui/react";

export const OrderSuccess = () => {
    return (
        <Container flex="1" maxWidth="container.xl" paddingY={4}>
            <VStack spacing={8} padding={12} color="gray.300">
                <Text fontSize="6xl">
                    <CheckCircleIcon />
                </Text>
                <Text fontWeight="bold" fontSize="2xl">
                    Order successful
                </Text>
            </VStack>
        </Container>
    );
};
