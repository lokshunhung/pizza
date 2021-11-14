import { PageHeader } from "@pizza/ui/PageHeader/PageHeader";
import { PageScaffold } from "@pizza/ui/PageScaffold/PageScaffold";
import { PizzaGrid } from "@pizza/ui/PizzaGrid/PizzaGrid";

export const Home = () => {
    return (
        <PageScaffold>
            <PageHeader />
            <PizzaGrid pizzaListing={[]} />
        </PageScaffold>
    );
};
