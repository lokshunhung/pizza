import { AspectRatio, Box, Flex, Spinner } from "@chakra-ui/react";
import { Fragment } from "react";

type Props = {
    ratio: number;
    src: string;
};

export const AspectRatioImage = (props: Props) => {
    const { ratio, src } = props;
    return (
        <AspectRatio ratio={ratio}>
            <Fragment>
                <Flex position="absolute" top={0} bottom={0} left={0} right={0}>
                    <Spinner size="lg" />
                </Flex>
                <Box position="absolute" top={0} bottom={0} left={0} right={4}>
                    <img src={src} style={{ objectFit: "fill" }} />
                </Box>
            </Fragment>
        </AspectRatio>
    );
};
