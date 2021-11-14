import { Grid } from "@chakra-ui/react";
import { PizzaItem } from "@pizza/types";
import { PizzaCard } from "../PizzaCard/PizzaCard";

const dimensions = { width: 320 };

type Props = {
    pizzaListing: Array<PizzaItem>;
    onChoose: (pizzaId: string) => void;
};

export const PizzaGrid = (props: Props) => {
    const { pizzaListing, onChoose } = props;
    return (
        <Grid gridTemplateColumns={`repeat(auto-fill, minmax(${dimensions.width}px, 1fr))`} gap={8}>
            {pizzaListing.map((pizza, index) => (
                <PizzaCard pizza={pizza} onChoose={onChoose} key={index} />
            ))}
        </Grid>
    );
};
