import type { Meta, StoryObj } from '@storybook/react';

import RCCKuma from './RCCKuma';

const meta = {
  title: 'Example/RCCKuma',
  component: RCCKuma,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RCCKuma>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
