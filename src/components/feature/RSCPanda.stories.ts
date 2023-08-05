import type { Meta, StoryObj } from '@storybook/react';

import RSCPanda from './RSCPanda';

const meta = {
  title: 'Example/RSCPanda',
  component: RSCPanda,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RSCPanda>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
