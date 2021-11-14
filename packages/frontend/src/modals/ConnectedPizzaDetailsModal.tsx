import { PizzaDetailsModal } from "@pizza/ui/PizzaDetailsModal/PizzaDetailsModal";
import { useDispatch } from "react-redux";
import { commands } from "../store/actions";
import { useTypedSelector } from "../store/hooks";

const pizzaSizes = ["S", "M", "L"];

export const ConnectedPizzaDetailsModal = () => {
    const modalDetails = useTypedSelector(state => state.modal.pizzaDetails);
    const pizza = useTypedSelector(state =>
        state.app.pizzaListing.find(pizza => pizza.pizzaId === modalDetails?.pizzaId),
    );
    const dispatch = useDispatch();
    const onClose = () => dispatch(commands.closePizzaDetailsModal());
    const onAddToBasket = () => {
        dispatch(
            commands.addPizzaOrderItem({
                orderId: `${Date.now() + Math.floor(Math.random() * 1000)}`,
                pizzaId: pizza!.pizzaId,
                pizzaName: pizza!.name,
                pizzaPrice: pizza!.price,
                selectedSize: modalDetails!.selectedSize!,
                selectedToppings: modalDetails!.selectedToppings,
            }),
        );
        onClose();
    };
    const onSelectSize = (selectedSize: string) =>
        dispatch(commands.updatePizzaDetailsModalSelection({ selectedSize }));
    const onSelectToppings = (selectedToppings: Array<string>) =>
        dispatch(commands.updatePizzaDetailsModalSelection({ selectedToppings }));

    return (
        <PizzaDetailsModal
            isOpen={modalDetails !== null}
            onAddToBasket={onAddToBasket}
            onClose={onClose}
            sizes={pizzaSizes}
            title={pizza?.name || ""}
            topings={pizza?.toppings || []}
            selectedSize={modalDetails?.selectedSize || ""}
            selectedTopings={modalDetails?.selectedToppings || []}
            onSelectSize={onSelectSize}
            onSelectTopings={onSelectToppings}
        />
    );
};
