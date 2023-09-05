import type { Meta, StoryObj } from '@storybook/react';
import Issues from './Issues';

const meta = {
  component: Issues,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Issues>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    milestoneNumber: 1,
  },
};
