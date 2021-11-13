import { Checkbox, CheckboxGroup, FormControl, FormLabel, VStack } from "@chakra-ui/react";

type Props = {
    topings: Array<string>;
    value: Array<string>;
    onChange: (value: Array<string>) => void;
};

export const TopingsFormRow = (props: Props) => {
    const { topings, value, onChange } = props;
    return (
        <FormControl>
            <FormLabel>Topings</FormLabel>
            <CheckboxGroup value={value} onChange={onChange}>
                <VStack alignItems="flex-start">
                    {topings.map(item => (
                        <Checkbox value={item}>{item}</Checkbox>
                    ))}
                </VStack>
            </CheckboxGroup>
        </FormControl>
    );
};
