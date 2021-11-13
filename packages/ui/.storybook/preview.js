import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter } from "react-router";
import { theme } from "../theme";
import "./font.css";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: "fullscreen",
};

export const decorators = [
    Story => (
        <ChakraProvider theme={theme}>
            <Story />
        </ChakraProvider>
    ),
    Story => (
        <MemoryRouter>
            <Story />
        </MemoryRouter>
    ),
];
