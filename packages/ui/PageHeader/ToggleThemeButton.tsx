import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";

export const ToggleThemeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Tooltip label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}>
            <Box borderRadius="50%" shadow="md">
                {colorMode === "light" ? (
                    <IconButton
                        colorScheme="teal"
                        onClick={toggleColorMode}
                        icon={<MoonIcon />}
                        borderRadius="50%"
                        aria-label="toggle dark mode"
                    />
                ) : (
                    <IconButton
                        colorScheme="yellow"
                        onClick={toggleColorMode}
                        icon={<SunIcon />}
                        borderRadius="50%"
                        aria-label="toggle light mode"
                    />
                )}
            </Box>
        </Tooltip>
    );
};
