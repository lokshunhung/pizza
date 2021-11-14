import { PageFooter } from "@pizza/ui/PageFooter/PageFooter";
import { PageHeader } from "@pizza/ui/PageHeader/PageHeader";
import { PageScaffold } from "@pizza/ui/PageScaffold/PageScaffold";
import { PizzaLoadingSpinner } from "@pizza/ui/PizzaLoadingSpinner/PizzaLoadingSpinner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { commands } from "../../store/actions";
import { useIsLoading } from "../../store/hooks";
import { PageBody } from "./PageBody";

export const HomePage = () => {
    const isLoading = useIsLoading();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(commands.fetchPizzaListing());
    }, []);

    return (
        <PageScaffold>
            <PageHeader />
            {isLoading ? <PizzaLoadingSpinner /> : <PageBody />}
            <PageFooter />
        </PageScaffold>
    );
};
