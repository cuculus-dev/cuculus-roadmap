import type { Meta, StoryObj } from '@storybook/react';

import RCCPanda from './RCCPanda';

const meta = {
  title: 'Example/RCCPanda',
  component: RCCPanda,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RCCPanda>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
