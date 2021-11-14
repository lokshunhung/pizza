import { useDisclosure } from "@chakra-ui/hooks";
import { useBreakpointValue } from "@chakra-ui/react";
import { BasketFloatingActionButton } from "@pizza/ui/BasketFloatingActionButton/BasketFloatingActionButton";
import { PageFooter } from "@pizza/ui/PageFooter/PageFooter";
import { PageHeader } from "@pizza/ui/PageHeader/PageHeader";
import { PageScaffold } from "@pizza/ui/PageScaffold/PageScaffold";
import { PizzaLoadingSpinner } from "@pizza/ui/PizzaLoadingSpinner/PizzaLoadingSpinner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { commands } from "../../store/actions";
import { useIsLoading } from "../../store/hooks";
import { ConnectedBasket } from "./ConnectedBasket";
import { PageBody } from "./PageBody";

export const HomePage = () => {
    const isLoading = useIsLoading();
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isDesktop = useBreakpointValue({ base: false, md: true });

    useEffect(() => {
        dispatch(commands.fetchPizzaListing());
    }, []);

    return (
        <PageScaffold>
            <PageHeader />
            {isLoading ? <PizzaLoadingSpinner /> : <PageBody />}
            <PageFooter />

            {isDesktop ? null : (
                <BasketFloatingActionButton isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                    <ConnectedBasket />
                </BasketFloatingActionButton>
            )}
        </PageScaffold>
    );
};
