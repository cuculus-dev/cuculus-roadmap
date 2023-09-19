import type { Meta, StoryObj } from '@storybook/react';
import SkeltonCard from './SkeltonCard';

const meta = {
  component: SkeltonCard,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SkeltonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
