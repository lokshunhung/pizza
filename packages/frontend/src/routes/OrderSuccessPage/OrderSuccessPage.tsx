import { Button } from "@chakra-ui/react";
import { OrderSuccess } from "@pizza/ui/OrderSuccess/OrderSuccess";
import { PageFooter } from "@pizza/ui/PageFooter/PageFooter";
import { PageHeader } from "@pizza/ui/PageHeader/PageHeader";
import { PageScaffold } from "@pizza/ui/PageScaffold/PageScaffold";
import { Link } from "react-router-dom";

export const OrderSuccessPage = () => {
    return (
        <PageScaffold>
            <PageHeader />
            <OrderSuccess>
                <Link to="/">
                    <Button colorScheme="blue">Back to home page</Button>
                </Link>
            </OrderSuccess>
            <PageFooter />
        </PageScaffold>
    );
};
