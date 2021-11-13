import { Grid } from "@chakra-ui/react";
import { PizzaItem } from "@pizza/types";
import { PizzaCard } from "../PizzaCard/PizzaCard";

const dimensions = { width: 320 };

type Props = {
    pizzaListing: Array<PizzaItem>;
};

export const PizzaGrid = (props: Props) => {
    const { pizzaListing } = props;
    return (
        <Grid gridTemplateColumns={`repeat(auto-fill, minmax(${dimensions.width}px, 1fr))`} gap={8}>
            {pizzaListing.map((pizza, index) => (
                <PizzaCard pizza={pizza} key={index} />
            ))}
        </Grid>
    );
};
