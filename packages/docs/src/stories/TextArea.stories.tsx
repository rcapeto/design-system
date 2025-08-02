import { Box, Text, TextArea, type TextAreaProps } from '@rcapeto-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  decorators: [
    Story => (
      <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        <Text>Label</Text>
        <Story />
      </Box>
    )
  ],
} satisfies Meta<TextAreaProps>;

type Story = StoryObj<TextAreaProps>

export const Primary: Story = {
  args: {
    placeholder: 'Add an observation',
  }
} 

export const Disabled: Story = {
  args: {
    disabled: true,
  }
} 