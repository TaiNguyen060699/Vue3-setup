import type { Meta, StoryObj } from '@storybook/vue3';

import Input from './Input.vue';

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    placeholder: 'Input ...',
    size: 'small'
  }
}

export const Medium: Story = {
  args: {
    placeholder: 'Input ...',
    size: 'medium'
  }
}

export const Large: Story = {
  args: {
    placeholder: 'Input ...',
    size: 'large'
  }
}