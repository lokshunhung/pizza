import {
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
} from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";

type Props = {
    children?: React.ReactElement | Array<React.ReactElement> | undefined;
};

export const ViewBasketButton = (props: Props) => {
    const { children } = props;
    return (
        <Popover>
            <PopoverTrigger>
                <IconButton colorScheme="blue" icon={<TiShoppingCart />} aria-label="View basket" borderRadius="50%" />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>{children}</PopoverBody>
            </PopoverContent>
        </Popover>
    );
};
