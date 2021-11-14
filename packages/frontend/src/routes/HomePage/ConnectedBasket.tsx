import { Basket } from "@pizza/ui/Basket/Basket";
import { useDispatch } from "react-redux";
import { commands } from "../../store/actions";
import { useIsLoading, useTypedSelector } from "../../store/hooks";

export const ConnectedBasket = () => {
    const orderItems = useTypedSelector(state => state.app.orderItems);
    const isLoading = useIsLoading("checkout");

    const dispatch = useDispatch();
    const onCheckout = () => dispatch(commands.submitPizzaOrder(orderItems));
    const onEmptyBasket = () => dispatch(commands.clearAllPizzaOrderItem());
    const onRemoveOrder = (orderId: string) => dispatch(commands.removePizzaOrderItem(orderId));

    return (
        <Basket
            orderItems={orderItems}
            onCheckout={onCheckout}
            onEmptyBasket={onEmptyBasket}
            onRemoveOrder={onRemoveOrder}
            isLoading={isLoading}
        />
    );
};
