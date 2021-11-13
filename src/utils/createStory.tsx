import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

interface CreateStoryReturn<P> {
    meta: ComponentMeta<React.ComponentType<P>>;
    Template: ComponentStory<React.ComponentType<P>>;
}

export function createStory<P>(
    Component: React.ComponentType<P>,
    meta: Omit<ComponentMeta<React.ComponentType<P>>, "component">,
): CreateStoryReturn<P> {
    return {
        meta: {
            ...meta,
            component: Component,
        },
        Template: (args: any) => <Component {...args} />,
    };
}
