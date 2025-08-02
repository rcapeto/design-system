import { Avatar, type AvatarProps } from "@rcapeto-ui/react";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    src: 'https://github.com/rcapeto.png',
    alt: 'Raphael Capeto',
  },
  argTypes: {
    src: {
      type: 'string'
    }
  },
} satisfies Meta<AvatarProps>;

type Story = StoryObj<AvatarProps>;

export const Primary: Story = {};

export const WithFallback: Story = {
  args: {
    src:  undefined
  }
};

