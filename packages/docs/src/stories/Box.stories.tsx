import { Box, Text, type BoxProps } from "@rcapeto-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  argTypes: {
    children: {
      control: null,
    }
  }
} satisfies Meta<BoxProps>;

type Story = StoryObj<BoxProps>;

export const Primary: Story = {};