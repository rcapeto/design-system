import { Box, Text, TextInput, type TextInputProps } from '@rcapeto-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  decorators: [
    Story => (
      <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        <Text>Label</Text>
        <Story />
      </Box>
    )
  ],
} satisfies Meta<TextInputProps>;

type Story = StoryObj<TextInputProps>

export const Primary: Story = {
  args: {
    placeholder: 'Type your name',
  }
} 

export const WithPrefix: Story = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'Your user name'
  }
} 

export const Disabled: Story = {
  args: {
    disabled: true,
  }
} 