import { OrderSuccess } from "@pizza/ui/OrderSuccess/OrderSuccess";
import { PageFooter } from "@pizza/ui/PageFooter/PageFooter";
import { PageHeader } from "@pizza/ui/PageHeader/PageHeader";
import { PageScaffold } from "@pizza/ui/PageScaffold/PageScaffold";

export const OrderSuccessPage = () => {
    return (
        <PageScaffold>
            <PageHeader />
            <OrderSuccess />
            <PageFooter />
        </PageScaffold>
    );
};
