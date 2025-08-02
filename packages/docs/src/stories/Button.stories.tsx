import { Button } from '@rcapeto-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

const meta =  {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      description: 'Tamanho do botão',
      options: ['small', 'big'],
      control: {
        type: 'select',
      },
      default: 'small',
      name: 'size',
    },
  }
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Enviar',
  },
} 

export const Secondary: Story = {
  args: {
    children: 'Enviar',
    size: 'big'
  }
} 

export default meta