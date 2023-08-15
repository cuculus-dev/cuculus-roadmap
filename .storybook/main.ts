const path = require('path');
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    /**
     * FIXME 良い方法があればそっちに変更したい。
     * @svgr/webpackを使ってSVGを表示できるようにSVG loaderを上書きしてる
     */
    config.module.rules = config.module.rules.map((rule) => {
      if (
        rule &&
        rule !== '...' &&
        rule.test instanceof RegExp &&
        rule.test.test('.svg')
      ) {
        rule.exclude = /\.svg$/;
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ['@svgr/webpack'],
    });
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        ...{
          '@': path.resolve(__dirname, '../src'),
          '@assets': path.resolve(__dirname, '../public'),
        },
      };
    }

    return config;
  },
};
export default config;
