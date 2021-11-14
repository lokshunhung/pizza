import { Box, HStack, Text } from "@chakra-ui/react";
import imgPizza from "./pizza.png";
import { ToggleThemeButton } from "./ToggleThemeButton";

export const PageHeader = () => {
    return (
        <Box padding={4} width="full" backgroundColor="cyan.600">
            <HStack>
                <Box flex="1" />

                <HStack justifyContent="center">
                    <img src={imgPizza} width={50} height={50} alt="" />
                    <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase">
                        Pizza
                    </Text>
                </HStack>

                <HStack flex="1" justifyContent="flex-end">
                    <ToggleThemeButton />
                </HStack>
            </HStack>
        </Box>
    );
};
