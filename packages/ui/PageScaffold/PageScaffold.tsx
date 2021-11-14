import { Flex } from "@chakra-ui/react";

interface Props {
    children: React.ReactElement | Array<React.ReactElement>;
}

export const PageScaffold = (props: Props) => {
    const { children } = props;
    return (
        <Flex flexFlow="column" alignItems="stretch" justifyContent="stretch" width="full" minHeight="100vh">
            {children}
        </Flex>
    );
};
