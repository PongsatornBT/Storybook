import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/stories/components/InputElement/Button';

const meta = {
  title: 'Input Element/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {

  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
