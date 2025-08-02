import { Checkbox, type CheckboxProps, Box, Text } from '@rcapeto-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
   decorators: [
    Story => (
      <Box as="label" css={{ display: 'flex', alignItems:'center', gap: '$2' }}>
        <Story />
        <Text>Accept terms of use</Text>
      </Box>
    )
  ],
} satisfies Meta<CheckboxProps>;

type Story = StoryObj<CheckboxProps>

export const Primary: Story = {} 