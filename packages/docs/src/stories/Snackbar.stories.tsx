import { Snackbar, type SnackbarProps } from "@rcapeto-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Info as Icon } from "phosphor-react";
import { fn } from "storybook/internal/test";

export default {
  title: "Feedback/Snackbar",
  component: Snackbar,
  args: {
    colorSchema: "info",
    message: "Default message",
    title: "Default title",
    onClose: () => {}
  },
  argTypes: {
    colorSchema: {
      options: ["info", "danger", "warning", "success", "neutral"],
      control: {
        type: "select",
      },
    },
    onClick: fn(),
    onClose: fn(),
  },
} satisfies Meta<SnackbarProps>;

type Story = StoryObj<SnackbarProps>;

export const Info: Story = {
  args: {
    colorSchema: "info",
  },
};

export const Warning: Story = {
  args: {
    colorSchema: "warning",
  },
};

export const Success: Story = {
  args: {
    colorSchema: "success",
  },
};

export const Danger: Story = {
  args: {
    colorSchema: "danger",
  },
};

export const Neutral: Story = {
  args: {
    colorSchema: "neutral",
  },
};

export const WithIcon: Story = {
  args: {
    colorSchema: "info",
    icon: <Icon />
  },
};


export const WithViewButton: Story = {
  args: {
    colorSchema: "info",
    icon: <Icon />,
    onClick: () => {},
  },
};

export const WithoutCloseButton: Story = {
  args: {
    colorSchema: "info",
    icon: <Icon />,
    onClick: () => {},
    onClose: undefined,
  },
};
