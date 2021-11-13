import * as BasketItemListStories from "../BasketItemList/BasketItemList.stories";
import { createStory } from "../utils/createStory";
import { Basket } from "./Basket";

const { Template, meta } = createStory(Basket, {
    title: "components/Basket",
});

export const Empty = Template.bind({});
Empty.args = {
    ...BasketItemListStories.Empty.args,
};

export const One = Template.bind({});
One.args = {
    ...BasketItemListStories.One.args,
};

export const Many = Template.bind({});
Many.args = {
    ...BasketItemListStories.Many.args,
};

export default meta;
