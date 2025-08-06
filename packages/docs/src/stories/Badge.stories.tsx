import { Badge, type BadgeProps } from "@rcapeto-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Display/Badge",
  component: Badge,
  args: {
   colorSchema: 'info',
   children: 'Done'
  },
   argTypes: {
    colorSchema: {
      options: ["info", "danger", "warning", "success", "neutral"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<BadgeProps>;

type Story = StoryObj<BadgeProps>;

export const Info: Story = {
  args: {
    colorSchema: 'info'
  }
};

export const Warning: Story = {
  args: {
    colorSchema: 'warning'
  }
};

export const Success: Story = {
   args: {
    colorSchema: 'success'
  }
};

export const Danger: Story = {
   args: {
    colorSchema: 'danger'
  }
};

export const Neutral: Story = {
   args: {
    colorSchema: 'neutral'
  }
};