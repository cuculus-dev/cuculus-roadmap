import type { Meta, StoryObj } from '@storybook/react';

import CuculusLogo from './CuculusLogo';

const meta = {
  component: CuculusLogo,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CuculusLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    href: '/',
  },
};
