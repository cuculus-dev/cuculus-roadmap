import type { Meta, StoryObj } from '@storybook/react';
import Caption from './Caption';

const meta = {
  component: Caption,
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
