import "@testing-library/jest-dom"; // For extending types
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import { BasketItemList } from "./BasketItemList";

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

describe("BasketItemList", () => {
    test("total is 0 initially", () => {
        const onRemoveOrder = jest.fn();
        render(<BasketItemList orderItems={[]} onRemoveOrder={onRemoveOrder} />);
        expect(screen.getByText(/Total/).parentElement).toHaveTextContent("$0.00");
    });

    test("calculates total", () => {
        const onRemoveOrder = jest.fn();
        render(<BasketItemList orderItems={createOrderItems()} onRemoveOrder={onRemoveOrder} />);
        expect(screen.getByText(/Total/).parentElement).toHaveTextContent("$60.00");
    });

    test("can remove item", () => {
        const onRemoveOrder = jest.fn();
        const { rerender } = render(<BasketItemList orderItems={createOrderItems()} onRemoveOrder={onRemoveOrder} />);
        expect(screen.getByText(/Total/).parentElement).toHaveTextContent("$60.00");
        const deleteButtons = screen.getAllByLabelText("Remove");
        expect(deleteButtons).not.toHaveLength(0);
        deleteButtons[0]!.click();
        screen.getByText("Remove").click();
        expect(onRemoveOrder).toHaveBeenCalledWith("o1");

        rerender(<BasketItemList orderItems={createOrderItems().slice(1)} onRemoveOrder={onRemoveOrder} />);
        expect(screen.getByText(/Total/).parentElement).toHaveTextContent("$50.00");
    });
});
