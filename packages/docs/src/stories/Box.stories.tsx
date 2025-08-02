import { Box, Text } from "@rcapeto-ui/react";
import type { BoxProps } from "@rcapeto-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Box</Text>
      </>
    ),
  },
} satisfies Meta<BoxProps>;

type Story = StoryObj<BoxProps>;

export const Primary: Story = {};