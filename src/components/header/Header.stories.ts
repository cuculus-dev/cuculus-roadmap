import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
  title: 'header/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PC: Story = {
  args: {},
};
