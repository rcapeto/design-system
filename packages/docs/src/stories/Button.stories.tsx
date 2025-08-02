import { Button, type ButtonProps } from '@rcapeto-ui/react'
import type { StoryObj, Meta } from '@storybook/react'
import { ArrowRight } from 'phosphor-react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { 
      type: 'function',
      description:'Callback when user click on button',
      action: 'clicked',
    },
  },
} satisfies Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>

export const Primary: Story = {
 
} 

export const Secondary: Story = {
  args: {
    children: 'Create New',
    variant: 'secondary',
  }
} 

export const Tertiary: Story = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
  }
} 

export const Small: Story = {
  args: {
    size: 'sm'
  }
} 

export const Disabled: Story = {
  args: {
    disabled: true
  }
} 

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}



