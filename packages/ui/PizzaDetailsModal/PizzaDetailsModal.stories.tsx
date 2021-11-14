import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { createStory } from "@pizza/utils/createStory";
import { Fragment, useState } from "react";
import { PizzaDetailsModal } from "./PizzaDetailsModal";

const { meta } = createStory(PizzaDetailsModal, {
    title: "components/Pizza Details Modal",
});

export const PizzaDetailsModal_ = () => {
    const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true });
    const [size, setSize] = useState("S");
    const [topings, setTopings] = useState<Array<string>>([]);
    return (
        <Fragment>
            <Button onClick={onOpen}>Open modal</Button>
            <PizzaDetailsModal
                isOpen={isOpen}
                onClose={onClose}
                title="Pizza name as title"
                topings={["Wasabi", "Bean Curd", "Porkchop", "Mashed Potatoes"]}
                selectedSize={size}
                onSelectSize={setSize}
                selectedTopings={topings}
                onSelectTopings={setTopings}
                onAddToBasket={() => {}}
                sizes={["S", "M", "L"]}
            />
        </Fragment>
    );
};

export default meta;
