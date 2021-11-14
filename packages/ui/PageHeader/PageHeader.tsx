import { Box, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import imgPizza from "./pizza.png";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { ViewBasketButton } from "./ViewBasketButton";

type Props = {
    children?: React.ReactElement | Array<React.ReactElement> | undefined;
};

export const PageHeader = (props: Props) => {
    const { children } = props;
    const isDesktop = useBreakpointValue({ base: false, md: true });
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
                    {isDesktop ? <ViewBasketButton>{children}</ViewBasketButton> : null}
                </HStack>
            </HStack>
        </Box>
    );
};
