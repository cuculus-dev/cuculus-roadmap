import type { Meta, StoryObj } from '@storybook/react';

import LinkButton from './LinkButton';

const meta = {
  component: LinkButton,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    href: '/',
    children: 'Home',
  },
};
