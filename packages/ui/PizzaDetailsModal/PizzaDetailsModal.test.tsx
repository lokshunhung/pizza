import "@testing-library/jest-dom"; // For extending types
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import { PizzaDetailsModal } from "./PizzaDetailsModal";

describe("PizzaDetailsModal", () => {
    const onAddToBasket = jest.fn();
    const onClose = jest.fn();
    const onSelectSize = jest.fn();
    const onSelectTopings = jest.fn();

    test("add to basket button disabled when size is not selected", () => {
        const sizeNotSelected = "";
        render(
            <PizzaDetailsModal
                isOpen
                onAddToBasket={onAddToBasket}
                onClose={onClose}
                title="title"
                sizes={["S", "M", "L"]}
                topings={[]}
                selectedSize={sizeNotSelected}
                onSelectSize={onSelectSize}
                selectedTopings={[]}
                onSelectTopings={onSelectTopings}
            />,
        );
        const button = screen.getByText("Add to basket");
        expect(button).toBeDisabled();
    });

    test("add to basket button enabled when size is selected", () => {
        const selectedSize = "S";
        render(
            <PizzaDetailsModal
                isOpen
                onAddToBasket={onAddToBasket}
                onClose={onClose}
                title="title"
                sizes={["S", "M", "L"]}
                topings={[]}
                selectedSize={selectedSize}
                onSelectSize={onSelectSize}
                selectedTopings={[]}
                onSelectTopings={onSelectTopings}
            />,
        );
        const button = screen.getByText("Add to basket");
        expect(button).not.toBeDisabled();
    });

    test("modal closes after clicking add to basket", () => {
        const selectedSize = "S";
        render(
            <PizzaDetailsModal
                isOpen
                onAddToBasket={onAddToBasket}
                onClose={onClose}
                title="title"
                sizes={["S", "M", "L"]}
                topings={[]}
                selectedSize={selectedSize}
                onSelectSize={onSelectSize}
                selectedTopings={[]}
                onSelectTopings={onSelectTopings}
            />,
        );
        const button = screen.getByText("Add to basket");
        button.click();
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
