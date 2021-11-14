import { Box, Container, HStack, Link, Text } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FooterButton } from "./FooterButton";

export const PageFooter = () => {
    return (
        <Box width="full" backgroundColor="pink.800" color="white" paddingY={8}>
            <Container maxWidth="container.lg">
                <HStack justifyContent="space-between">
                    <Text>&copy; 2021 Pizza Limited. All right reserved.</Text>
                    <HStack>
                        <Link>Privacy Policy</Link>
                        <Link>Terms of Use</Link>
                    </HStack>
                    <HStack>
                        <FooterButton icon={<FaFacebookF />} ariaLabel="link to facebook" />
                        <FooterButton icon={<FaLinkedinIn />} ariaLabel="link to linkedin" />
                        <FooterButton icon={<FaInstagram />} ariaLabel="link to linkedin" />
                    </HStack>
                </HStack>
            </Container>
        </Box>
    );
};
