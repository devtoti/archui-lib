import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { TailwindButton } from '../components/Button/TailwindButton';

const meta = {
  title: 'Example/TailwindButton',
  component: TailwindButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    intent: { 
      control: 'select', 
      options: ['primary', 'secondary'],
      description: 'Intent variant'
    },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'],
      description: 'Size variant'
    },
    label: {
      control: 'text',
      description: 'Text content'
    },
  },
  args: { 
    onClick: fn(),
    intent: 'primary',
    size: 'md',
    label: 'Button'
  },
} satisfies Meta<typeof TailwindButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    label: 'Secondary Button',
  },
};

export const Small: Story = {
  args: {
    intent: 'primary',
    size: 'sm',
    label: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    intent: 'primary',
    size: 'md',
    label: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    intent: 'primary',
    size: 'lg',
    label: 'Large Button',
  },
};

export const SecondaryLarge: Story = {
  args: {
    intent: 'secondary',
    size: 'lg',
    label: 'Secondary Large',
  },
};

export const Playground: Story = {
  args: {
    intent: 'primary',
    size: 'md',
    label: 'Playground Button',
  },
};
