import { AspectRatio, Box } from "@chakra-ui/react";

type Props = {
    ratio: number;
    src: string;
};

export const AspectRatioImage = (props: Props) => {
    const { ratio, src } = props;
    return (
        <AspectRatio ratio={ratio}>
            <Box position="absolute" top={0} bottom={0} left={0} right={4}>
                <img src={src} style={{ objectFit: "fill" }} />
            </Box>
        </AspectRatio>
    );
};
