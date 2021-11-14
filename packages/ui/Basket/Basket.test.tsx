import "@testing-library/jest-dom"; // For extending types
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import { Basket } from "./Basket";

const createOrderItems = () => [
    {
        orderId: "o1",
        pizzaId: "p1",
        pizzaName: "First pizza",
        pizzaPrice: 10,
        selectedSize: "S",
        selectedToppings: [],
    },
    {
        orderId: "o2",
        pizzaId: "p2",
        pizzaName: "Second pizza",
        pizzaPrice: 20,
        selectedSize: "S",
        selectedToppings: [],
    },
    {
        orderId: "o3",
        pizzaId: "p3",
        pizzaName: "Third pizza",
        pizzaPrice: 30,
        selectedSize: "S",
        selectedToppings: [],
    },
];

describe("Basket", () => {
    const onCheckout = jest.fn();
    const onEmptyBasket = jest.fn();
    const onRemoveOrder = jest.fn();

    test("disable checkout button when basket is empty", () => {
        render(
            <Basket
                orderItems={[]}
                onCheckout={onCheckout}
                onEmptyBasket={onEmptyBasket}
                onRemoveOrder={onRemoveOrder}
                isLoading={false}
            />,
        );
        const checkoutButton = screen.getByText("Checkout");
        expect(checkoutButton).toBeDisabled();
    });

    test("enable checkout button when basket has one item", () => {
        render(
            <Basket
                orderItems={createOrderItems().slice(0, 1)}
                onCheckout={onCheckout}
                onEmptyBasket={onEmptyBasket}
                onRemoveOrder={onRemoveOrder}
                isLoading={false}
            />,
        );
        const checkoutButton = screen.getByText("Checkout");
        expect(checkoutButton).not.toBeDisabled();
    });

    test("enable checkout button when basket has one item", () => {
        render(
            <Basket
                orderItems={createOrderItems()}
                onCheckout={onCheckout}
                onEmptyBasket={onEmptyBasket}
                onRemoveOrder={onRemoveOrder}
                isLoading={false}
            />,
        );
        const checkoutButton = screen.getByText("Checkout");
        expect(checkoutButton).not.toBeDisabled();
    });
});
