import { IconButton } from "@chakra-ui/react";

interface Props {
    icon: React.ReactElement;
    ariaLabel: string;
}

export const FooterButton = (props: Props) => {
    const { icon, ariaLabel } = props;
    return <IconButton icon={icon} aria-label={ariaLabel} variant="outline" size="sm" borderRadius="50%" />;
};
