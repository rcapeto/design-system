import { Button, type ButtonProps } from "@rcapeto-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "phosphor-react";
import { fn } from "storybook/test";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
    variant: "primary",
    size: "md",
    disabled: false,
    colorSchema: "success",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: fn(),
    colorSchema: {
      options: ["info", "danger", "warning", "success", "neutral"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    children: "Create New",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Cancel",
    variant: "tertiary",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Info: Story = {
  args: {
    colorSchema: "info",
  },
};

export const Danger: Story = {
  args: {
    colorSchema: "danger",
  },
};

export const Warning: Story = {
  args: {
    colorSchema: "warning",
  },
};


export const Neutral: Story = {
  args: {
    colorSchema: "neutral",
  },
};
