import { Box, Container, HStack, Link, Text, VStack } from "@chakra-ui/react";

export const PageFooter = () => {
    return (
        <Box width="full" backgroundColor="pink.800" color="white" paddingY={8}>
            <Container maxWidth="container.lg">
                <VStack justifyContent="space-between">
                    <Text>&copy; 2021 Pizza Limited. All right reserved.</Text>
                    <HStack>
                        <Link>Privacy Policy</Link>
                        <Link>Terms of Use</Link>
                    </HStack>
                </VStack>
            </Container>
        </Box>
    );
};
