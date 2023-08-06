import '@/styles/entry.css';

import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// @ts-ignore 解決策わからず
import theme from '@/components/theme/theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'responsive',
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: theme,
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export default preview;
