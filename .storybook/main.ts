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
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      issuer: /\.tsx$/,
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
