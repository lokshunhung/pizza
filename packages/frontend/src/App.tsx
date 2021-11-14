import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@pizza/ui/theme";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import { Provider } from "react-redux";
import { Store } from "redux";
import { AppRoutes } from "./AppRoutes";

type Props = {
    store: Store;
    history: History;
};

export const App = (props: Props) => {
    const { store, history } = props;
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ChakraProvider theme={theme}>
                    <AppRoutes />
                </ChakraProvider>
            </ConnectedRouter>
        </Provider>
    );
};
