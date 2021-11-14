import { PageFooter } from "@pizza/ui/PageFooter/PageFooter";
import { PageHeader } from "@pizza/ui/PageHeader/PageHeader";
import { PageScaffold } from "@pizza/ui/PageScaffold/PageScaffold";
import { PizzaLoadingSpinner } from "@pizza/ui/PizzaLoadingSpinner/PizzaLoadingSpinner";
import { PageBody } from "./PageBody";

export const Home = () => {
    const pizzaListing = [] as any;
    const orderItems = [] as any;
    return (
        <PageScaffold>
            <PageHeader />
            {/* <PizzaLoadingSpinner /> */}
            <PageBody pizzaListing={pizzaListing} orderItems={orderItems} />
            <PageFooter />
        </PageScaffold>
    );
};