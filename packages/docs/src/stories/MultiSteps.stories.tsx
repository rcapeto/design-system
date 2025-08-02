import { Box, MultiSteps, Text, type MultiStepsProps } from "@rcapeto-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Form/MultiSteps",
  component: MultiSteps,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => (
      <Box css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
        <Text>Your order status:</Text>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<MultiStepsProps>;

type Story = StoryObj<MultiStepsProps>;

export const Primary: Story = {};

export const Full: Story = {
  args: {
    currentStep: 4,
  }
};
