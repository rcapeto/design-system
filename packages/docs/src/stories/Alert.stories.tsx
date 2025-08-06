import { Alert, type AlertProps } from "@rcapeto-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/internal/test";

export default {
  title: "Feedback/Alert",
  component: Alert,
  args: {
   buttonText:  'Button',
   colorSchema: 'info',
   text: 'Here is an example of the alert text'
  },
   argTypes: {
    colorSchema: {
      options: ["info", "danger", "warning", "success", "neutral"],
      control: {
        type: "select",
      },
    },
     onClick: fn(),
  },
} satisfies Meta<AlertProps>;

type Story = StoryObj<AlertProps>;

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