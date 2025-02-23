import type { Meta, StoryObj } from '@storybook/react';

import Textbox from '../components/Textbox/components/Textbox';

const meta = {
  title: 'Example/Textbox',
  component: Textbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { 
    onClick: ()=>{alert("test")}
  },
} satisfies Meta<typeof Textbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Textbox',
  },
};
