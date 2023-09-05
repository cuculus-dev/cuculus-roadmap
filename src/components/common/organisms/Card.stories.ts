import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  component: Card,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'タイトル',
    description: '説明',
    label: 'ラベル',
    state: 'closed',
  },
};
