const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    config.cache = false;
    // add SCSS support for CSS Modules
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: '@import "./src/styles/partials"; @import "./src/styles/globals.scss";',
          },
        }
      ],
      include: path.resolve(__dirname, '../src'),
    });


    return config;
  }
}
