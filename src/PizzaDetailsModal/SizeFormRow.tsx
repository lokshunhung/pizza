import { Button, FormControl, FormLabel, HStack, Radio, RadioGroup } from "@chakra-ui/react";

const pizzaSizes = ["S", "M", "L"];

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export const SizeFormRow = (props: Props) => {
    const { value, onChange } = props;
    return (
        <FormControl>
            <FormLabel>Size</FormLabel>
            <RadioGroup defaultValue={pizzaSizes[0]!} value={value} onChange={onChange}>
                <HStack alignItems="flex-start">
                    {pizzaSizes.map(size => (
                        <Radio value={size} key={size}>
                            {size}
                        </Radio>
                    ))}
                </HStack>
            </RadioGroup>
        </FormControl>
    );
};
