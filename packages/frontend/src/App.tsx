import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@pizza/ui/theme";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Store } from "redux";
import { AppRoutes } from "./AppRoutes";

type Props = {
    store: Store;
};

export const App = (props: Props) => {
    const { store } = props;
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    );
};
