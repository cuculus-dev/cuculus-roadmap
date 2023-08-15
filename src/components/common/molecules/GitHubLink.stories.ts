import type { Meta, StoryObj } from '@storybook/react';

import GitHubLink from './GitHubLink';

const meta = {
  title: 'components/common/molecules/GitHubLink',
  component: GitHubLink,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof GitHubLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    href: 'https://github.com/cuculus-dev',
  },
};
