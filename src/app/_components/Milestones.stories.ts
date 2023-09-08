import type { Meta, StoryObj } from '@storybook/react';
import Milestones from './Milestones';

const meta = {
  component: Milestones,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Milestones>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
