// @ts-check

const path = require("path");

/** @type {import("@storybook/core-common").StorybookConfig} */
const config = {
    stories: [
        "../**/*.stories.mdx",
        "../**/*.stories.@(js|jsx|ts|tsx)",
        //
    ],

    addons: [
        { name: "@storybook/addon-links" },
        { name: "@storybook/addon-essentials" },
        //
    ],

    core: {
        builder: "webpack5",
    },

    webpackFinal: async (config, options) => {
        config.resolve.alias = config.resolve.alias || {};
        Object.assign(config.resolve.alias, {
            // https://github.com/chakra-ui/chakra-ui/issues/2527#issuecomment-728161743
            "@emotion/core": path.join(__dirname, "../node_modules/@emotion/react"),
            "emotion-theming": path.join(__dirname, "../node_modules/@emotion/react"),
        });

        return config;
    },
};

module.exports = config;
