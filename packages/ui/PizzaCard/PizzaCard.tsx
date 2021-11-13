import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { PizzaItem } from "@pizza/types";
import { AspectRatioImage } from "../AspectRatioImage/AspectRatioImage";

const dimensions = { width: 640, height: 390 };

type Props = {
    pizza: PizzaItem;
};

export const PizzaCard = (props: Props) => {
    const { pizza } = props;
    return (
        <Box padding={4} borderWidth={1} borderStyle="solid" borderColor="gray.100" borderRadius="md" boxShadow="md">
            <VStack spacing={4} alignItems="stretch" justifyContent="center">
                <Box borderRadius="md" overflow="hidden">
                    <AspectRatioImage ratio={dimensions.width / dimensions.height} src={pizza.image} />
                </Box>
                <Text textAlign="center">
                    {pizza.description.name} - ${pizza.description.price.toFixed(2)}
                </Text>
                <Button colorScheme="blue">Choose</Button>
            </VStack>
        </Box>
    );
};
