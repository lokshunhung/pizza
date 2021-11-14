import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@pizza/ui/theme";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </ChakraProvider>
    );
};
