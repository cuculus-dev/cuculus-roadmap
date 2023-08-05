import type { Meta, StoryObj } from '@storybook/react';

import RSCKuma from './RSCKuma';

const meta = {
  title: 'Example/RSCKuma',
  component: RSCKuma,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RSCKuma>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
